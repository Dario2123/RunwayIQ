// RunwayIQ — Quiz Logic
// Depends on: data/config.js, data/airports.js, data/airport-sizes.js, data/categories.js, js/i18n.js

// ─── STATE ────────────────────────────────────────────────────────────────────
let selectedMode = 'code';
let selectedRounds = 10;
let selectedDifficulty = 'easy';
let selectedPool = [...AIRPORTS];
let selectedCategoryIcon = '🌍';
let selectedCategoryKey = 'cat.all.label';

let quizQueue = [];
let currentIdx = 0;
let currentAirport = null;
let currentQuestionMode = 'code';
let answered = false;
let correctCount = 0;
let wrongCount = 0;
let history = [];
let acHighlight = -1;

// ─── UTILS ────────────────────────────────────────────────────────────────────
function esc(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function getCatLabel() {
  return `${selectedCategoryIcon} ${t(selectedCategoryKey)}`;
}

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
  [10, 20, 50].forEach(r => {
    document.getElementById('rbtn-' + r).classList.toggle('active', r === n);
  });
}

function setDifficulty(d) {
  selectedDifficulty = d;
  ['easy', 'hard', 'expert'].forEach(level => {
    document.getElementById('dbtn-' + level).classList.toggle('active', level === d);
  });
  document.getElementById('diff-desc').textContent = t('diffDesc_' + d) ?? t('diffDesc_easy');
}

function updateHeader() {
  document.getElementById('hdr-correct').textContent = correctCount;
  document.getElementById('hdr-wrong').textContent = wrongCount;
  document.getElementById('hdr-total').textContent = correctCount + wrongCount;
}

function updateCategoryIndicator() {
  document.getElementById('cat-indicator-value').textContent = getCatLabel();
}

// ─── CATEGORY SCREEN ──────────────────────────────────────────────────────────
function showCatScreen() {
  renderCatGroups();
  showScreen('screen-category');
}

function renderCatGroups() {
  const grid = document.getElementById('cat-group-grid');
  grid.innerHTML = CATEGORY_GROUPS.map(g => {
    const count = g.direct ? g.filter().length : g.items.length;
    const sub = g.direct
      ? `${count} ${count === 1 ? t('airport') : t('airports')}`
      : `${count} ${count === 1 ? t('category') : t('categories')}`;
    return `<div class="cat-group-card" data-gid="${esc(g.id)}">
      <span class="cat-card-icon">${g.icon}</span>
      <div class="cat-card-label">${esc(t(g.labelKey))}</div>
      <div class="cat-card-sub">${sub}</div>
    </div>`;
  }).join('');

  grid.onclick = e => {
    const card = e.target.closest('.cat-group-card');
    if (!card) return;
    const group = CATEGORY_GROUPS.find(g => g.id === card.dataset.gid);
    if (!group) return;
    if (group.direct) applyCategory(group.filter, group.icon, group.labelKey);
    else renderCatItems(group);
  };

  document.getElementById('cat-groups-view').hidden = false;
  document.getElementById('cat-items-view').hidden = true;
}

function renderCatItems(group) {
  document.getElementById('cat-breadcrumb').textContent = t(group.labelKey);

  const grid = document.getElementById('cat-item-grid');
  grid.innerHTML = group.items.map(item => {
    const count = item.filter().length;
    const empty = count === 0;
    return `<div class="cat-item-card${empty ? ' cat-item-empty' : ''}" data-gid="${esc(group.id)}" data-iid="${esc(item.id)}">
      <span class="cat-card-icon">${item.icon}</span>
      <div class="cat-card-label">${esc(t(item.labelKey))}</div>
      <div class="cat-card-sub">${count} ${count === 1 ? t('airport') : t('airports')}</div>
    </div>`;
  }).join('');

  grid.onclick = e => {
    const card = e.target.closest('.cat-item-card:not(.cat-item-empty)');
    if (!card) return;
    const g = CATEGORY_GROUPS.find(g => g.id === card.dataset.gid);
    const item = g?.items.find(i => i.id === card.dataset.iid);
    if (item) applyCategory(item.filter, item.icon, item.labelKey);
  };

  document.getElementById('cat-groups-view').hidden = true;
  document.getElementById('cat-items-view').hidden = false;
}

function applyCategory(filterFn, icon, labelKey) {
  selectedPool = filterFn();
  selectedCategoryIcon = icon;
  selectedCategoryKey = labelKey;
  updateCategoryIndicator();
  showScreen('screen-start');
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

  const rounds = Math.min(selectedRounds, selectedPool.length);
  const pool = shuffle([...selectedPool]).slice(0, rounds);
  quizQueue = pool.map((ap, i) => {
    let qMode;
    if (selectedMode === 'code') qMode = 'code';
    else if (selectedMode === 'satellite') qMode = 'satellite';
    else qMode = i % 2 === 0 ? 'code' : 'satellite';
    return { airport: ap, mode: qMode };
  });

  currentIdx = 0;
  document.getElementById('quiz-category-tag').textContent = getCatLabel();
  showScreen('screen-quiz');
  loadQuestion();
}

function loadQuestion() {
  answered = false;
  const q = quizQueue[currentIdx];
  currentAirport = q.airport;
  currentQuestionMode = q.mode;
  acHighlight = -1;

  const counterTpl = t('questionOf');
  document.getElementById('q-counter').textContent =
    counterTpl.replace('{n}', currentIdx + 1).replace('{total}', quizQueue.length);
  document.getElementById('q-mode-badge').textContent =
    q.mode === 'code' ? t('modeBadge_code') : t('modeBadge_sat');
  document.getElementById('q-diff-badge').textContent =
    t('diffBadge_' + selectedDifficulty) ?? 'Easy';
  document.getElementById('progress-fill').style.width = (currentIdx / quizQueue.length * 100) + '%';

  const inp = document.getElementById('answer-input');
  inp.value = '';
  inp.className = 'answer-input';
  inp.disabled = false;
  inp.placeholder = t('placeholder_' + selectedDifficulty);
  inp.focus();

  document.getElementById('autocomplete-list').innerHTML = '';
  document.getElementById('feedback-panel').className = 'feedback-panel';
  document.getElementById('feedback-panel').innerHTML = '';
  document.getElementById('btn-check').disabled = false;
  document.getElementById('btn-check').textContent = t('btnCheck');
  document.getElementById('btn-skip').textContent = t('btnSkip');

  const card = document.getElementById('question-card');
  if (q.mode === 'code') {
    card.innerHTML = `
      <div class="code-display">
        <div class="iata-code">${esc(currentAirport[0])}</div>
        <div class="hint">${esc(t('codeHint'))}</div>
      </div>`;
  } else {
    const [, , , , lat, lon] = currentAirport;
    const zoom = getSatelliteZoom(currentAirport);
    const imgUrl = `https://api.mapbox.com/styles/v1/mapbox/satellite-v9/static/${lon},${lat},${zoom},0/${CONFIG.SATELLITE_SIZE}?access_token=${encodeURIComponent(CONFIG.MAPBOX_TOKEN)}`;
    card.innerHTML = `
      <div class="satellite-display">
        <div class="sat-loading" id="sat-loading">
          <div class="spinner"></div>
          <span>${esc(t('satLoading'))}</span>
        </div>
        <img
          src="${esc(imgUrl)}"
          alt="Satellite view"
          onload="document.getElementById('sat-loading').style.display='none'"
          onerror="document.getElementById('sat-loading').innerHTML='<span>${esc(t('satError'))}</span>'"
        />
        <div class="sat-overlay">🛰️ SATELLITE VIEW</div>
      </div>`;
  }
}

function normalize(str) {
  return str.toLowerCase()
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9 ]/g, '')
    .trim();
}

function levenshtein(a, b) {
  const m = a.length, n = b.length;
  const dp = Array.from({ length: m + 1 }, (_, i) => [i]);
  for (let j = 1; j <= n; j++) dp[0][j] = j;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = a[i - 1] === b[j - 1]
        ? dp[i - 1][j - 1]
        : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
    }
  }
  return dp[m][n];
}

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

  if (selectedDifficulty === 'expert') return fuzzyMatch(n, name);
  if (selectedDifficulty === 'hard') return fuzzyMatch(n, city);
  if (n === code && currentQuestionMode !== 'code') return true;
  if (n === name) return true;
  if (n === city) return true;
  if (name.includes(n) && n.length >= 4) return true;
  if (city.includes(n) && n.length >= 4) return true;
  if (n.includes(city) && city.length >= 4) return true;
  return false;
}

function _resolveQuestion(ok, given) {
  answered = true;
  const inp = document.getElementById('answer-input');
  inp.disabled = true;
  document.getElementById('autocomplete-list').innerHTML = '';
  document.getElementById('btn-skip').textContent = t('btnNextQ');
  document.getElementById('btn-check').textContent = t('btnNext');

  const feedback = document.getElementById('feedback-panel');
  const info = `<div class="airport-info">${esc(currentAirport[0])} · ${esc(currentAirport[2])}, ${esc(currentAirport[3])}</div>`;

  if (ok) {
    inp.classList.add('correct');
    correctCount++;
    feedback.className = 'feedback-panel correct';
    feedback.innerHTML = `${esc(t('feedbackCorrect'))}<strong>${esc(currentAirport[1])}</strong>${info}`;
  } else {
    inp.classList.add('wrong');
    wrongCount++;
    feedback.className = 'feedback-panel wrong';
    if (given === '—') {
      feedback.innerHTML = `${esc(t('feedbackSkipped'))}<strong>${esc(currentAirport[1])}</strong>${info}`;
    } else {
      feedback.innerHTML = `${esc(t('feedbackWrong'))}<strong>${esc(currentAirport[1])}</strong>${info}`;
    }
  }

  history.push({ airport: currentAirport, correct: ok, given, mode: currentQuestionMode });
  updateHeader();
}

function checkAnswer() {
  if (answered) { nextQuestion(); return; }
  const val = document.getElementById('answer-input').value.trim();
  if (!val) return;
  _resolveQuestion(isCorrect(val, currentAirport), val);
}

function skipQuestion() {
  if (answered) { nextQuestion(); return; }
  _resolveQuestion(false, '—');
}

function nextQuestion() {
  currentIdx++;
  if (currentIdx >= quizQueue.length) showResults();
  else loadQuestion();
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
  if (selectedDifficulty === 'hard' || selectedDifficulty === 'expert') {
    document.getElementById('autocomplete-list').innerHTML = '';
    return;
  }
  const val = document.getElementById('answer-input').value.trim().toLowerCase();
  const list = document.getElementById('autocomplete-list');
  acHighlight = -1;

  if (val.length < 2) { list.innerHTML = ''; return; }

  const matches = selectedPool.filter(ap => {
    const name = ap[1].toLowerCase();
    const city = ap[2].toLowerCase();
    if (currentQuestionMode === 'code') return name.includes(val) || city.includes(val);
    return ap[0].toLowerCase().startsWith(val) || name.includes(val) || city.includes(val);
  }).slice(0, 8);

  list.innerHTML = matches.map(ap => `
    <div class="ac-item" data-name="${esc(ap[1])}" onclick="selectAC(this.dataset.name)">
      <span class="ac-name">${esc(ap[1])}</span>
      <span class="ac-country">${esc(ap[2])}, ${esc(ap[3])}</span>
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
  let labelKey = 'resultLabel_0';
  if (pct >= 90) { emoji = '🏆'; labelKey = 'resultLabel_90'; }
  else if (pct >= 70) { emoji = '✈️';  labelKey = 'resultLabel_70'; }
  else if (pct >= 50) { emoji = '🗺️'; labelKey = 'resultLabel_50'; }
  else if (pct >= 30) { emoji = '📍'; labelKey = 'resultLabel_30'; }

  document.getElementById('result-emoji').textContent = emoji;
  document.getElementById('result-score').textContent = `${correctCount} / ${total}`;
  document.getElementById('result-label').textContent = t(labelKey);
  document.getElementById('stat-correct').textContent = correctCount;
  document.getElementById('stat-wrong').textContent = wrongCount;
  document.getElementById('stat-pct').textContent = pct + '%';
  document.getElementById('result-category').textContent = getCatLabel();
  document.getElementById('progress-fill').style.width = '100%';

  document.getElementById('history-list').innerHTML = history.map(h => `
    <div class="history-item ${h.correct ? 'correct-h' : 'wrong-h'}">
      <span class="hi-status">${h.correct ? '✅' : '❌'}</span>
      <span class="hi-code">${esc(h.airport[0])}</span>
      <span class="hi-name">${esc(h.airport[1])}</span>
      <span class="hi-given">${esc(h.given)}</span>
    </div>`).join('');

  showScreen('screen-result');
}

function cancelRound() {
  if (!window.confirm(t('cancelConfirm'))) return;
  correctCount = 0;
  wrongCount = 0;
  history = [];
  quizQueue = [];
  currentIdx = 0;
  currentAirport = null;
  answered = false;
  updateHeader();
  showScreen('screen-start');
}

// ─── INIT ─────────────────────────────────────────────────────────────────────
document.addEventListener('click', e => {
  if (!e.target.closest('.answer-input-wrap')) {
    document.getElementById('autocomplete-list').innerHTML = '';
  }
});

renderCatGroups();
updateCategoryIndicator();
