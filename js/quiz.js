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
let detailVisible = false;
let lastAnswerOk = false;
let correctCount = 0;
let wrongCount = 0;
let history = [];
let acHighlight = -1;
let currentStreak = 0;
let maxStreak = 0;
let isDailyMode = false;
let _toastTimer = null;
let _toastFadeTimer = null;

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

function showModeScreen() {
  showScreen('screen-mode');
  selectMode(selectedMode);
}

function selectModeAndContinue(mode) {
  selectMode(mode);
  updateModeIndicator();
  showScreen('screen-start');
}

function updateModeIndicator() {
  const el = document.getElementById('mode-indicator-value');
  if (!el) return;
  const labels = {
    code:      t('modeCode_title'),
    satellite: t('modeSatellite_title'),
    mixed:     t('modeMixed_title'),
  };
  el.textContent = labels[selectedMode] || selectedMode;
}

function showStartScreen() {
  updateModeIndicator();
  showScreen('screen-start');
}

function selectMode(mode) {
  selectedMode = mode;
  document.querySelectorAll('.challenge-card').forEach(c => {
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
    const descKey = g.labelKey.replace('.label', '.desc');
    const desc = t(descKey);
    return `<div class="cat-group-card" data-gid="${esc(g.id)}">
      <span class="cat-card-icon">${g.icon}</span>
      <div class="cat-card-label">${esc(t(g.labelKey))}</div>
      ${desc !== descKey ? `<div class="cat-card-desc">${esc(desc)}</div>` : ''}
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
  updateModeIndicator();
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
  isDailyMode = false;
  correctCount = 0;
  wrongCount = 0;
  history = [];
  currentStreak = 0;
  maxStreak = 0;
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
  _hideToast();
  answered = false;
  detailVisible = false;
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
  document.getElementById('airport-detail-panel').hidden = true;
  document.getElementById('btn-reveal').hidden   = false;
  document.getElementById('btn-reveal').disabled = false;
  document.getElementById('btn-check').disabled  = false;
  document.getElementById('btn-check').textContent = t('btnCheck');
  document.getElementById('btn-check').onclick = checkAnswer;
  document.getElementById('btn-skip').hidden   = false;
  document.getElementById('btn-skip').disabled = false;
  document.getElementById('btn-skip').textContent = t('btnSkip');
  document.getElementById('question-card').style.display = '';
  document.getElementById('answer-input-wrap').style.display = '';

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
        <img class="sat-img" src="${esc(imgUrl)}" alt="Satellite view" />
        <div class="sat-overlay">SAT VIEW</div>
      </div>`;
    const satImg = card.querySelector('.sat-img');
    satImg.addEventListener('load', () => {
      const el = document.getElementById('sat-loading');
      if (el) el.style.display = 'none';
    });
    satImg.addEventListener('error', () => {
      const el = document.getElementById('sat-loading');
      if (el) el.textContent = t('satError');
    });
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

// ─── AIRPORT DETAIL CARD ──────────────────────────────────────────────────────
const _CONTINENT_KEYS = {
  europe:        'cat.continent.items.europe.label',
  north_america: 'cat.continent.items.north_america.label',
  south_america: 'cat.continent.items.south_america.label',
  africa:        'cat.continent.items.africa.label',
  asia:          'cat.continent.items.asia.label',
  oceania:       'cat.continent.items.oceania.label',
};

function _fmtPax(n) {
  return n >= 1e6 ? (n / 1e6).toFixed(1).replace(/\.0$/, '') + 'M' : Math.round(n / 1e3) + 'k';
}
function _fmtMov(n) {
  return n >= 1e6 ? (n / 1e6).toFixed(1).replace(/\.0$/, '') + 'M' : Math.round(n / 1e3) + 'k';
}
function _fmtCargo(n) {
  return n >= 1e6 ? (n / 1e6).toFixed(1).replace(/\.0$/, '') + 'M t' : Math.round(n / 1e3) + 'k t';
}
function _fmtLen(m) {
  return Number(m).toLocaleString('en') + ' m';
}

function showAirportDetail(airport, ok) {
  const panel = document.getElementById('airport-detail-panel');
  if (!panel) return;

  const [iata, name, city, country, lat, lon] = airport;
  const isLast = (currentIdx + 1) >= quizQueue.length;
  const detail = (typeof AIRPORT_DETAILS !== 'undefined') ? AIRPORT_DETAILS[iata] : null;

  // ── Satellite visual ─────────────────────────────────────────────────────────
  const hasMapbox = typeof CONFIG !== 'undefined' && CONFIG.MAPBOX_TOKEN;
  let visualHtml;
  if (hasMapbox) {
    const zoom = getDetailZoom(airport);
    const imgUrl = `https://api.mapbox.com/styles/v1/mapbox/satellite-v9/static/${lon},${lat},${zoom},0/${CONFIG.SATELLITE_SIZE}?access_token=${encodeURIComponent(CONFIG.MAPBOX_TOKEN)}`;
    visualHtml = `
      <div class="ap-detail-visual">
        <div class="ap-detail-loading" id="ap-det-loading"><div class="spinner"></div></div>
        <img class="ap-detail-img" src="${esc(imgUrl)}" alt="${esc(name)}" />
        <div class="ap-detail-sat-tag">SAT VIEW</div>
      </div>`;
  } else {
    visualHtml = `
      <div class="ap-detail-visual">
        <div class="ap-detail-fallback">
          <div class="ap-detail-fallback-iata">${esc(iata)}</div>
        </div>
      </div>`;
  }

  // ── Meta line: IATA · ICAO · City · Country ──────────────────────────────────
  const metaParts = [iata];
  if (detail && detail.icao) metaParts.push(detail.icao);
  metaParts.push(city, country);
  const metaLine = metaParts.map(p => esc(p)).join(' · ');

  // ── Overview pills: Opened · Operator ────────────────────────────────────────
  let overviewHtml = '';
  if (detail) {
    const pills = [];
    if (detail.opened) pills.push(esc(t('detailStat_opened')) + ' ' + detail.opened);
    if (detail.operator) pills.push(esc(detail.operator));
    if (pills.length) {
      overviewHtml = '<div class="ap-overview-pills">' +
        pills.map(p => '<span class="ap-overview-pill">' + p + '</span>').join('') +
        '</div>';
    }
  }

  // ── Chips: continent, size, special tags ─────────────────────────────────────
  const chips = [];
  const continentId = typeof CONTINENT_MAP !== 'undefined' ? CONTINENT_MAP[country] : null;
  const continentLabel = continentId && _CONTINENT_KEYS[continentId] ? t(_CONTINENT_KEYS[continentId]) : '';
  if (continentLabel) chips.push(`<span class="ap-chip">${esc(continentLabel)}</span>`);

  let sizeKey = 'detailSize_medium';
  if (typeof AIRPORT_SIZE !== 'undefined') {
    if (AIRPORT_SIZE.large.has(iata)) sizeKey = 'detailSize_large';
    else if (AIRPORT_SIZE.small.has(iata)) sizeKey = 'detailSize_small';
  }
  chips.push(`<span class="ap-chip ap-chip--size">${esc(t(sizeKey))}</span>`);

  if (typeof CAPITAL_AIRPORTS !== 'undefined' && CAPITAL_AIRPORTS.has(iata))
    chips.push(`<span class="ap-chip ap-chip--tag">${esc(t('detailTagCapital'))}</span>`);
  if (typeof ISLAND_AIRPORTS !== 'undefined' && ISLAND_AIRPORTS.has(iata))
    chips.push(`<span class="ap-chip ap-chip--tag">${esc(t('detailTagIsland'))}</span>`);
  if (typeof HIGH_ALTITUDE_AIRPORTS !== 'undefined' && HIGH_ALTITUDE_AIRPORTS.has(iata))
    chips.push(`<span class="ap-chip ap-chip--tag">${esc(t('detailTagHighAlt'))}</span>`);
  if (typeof EXTREME_AIRPORTS !== 'undefined' && EXTREME_AIRPORTS.has(iata))
    chips.push(`<span class="ap-chip ap-chip--tag">${esc(t('detailTagExtreme'))}</span>`);

  // ── Extended sections (only when AIRPORT_DETAILS entry exists) ───────────────
  let sectionsHtml = '';
  if (detail) {
    const ops = [];
    if (detail.pax)                   ops.push({ v: _fmtPax(detail.pax),            l: t('detailStat_pax') });
    if (detail.movements)             ops.push({ v: _fmtMov(detail.movements),       l: t('detailStat_movements') });
    if (detail.cargo)                 ops.push({ v: _fmtCargo(detail.cargo),         l: t('detailStat_cargo') });
    if (detail.runways)               ops.push({ v: String(detail.runways),          l: t('detailStat_runways') });
    if (detail.longestRunway)         ops.push({ v: _fmtLen(detail.longestRunway),   l: t('detailStat_longestRunway') });
    if (detail.elevation !== undefined) ops.push({ v: _fmtLen(detail.elevation),     l: t('detailStat_elevation') });

    const opsHtml = ops.length
      ? '<div class="ap-section"><div class="ap-section-title">' + esc(t('detailSection_ops')) + '</div>' +
        '<div class="ap-stats-grid">' +
        ops.map(o => '<div class="ap-stat"><div class="ap-stat-value">' + esc(o.v) +
          '</div><div class="ap-stat-label">' + esc(o.l) + '</div></div>').join('') +
        '</div></div>'
      : '';

    const airlinesHtml = detail.hubAirlines && detail.hubAirlines.length
      ? '<div class="ap-section"><div class="ap-section-title">' + esc(t('detailSection_airlines')) + '</div>' +
        '<div class="ap-hub-list">' +
        detail.hubAirlines.map(a => '<span class="ap-hub-item">' + esc(a) + '</span>').join('') +
        '</div></div>'
      : '';

    const factsHtml = detail.facts && detail.facts.length
      ? '<div class="ap-section"><div class="ap-section-title">' + esc(t('detailSection_facts')) + '</div>' +
        '<div class="ap-facts-grid">' +
        detail.facts.map(f => '<div class="ap-fact">' + esc(f) + '</div>').join('') +
        '</div></div>'
      : '';

    if (opsHtml || airlinesHtml || factsHtml) {
      sectionsHtml = '<div class="ap-detail-sections">' + opsHtml + airlinesHtml + factsHtml + '</div>';
    }
  }

  panel.innerHTML = `
    <div class="ap-detail-card${ok ? ' ap-detail-card--correct' : ' ap-detail-card--wrong'}">
      ${visualHtml}
      <div class="ap-detail-body">
        <div class="ap-detail-name">${esc(name)}</div>
        <div class="ap-detail-meta">${metaLine}</div>
        ${overviewHtml}
        <div class="ap-detail-chips">${chips.join('')}</div>
        ${sectionsHtml}
      </div>
    </div>`;
  panel.hidden = false;

  if (hasMapbox) {
    const detImg = panel.querySelector('.ap-detail-img');
    if (detImg) {
      detImg.addEventListener('load', () => {
        const loading = document.getElementById('ap-det-loading');
        if (loading) loading.style.display = 'none';
      });
      detImg.addEventListener('error', () => {
        const loading = document.getElementById('ap-det-loading');
        if (loading) loading.textContent = t('satError');
        detImg.style.display = 'none';
      });
    }
  }

  const btnCheck = document.getElementById('btn-check');
  btnCheck.textContent = isLast ? t('btnShowResults') : t('btnNextAirport');
  btnCheck.onclick = nextQuestion;
}

// ─── TOAST ────────────────────────────────────────────────────────────────────
function _clearToastTimers() {
  if (_toastTimer)     { clearTimeout(_toastTimer);     _toastTimer = null; }
  if (_toastFadeTimer) { clearTimeout(_toastFadeTimer); _toastFadeTimer = null; }
}

function _hideToast() {
  _clearToastTimers();
  const el = document.getElementById('quiz-toast');
  if (el) { el.hidden = true; el.className = 'quiz-toast'; }
}

function _showToast(ok, given) {
  _clearToastTimers();
  const el = document.getElementById('quiz-toast');
  if (!el) return;
  const isSkipped = (given === '—');
  let html;
  if (ok) {
    html = `<div class="qt-label qt-correct">${esc(t('feedbackCorrect'))}</div>` +
           `<div class="qt-name">${esc(currentAirport[1])}</div>`;
  } else {
    const lbl = isSkipped ? t('feedbackSkipped') : t('feedbackWrong');
    html = `<div class="qt-label qt-wrong">${esc(lbl)}</div>` +
           `<div class="qt-answer">${esc(t('feedbackCorrectAnswer'))}:</div>` +
           `<div class="qt-name">${esc(currentAirport[1])}</div>`;
  }
  el.innerHTML = html;
  el.className = 'quiz-toast qt-in' + (ok ? ' qt-type-correct' : ' qt-type-wrong');
  el.hidden = false;
  _toastFadeTimer = setTimeout(() => { el.classList.add('qt-out'); }, 1300);
  _toastTimer     = setTimeout(() => {
    el.hidden = true; el.className = 'quiz-toast';
    nextQuestion();
  }, 1800);
}

// ─── ANSWER LOGIC ─────────────────────────────────────────────────────────────
function _recordAnswer(ok, given) {
  answered = true;
  lastAnswerOk = ok;
  if (ok) { correctCount++; currentStreak++; maxStreak = Math.max(maxStreak, currentStreak); }
  else    { wrongCount++; currentStreak = 0; }
  history.push({ airport: currentAirport, correct: ok, given, mode: currentQuestionMode });
  updateHeader();
}

function checkAnswer() {
  if (answered) return;
  const val = document.getElementById('answer-input').value.trim();
  if (!val) return;
  const ok = isCorrect(val, currentAirport);
  const inp = document.getElementById('answer-input');
  inp.classList.add(ok ? 'correct' : 'wrong');
  inp.disabled = true;
  document.getElementById('autocomplete-list').innerHTML = '';
  document.getElementById('btn-check').disabled = true;
  document.getElementById('btn-skip').disabled  = true;
  _recordAnswer(ok, val);
  _showToast(ok, val);
}

function skipQuestion() {
  if (answered) { _hideToast(); nextQuestion(); return; }
  const inp = document.getElementById('answer-input');
  inp.classList.add('wrong');
  inp.disabled = true;
  document.getElementById('autocomplete-list').innerHTML = '';
  document.getElementById('btn-check').disabled = true;
  document.getElementById('btn-skip').disabled  = true;
  _recordAnswer(false, '—');
  _showToast(false, '—');
}

function revealAnswer() {
  if (detailVisible) return;
  _hideToast();
  if (!answered) {
    const val = document.getElementById('answer-input').value.trim();
    const ok  = val ? isCorrect(val, currentAirport) : false;
    const inp = document.getElementById('answer-input');
    inp.classList.add(ok ? 'correct' : 'wrong');
    inp.disabled = true;
    document.getElementById('autocomplete-list').innerHTML = '';
    _recordAnswer(ok, val || '—');
  }
  detailVisible = true;
  document.getElementById('question-card').style.display = 'none';
  document.getElementById('answer-input-wrap').style.display = 'none';
  document.getElementById('btn-skip').hidden   = true;
  document.getElementById('btn-reveal').hidden = true;
  showAirportDetail(currentAirport, lastAnswerOk);
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
    e.preventDefault();
    if (items.length > 0 && acHighlight >= 0 && items[acHighlight]) {
      document.getElementById('answer-input').value = items[acHighlight].dataset.name;
      document.getElementById('autocomplete-list').innerHTML = '';
      acHighlight = -1;
    } else {
      document.getElementById('autocomplete-list').innerHTML = '';
      acHighlight = -1;
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
    <div class="ac-item" data-name="${esc(ap[1])}">
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

// ─── RESULT ICON SVGS ─────────────────────────────────────────────────────────
const _SVG_TROPHY = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" style="color:var(--gold)"><path d="M6 9H4a2 2 0 0 0-2 2v1a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5v-1a2 2 0 0 0-2-2h-2"/><rect x="6" y="2" width="12" height="11" rx="2"/><line x1="12" y1="17" x2="12" y2="21"/><line x1="8" y1="21" x2="16" y2="21"/></svg>`;
const _SVG_CHECK  = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" style="color:var(--accent)"><circle cx="12" cy="12" r="10"/><polyline points="8 12 11 15 16 9"/></svg>`;

// ─── RESULTS ──────────────────────────────────────────────────────────────────
function showResults() {
  const total = quizQueue.length;
  const pct = Math.round((correctCount / total) * 100);

  let labelKey = 'resultLabel_0';
  if (pct >= 90) labelKey = 'resultLabel_90';
  else if (pct >= 70) labelKey = 'resultLabel_70';
  else if (pct >= 50) labelKey = 'resultLabel_50';
  else if (pct >= 30) labelKey = 'resultLabel_30';

  const iconEl = document.getElementById('result-icon');
  iconEl.innerHTML = pct >= 90 ? _SVG_TROPHY : pct >= 70 ? _SVG_CHECK : '';

  const scoreEl = document.getElementById('result-score');
  scoreEl.textContent = `${correctCount} / ${total}`;
  scoreEl.className = 'result-score';
  if (pct >= 90) scoreEl.classList.add('result-score--gold');
  else if (pct >= 70) scoreEl.classList.add('result-score--accent');

  document.getElementById('result-label').textContent = t(labelKey);
  document.getElementById('stat-correct').textContent = correctCount;
  document.getElementById('stat-wrong').textContent = wrongCount;
  document.getElementById('stat-pct').textContent = pct + '%';
  document.getElementById('result-category').textContent = getCatLabel();
  document.getElementById('progress-fill').style.width = '100%';

  document.getElementById('history-list').innerHTML = history.map(h => `
    <div class="history-item ${h.correct ? 'correct-h' : 'wrong-h'}">
      <span class="hi-status ${h.correct ? 'hi-status--correct' : 'hi-status--wrong'}"></span>
      <span class="hi-code">${esc(h.airport[0])}</span>
      <span class="hi-name">${esc(h.airport[1])}</span>
      <span class="hi-given">${esc(h.given)}</span>
    </div>`).join('');

  // Always record in general stats
  const { isNewRecord, prevBest } = statsRecord({
    ts: Date.now(), mode: selectedMode, difficulty: selectedDifficulty,
    categoryKey: selectedCategoryKey, categoryIcon: selectedCategoryIcon,
    total, correct: correctCount, pct, streak: maxStreak, isDaily: isDailyMode
  });

  let hsHtml = '';
  if (isDailyMode) {
    const { isNewDayRecord, prevBestPct } = dailyRecord(correctCount, total, pct);
    const dayData = dailyLoad();
    hsHtml = buildDailyResultHtml(correctCount, total, pct, isNewDayRecord, prevBestPct, dayData);
    isDailyMode = false;
    renderDailyCard();
  } else {
    const hsData = statsLoad();
    const hsRate = statsAllTimeRate(hsData);
    if (isNewRecord) {
      hsHtml += `<div class="result-new-record">${esc(t('resultNewRecord'))}</div>`;
    } else if (prevBest !== null) {
      hsHtml += `<div class="result-prev-best">${esc(t('resultPreviousBest'))}: <strong>${prevBest}%</strong></div>`;
    }
    hsHtml += `<div class="result-mini-stats">
      <div>${esc(t('resultTotalPlayed'))}: <span>${hsData.totalPlayed}</span></div>
      <div>${esc(t('resultAllTimeRate'))}: <span>${hsRate}%</span></div>
    </div>`;
  }
  document.getElementById('result-hs-section').innerHTML = hsHtml;

  showScreen('screen-result');
}

function cancelRound() {
  if (!window.confirm(t('cancelConfirm'))) return;
  _clearToastTimers();
  _hideToast();
  correctCount = 0;
  wrongCount = 0;
  history = [];
  quizQueue = [];
  currentIdx = 0;
  currentAirport = null;
  answered = false;
  isDailyMode = false;
  currentStreak = 0;
  maxStreak = 0;
  updateHeader();
  showScreen('screen-landing');
}

// ─── INIT ─────────────────────────────────────────────────────────────────────
document.addEventListener('click', e => {
  if (!e.target.closest('.answer-input-wrap') && !e.target.closest('#autocomplete-list')) {
    document.getElementById('autocomplete-list').innerHTML = '';
  }
});

// Enter advances to next question only when detail view is open
document.addEventListener('keydown', e => {
  if (e.key !== 'Enter') return;
  if (!detailVisible) return;
  if (!document.getElementById('screen-quiz').classList.contains('active')) return;
  if (e.target && e.target.tagName === 'BUTTON') return;
  e.preventDefault();
  nextQuestion();
});

renderCatGroups();
updateCategoryIndicator();
