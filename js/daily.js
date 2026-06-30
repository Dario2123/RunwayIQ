// RunwayIQ — Daily Challenge (localStorage, seeded PRNG, no server)

const RIQ_DAILY_KEY  = 'riq_daily';
const DAILY_QUESTIONS = 10;

// ── Seeded PRNG (mulberry32) ──────────────────────────────────────────────────
function _mulberry32(seed) {
  return function () {
    seed |= 0; seed = seed + 0x6D2B79F5 | 0;
    let t = Math.imul(seed ^ seed >>> 15, 1 | seed);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}

function _strHash(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = Math.imul(31, h) + str.charCodeAt(i) | 0;
  }
  return h >>> 0;
}

function _seededShuffle(arr, rng) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ── Date utilities ────────────────────────────────────────────────────────────
function dailyDateStr() {
  const n = new Date();
  const y = n.getUTCFullYear();
  const m = String(n.getUTCMonth() + 1).padStart(2, '0');
  const d = String(n.getUTCDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function dailyDateLabel(dateStr, lang) {
  const [y, mo, d] = dateStr.split('-').map(Number);
  const date = new Date(Date.UTC(y, mo - 1, d));
  const locale = lang === 'de' ? 'de-DE' : 'en-US';
  return date.toLocaleDateString(locale, { year: 'numeric', month: 'long', day: 'numeric' });
}

function _prevDateStr(dateStr) {
  const [y, mo, d] = dateStr.split('-').map(Number);
  const prev = new Date(Date.UTC(y, mo - 1, d - 1));
  const py = prev.getUTCFullYear();
  const pm = String(prev.getUTCMonth() + 1).padStart(2, '0');
  const pd = String(prev.getUTCDate()).padStart(2, '0');
  return `${py}-${pm}-${pd}`;
}

// ── Challenge generation ──────────────────────────────────────────────────────
// Deterministic: same dateStr → same 10 airports, same order, for all users
function getDailyQueue(dateStr) {
  const seed = _strHash('riq-daily-v1-' + dateStr);
  const rng  = _mulberry32(seed);
  const pool = _seededShuffle([...AIRPORTS], rng).slice(0, DAILY_QUESTIONS);
  return pool.map((ap, i) => ({ airport: ap, mode: i % 2 === 0 ? 'code' : 'satellite' }));
}

// ── Storage ───────────────────────────────────────────────────────────────────
function _dailyDefault() {
  return {
    version: 1,
    today: null, completed: false, bestScore: 0, bestPct: 0, attempts: 0,
    currentStreak: 0, longestStreak: 0, lastCompletedDate: null,
    totalCompleted: 0, totalCorrect: 0, totalAnswered: 0,
  };
}

function dailyLoad() {
  try {
    const raw = localStorage.getItem(RIQ_DAILY_KEY);
    return raw ? { ..._dailyDefault(), ...JSON.parse(raw) } : _dailyDefault();
  } catch { return _dailyDefault(); }
}

function dailySave(data) {
  try { localStorage.setItem(RIQ_DAILY_KEY, JSON.stringify(data)); } catch {}
}

// Returns current state, adjusted for new day (without persisting)
function dailyGetState() {
  const data = dailyLoad();
  const today = dailyDateStr();
  if (data.today !== today) {
    return { ...data, today, completed: false, bestScore: 0, bestPct: 0, attempts: 0 };
  }
  return data;
}

// Record a completed daily attempt. Returns { isNewDayRecord, prevBestPct }
function dailyRecord(correct, total, pct) {
  const data  = dailyLoad();
  const today = dailyDateStr();

  // Handle browser kept open overnight
  if (data.today !== today) {
    data.today = today; data.completed = false;
    data.bestScore = 0; data.bestPct = 0; data.attempts = 0;
  }

  const wasCompleted  = data.completed;
  const prevBestPct   = wasCompleted ? data.bestPct : null;
  const isNewDayRecord = !wasCompleted || pct > data.bestPct;

  data.attempts  = (data.attempts  || 0) + 1;
  data.totalAnswered = (data.totalAnswered || 0) + total;
  data.totalCorrect  = (data.totalCorrect  || 0) + correct;

  if (isNewDayRecord) { data.bestScore = correct; data.bestPct = pct; }

  // Streak only on first completion of the day
  if (!wasCompleted) {
    data.totalCompleted = (data.totalCompleted || 0) + 1;
    const yesterday = _prevDateStr(today);
    if (data.lastCompletedDate === yesterday) {
      data.currentStreak = (data.currentStreak || 0) + 1;
    } else if (data.lastCompletedDate !== today) {
      data.currentStreak = 1;
    }
    data.longestStreak    = Math.max(data.longestStreak || 0, data.currentStreak);
    data.lastCompletedDate = today;
    data.completed         = true;
  }

  dailySave(data);
  return { isNewDayRecord, prevBestPct };
}

// ── Share logic ───────────────────────────────────────────────────────────────
let _dailyShareTextStr = '';

function _buildShareStr(dateStr, correct, total, pct, streak) {
  const lang = localStorage.getItem('riq_lang') || 'en';
  const date = dailyDateLabel(dateStr, lang);
  const streakPart = streak > 0 ? `\n🔥 ${streak} ${t('dailyStreakLabel')}` : '';
  return `⭐ RunwayIQ Daily Challenge\n${date}\n${correct}/${total} (${pct}%)${streakPart}\n\nhttps://runway-iq-xi.vercel.app`;
}

function doShare() {
  const text = _dailyShareTextStr;
  const btn  = document.getElementById('btn-daily-share');

  if (typeof navigator.share === 'function') {
    const shareText = text.replace(/\n\nhttps:\/\/runway-iq-xi\.vercel\.app$/, '');
    navigator.share({
      title: 'RunwayIQ Daily Challenge',
      text:  shareText,
      url:   'https://runway-iq-xi.vercel.app'
    }).catch(() => {});
    return;
  }

  const origText = btn ? btn.textContent : t('copyResult');
  const done = () => {
    if (!btn) return;
    btn.textContent = t('shareCopied');
    setTimeout(() => { if (btn) btn.textContent = origText; }, 2000);
  };

  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(done).catch(() => { _execCommandCopy(text); done(); });
  } else {
    _execCommandCopy(text);
    done();
  }
}

function _execCommandCopy(text) {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.cssText = 'position:fixed;opacity:0;top:0;left:0;pointer-events:none';
  document.body.appendChild(ta);
  ta.select();
  try { document.execCommand('copy'); } catch {}
  document.body.removeChild(ta);
}

// ── Result HTML (injected into result-hs-section in daily mode) ───────────────
function buildDailyResultHtml(correct, total, pct, isNewDayRecord, prevBestPct, dayData) {
  const dateStr = dailyDateStr();

  _dailyShareTextStr = _buildShareStr(dateStr, correct, total, pct, dayData.currentStreak);

  let h = `<div class="result-daily-header">${esc(t('dailyResultTitle'))}</div>`;

  if (isNewDayRecord) {
    h += `<div class="result-new-record">${esc(t('dailyNewRecord'))}</div>`;
  } else if (prevBestPct !== null) {
    h += `<div class="result-prev-best">${esc(t('dailyPrevBest'))}: <strong>${prevBestPct}%</strong></div>`;
  }

  const canNativeShare = typeof navigator.share === 'function';
  const shareBtnLabel  = canNativeShare ? t('shareResult') : t('copyResult');

  h += `<div class="daily-share-card">
    <div class="daily-share-stats">
      <div class="daily-share-stat">
        <span class="daily-share-val">${correct}/${total}</span>
        <span class="daily-share-lbl">${esc(t('statCorrect'))}</span>
      </div>
      <div class="daily-share-stat">
        <span class="daily-share-val">${pct}%</span>
        <span class="daily-share-lbl">${esc(t('statPct'))}</span>
      </div>`;

  if (dayData.currentStreak > 0) {
    h += `<div class="daily-share-stat">
        <span class="daily-share-val">${dayData.currentStreak}</span>
        <span class="daily-share-lbl">${esc(t('dailyStreakLabel'))}</span>
      </div>`;
  }

  h += `</div>
    <button class="btn-share-result" id="btn-daily-share" onclick="doShare()">${esc(shareBtnLabel)}</button>
  </div>`;

  h += `<div class="result-mini-stats"><div>${esc(t('dailyTotalCompleted'))}: <span>${dayData.totalCompleted}</span></div></div>`;

  return h;
}

// ── Start daily challenge ─────────────────────────────────────────────────────
function startDailyChallenge() {
  // Guard: once completed today, cannot replay
  const state = dailyGetState();
  if (state.completed) return;

  isDailyMode           = true;
  selectedMode          = 'mixed';
  selectedDifficulty    = 'easy';
  selectedPool          = [...AIRPORTS];
  selectedCategoryIcon  = '⭐';
  selectedCategoryKey   = 'dailyChallengeLabel';

  correctCount = 0; wrongCount = 0; history = [];
  currentStreak = 0; maxStreak = 0;
  updateHeader();

  const dateStr = dailyDateStr();
  const lang    = localStorage.getItem('riq_lang') || 'en';
  quizQueue  = getDailyQueue(dateStr);
  currentIdx = 0;

  document.getElementById('quiz-category-tag').textContent =
    `⭐ ${t('dailyChallengeLabel')} · ${dailyDateLabel(dateStr, lang)}`;

  showScreen('screen-quiz');
  loadQuestion();
}

// ── Render landing Daily Card ─────────────────────────────────────────────────
function renderDailyCard() {
  const data = dailyGetState();
  const lang = localStorage.getItem('riq_lang') || 'en';
  const today = dailyDateStr();

  document.getElementById('lp-daily-date').textContent = dailyDateLabel(today, lang);

  const statusEl = document.getElementById('lp-daily-status');
  const btn      = document.getElementById('lp-daily-btn');

  if (data.completed) {
    statusEl.className   = 'lp-daily-status done';
    statusEl.textContent = `${t('dailyTodayScore')}: ${data.bestScore}/10`;
    btn.className        = 'btn-daily completed';
    btn.textContent      = t('dailyCompletedToday');
    btn.disabled         = true;
  } else {
    statusEl.className   = 'lp-daily-status';
    statusEl.textContent = '';
    btn.className        = 'btn-daily';
    btn.textContent      = t('dailyPlayBtn');
    btn.disabled         = false;
  }
}

// Init: render card on page load
renderDailyCard();
