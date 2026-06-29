// RunwayIQ — Quiz Logic
// Depends on: data/airports.js, data/config.js

// ─── AIRPORT DATA ─────────────────────────────────────────────────────────────
// Top 200 passenger airports (IATA, Name, City, Country, lat, lon)


// ─── STATE ────────────────────────────────────────────────────────────────────
let selectedMode = 'code';
let selectedRounds = 10;
let selectedDifficulty = 'easy';
let quizQueue = [];
let currentIdx = 0;
let currentAirport = null;
let currentQuestionMode = 'code';
let answered = false;
let correctCount = 0;
let wrongCount = 0;
let history = [];
let acHighlight = -1;

// ─── UI HELPERS ───────────────────────────────────────────────────────────────
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function selectMode(mode) {
  selectedMode = mode;
  document.querySelectorAll('.mode-card').forEach(c => {
    c.classList.toggle('selected', c.dataset.mode === mode);
  });
}

function setRounds(n) {
  selectedRounds = n;
  [10,20,50].forEach(r => {
    document.getElementById('rbtn-'+r).classList.toggle('active', r === n);
  });
}

function setDifficulty(d) {
  selectedDifficulty = d;
  document.getElementById('dbtn-easy').classList.toggle('active', d === 'easy');
  document.getElementById('dbtn-hard').classList.toggle('active', d === 'hard');
  document.getElementById('diff-desc').textContent = d === 'easy'
    ? 'Autocomplete hilft beim Tippen'
    : 'Kein Dropdown u2014 exakter Name erforderlich';
}

function updateHeader() {
  document.getElementById('hdr-correct').textContent = correctCount;
  document.getElementById('hdr-wrong').textContent = wrongCount;
  document.getElementById('hdr-total').textContent = correctCount + wrongCount;
}

// ─── QUIZ LOGIC ───────────────────────────────────────────────────────────────
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function startQuiz() {
  correctCount = 0;
  wrongCount = 0;
  history = [];
  updateHeader();

  const pool = shuffle([...AIRPORTS]).slice(0, selectedRounds);
  quizQueue = pool.map((ap, i) => {
    let qMode;
    if (selectedMode === 'code') qMode = 'code';
    else if (selectedMode === 'satellite') qMode = 'satellite';
    else qMode = i % 2 === 0 ? 'code' : 'satellite';
    return { airport: ap, mode: qMode };
  });

  currentIdx = 0;
  showScreen('screen-quiz');
  loadQuestion();
}

function loadQuestion() {
  answered = false;
  const q = quizQueue[currentIdx];
  currentAirport = q.airport;
  currentQuestionMode = q.mode;
  acHighlight = -1;

  // meta
  document.getElementById('q-counter').textContent = `Frage ${currentIdx + 1} / ${quizQueue.length}`;
  document.getElementById('q-mode-badge').textContent = q.mode === 'code' ? 'IATA-Code' : 'Satellit';
  const diffLabels = {easy:'Easy', hard:'Hard', expert:'Expert'};
  document.getElementById('q-diff-badge').textContent = diffLabels[selectedDifficulty] || 'Easy';
  const pct = (currentIdx / quizQueue.length) * 100;
  document.getElementById('progress-fill').style.width = pct + '%';

  // input reset
  const inp = document.getElementById('answer-input');
  inp.value = '';
  inp.className = 'answer-input';
  inp.disabled = false;
  const placeholders = {
    easy:   'Flughafenname oder Stadt eingeben…',
    hard:   'Stadtname eingeben…',
    expert: 'Vollständigen Flughafennamen eingeben…'
  };
  inp.placeholder = placeholders[selectedDifficulty] || 'Antwort eingeben…';
  inp.focus();
  document.getElementById('autocomplete-list').innerHTML = '';
  document.getElementById('feedback-panel').className = 'feedback-panel';
  document.getElementById('feedback-panel').innerHTML = '';
  document.getElementById('btn-check').disabled = false;
  document.getElementById('btn-skip').textContent = 'Überspringen';

  // question card
  const card = document.getElementById('question-card');
  if (q.mode === 'code') {
    card.innerHTML = `
      <div class="code-display">
        <div class="iata-code">${currentAirport[0]}</div>
        <div class="hint">Welcher Flughafen verbirgt sich hinter diesem IATA-Code?</div>
      </div>`;
  } else {
    const [, , , , lat, lon] = currentAirport;
    const zoom = CONFIG.SATELLITE_ZOOM;
    const mapboxToken = CONFIG.MAPBOX_TOKEN;
    const imgUrl = `https://api.mapbox.com/styles/v1/mapbox/satellite-v9/static/${lon},${lat},${zoom},0/${CONFIG.SATELLITE_SIZE}?access_token=${mapboxToken}`;
    card.innerHTML = `
      <div class="satellite-display">
        <div class="sat-loading" id="sat-loading">
          <div class="spinner"></div>
          <span>Satellitenbild wird geladen…</span>
        </div>
        <img
          src="${imgUrl}"
          alt="Satellite view"
          onload="document.getElementById('sat-loading').style.display='none'"
          onerror="document.getElementById('sat-loading').innerHTML='<span>Bild konnte nicht geladen werden</span>'"
        />
        <div class="sat-overlay">🛰️ SATELLITE VIEW</div>
      </div>`;
  }
}

function normalize(str) {
  return str.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9 ]/g, '')
    .trim();
}

// Levenshtein distance — counts minimum edits between two strings
function levenshtein(a, b) {
  const m = a.length, n = b.length;
  const dp = Array.from({length: m + 1}, (_, i) => [i]);
  for (let j = 1; j <= n; j++) dp[0][j] = j;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = a[i-1] === b[j-1]
        ? dp[i-1][j-1]
        : 1 + Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]);
    }
  }
  return dp[m][n];
}

// How many typos are allowed based on target word length
function allowedErrors(target) {
  if (target.length <= 4) return 0;
  if (target.length <= 7) return 1;
  if (target.length <= 12) return 2;
  return 3;
}

function fuzzyMatch(input, target) {
  return levenshtein(input, target) <= allowedErrors(target);
}

function isCorrect(input, airport) {
  const n = normalize(input);
  const name = normalize(airport[1]);
  const city = normalize(airport[2]);
  const code = airport[0].toLowerCase();

  if (selectedDifficulty === 'expert') {
    // Must match full airport name, typos allowed
    return fuzzyMatch(n, name);
  }

  if (selectedDifficulty === 'hard') {
    // Must match city name, typos allowed
    return fuzzyMatch(n, city);
  }

  // Easy: generous matching
  if (n === code && currentQuestionMode !== 'code') return true;
  if (n === name) return true;
  if (n === city) return true;
  if (name.includes(n) && n.length >= 4) return true;
  if (city.includes(n) && n.length >= 4) return true;
  if (n.includes(city) && city.length >= 4) return true;
  return false;
}

function checkAnswer() {
  if (answered) { nextQuestion(); return; }

  const inp = document.getElementById('answer-input');
  const val = inp.value.trim();
  if (!val) return;

  document.getElementById('autocomplete-list').innerHTML = '';
  answered = true;
  inp.disabled = true;
  document.getElementById('btn-skip').textContent = 'Nächste Frage →';
  document.getElementById('btn-check').textContent = 'Weiter';

  const ok = isCorrect(val, currentAirport);
  const feedback = document.getElementById('feedback-panel');

  if (ok) {
    inp.classList.add('correct');
    correctCount++;
    feedback.className = 'feedback-panel correct';
    feedback.innerHTML = `✓ Richtig! <strong>${currentAirport[1]}</strong>
      <div class="airport-info">${currentAirport[0]} · ${currentAirport[2]}, ${currentAirport[3]}</div>`;
  } else {
    inp.classList.add('wrong');
    wrongCount++;
    feedback.className = 'feedback-panel wrong';
    feedback.innerHTML = `✗ Leider falsch. Die richtige Antwort lautet: <strong>${currentAirport[1]}</strong>
      <div class="airport-info">${currentAirport[0]} · ${currentAirport[2]}, ${currentAirport[3]}</div>`;
  }

  history.push({ airport: currentAirport, correct: ok, given: val, mode: currentQuestionMode });
  updateHeader();
}

function skipQuestion() {
  if (answered) { nextQuestion(); return; }
  // treat as wrong
  const inp = document.getElementById('answer-input');
  inp.disabled = true;
  answered = true;
  wrongCount++;
  document.getElementById('autocomplete-list').innerHTML = '';
  document.getElementById('btn-skip').textContent = 'Nächste Frage →';
  document.getElementById('btn-check').textContent = 'Weiter';

  const feedback = document.getElementById('feedback-panel');
  feedback.className = 'feedback-panel wrong';
  feedback.innerHTML = `→ Übersprungen. Richtige Antwort: <strong>${currentAirport[1]}</strong>
    <div class="airport-info">${currentAirport[0]} · ${currentAirport[2]}, ${currentAirport[3]}</div>`;

  history.push({ airport: currentAirport, correct: false, given: '—', mode: currentQuestionMode });
  updateHeader();
}

function nextQuestion() {
  currentIdx++;
  if (currentIdx >= quizQueue.length) {
    showResults();
  } else {
    document.getElementById('btn-check').textContent = 'Prüfen';
    loadQuestion();
  }
}

function onKeyDown(e) {
  const list = document.getElementById('autocomplete-list');
  const items = list.querySelectorAll('.ac-item');
  if (e.key === 'ArrowDown') {
    e.preventDefault();
    acHighlight = Math.min(acHighlight + 1, items.length - 1);
    items.forEach((it, i) => it.classList.toggle('highlighted', i === acHighlight));
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    acHighlight = Math.max(acHighlight - 1, 0);
    items.forEach((it, i) => it.classList.toggle('highlighted', i === acHighlight));
  } else if (e.key === 'Enter') {
    if (acHighlight >= 0 && items[acHighlight]) {
      document.getElementById('answer-input').value = items[acHighlight].dataset.name;
      document.getElementById('autocomplete-list').innerHTML = '';
      acHighlight = -1;
    } else {
      checkAnswer();
    }
  } else if (e.key === 'Escape') {
    document.getElementById('autocomplete-list').innerHTML = '';
  }
}

function onInputChange() {
  if (answered) return;
  // Hard / Expert mode: no autocomplete
  if (selectedDifficulty === 'hard' || selectedDifficulty === 'expert') {
    document.getElementById('autocomplete-list').innerHTML = '';
    return;
  }
  const val = document.getElementById('answer-input').value.trim().toLowerCase();
  const list = document.getElementById('autocomplete-list');
  acHighlight = -1;

  if (val.length < 2) { list.innerHTML = ''; return; }

  const matches = AIRPORTS.filter(ap => {
    const name = ap[1].toLowerCase();
    const city = ap[2].toLowerCase();
    // In code-mode: never match by IATA code — only name or city
    if (currentQuestionMode === 'code') {
      return name.includes(val) || city.includes(val);
    }
    const code = ap[0].toLowerCase();
    return code.startsWith(val) || name.includes(val) || city.includes(val);
  }).slice(0, 8);

  // Never show IATA codes in the dropdown — they give away the answer
  list.innerHTML = matches.map(ap => `
    <div class="ac-item" data-name="${ap[1]}" onclick="selectAC('${ap[1].replace(/'/g,"\\'")}')">
      <span class="ac-name">${ap[1]}</span>
      <span class="ac-country">${ap[2]}, ${ap[3]}</span>
    </div>`).join('');
}

function selectAC(name) {
  document.getElementById('answer-input').value = name;
  document.getElementById('autocomplete-list').innerHTML = '';
  acHighlight = -1;
  document.getElementById('answer-input').focus();
}

// ─── RESULTS ──────────────────────────────────────────────────────────────────
function showResults() {
  const total = quizQueue.length;
  const pct = Math.round((correctCount / total) * 100);

  let emoji = '😅';
  let label = 'Nicht schlecht — weiter üben!';
  if (pct >= 90) { emoji = '🏆'; label = 'Exzellent — du kennst jeden Flughafen!'; }
  else if (pct >= 70) { emoji = '✈️'; label = 'Solide Leistung — Aviation-Kenner!'; }
  else if (pct >= 50) { emoji = '🗺️'; label = 'Gut — aber da ist noch Luft nach oben.'; }
  else if (pct >= 30) { emoji = '📍'; label = 'Nicht schlecht — weiter üben!'; }

  document.getElementById('result-emoji').textContent = emoji;
  document.getElementById('result-score').textContent = `${correctCount} / ${total}`;
  document.getElementById('result-label').textContent = label;
  document.getElementById('stat-correct').textContent = correctCount;
  document.getElementById('stat-wrong').textContent = wrongCount;
  document.getElementById('stat-pct').textContent = pct + '%';
  document.getElementById('progress-fill').style.width = '100%';

  const hl = document.getElementById('history-list');
  hl.innerHTML = history.map(h => `
    <div class="history-item ${h.correct ? 'correct-h' : 'wrong-h'}">
      <span class="hi-status">${h.correct ? '✅' : '❌'}</span>
      <span class="hi-code">${h.airport[0]}</span>
      <span class="hi-name">${h.airport[1]}</span>
      <span class="hi-given">${h.given}</span>
    </div>`).join('');

  showScreen('screen-result');
}

// close autocomplete on outside click
document.addEventListener('click', e => {
  if (!e.target.closest('.answer-input-wrap')) {
    document.getElementById('autocomplete-list').innerHTML = '';
  }
});