// RunwayIQ — Stats & Highscore (localStorage only, no server)

const RIQ_STATS_KEY = 'riq_stats';
const RIQ_ROUNDS_LIMIT = 50;

function _statsDefault() {
  return { version: 1, totalPlayed: 0, totalAnswered: 0, totalCorrect: 0, longestStreak: 0, bestPct: -1, rounds: [] };
}

function statsLoad() {
  try {
    const raw = localStorage.getItem(RIQ_STATS_KEY);
    return raw ? JSON.parse(raw) : _statsDefault();
  } catch { return _statsDefault(); }
}

function statsSave(data) {
  try { localStorage.setItem(RIQ_STATS_KEY, JSON.stringify(data)); } catch {}
}

// Record a completed round. Returns { isNewRecord, prevBest }
function statsRecord(round) {
  const data = statsLoad();
  const isFirstRound = data.rounds.length === 0;
  const prevBest = isFirstRound ? null : data.bestPct;
  const isNewRecord = !isFirstRound && round.pct > data.bestPct;

  data.totalPlayed   += 1;
  data.totalAnswered += round.total;
  data.totalCorrect  += round.correct;
  data.longestStreak  = Math.max(data.longestStreak, round.streak);
  if (round.pct > data.bestPct) data.bestPct = round.pct;

  data.rounds.unshift(round);
  if (data.rounds.length > RIQ_ROUNDS_LIMIT) data.rounds.length = RIQ_ROUNDS_LIMIT;

  statsSave(data);
  return { isNewRecord, prevBest };
}

function statsAllTimeRate(data) {
  if (!data.totalAnswered) return 0;
  return Math.round((data.totalCorrect / data.totalAnswered) * 100);
}

function renderStatsScreen() {
  const data = statsLoad();
  const rate = statsAllTimeRate(data);
  const lang = localStorage.getItem('riq_lang') || 'en';

  document.getElementById('stats-overview-grid').innerHTML = [
    { val: data.bestPct >= 0 ? data.bestPct + '%' : '—', lbl: 'statsBestScore' },
    { val: data.totalPlayed,    lbl: 'statsTotalRounds' },
    { val: rate + '%',          lbl: 'statsHitRate' },
    { val: data.longestStreak,  lbl: 'statsLongestStreak' },
  ].map(s => `
    <div class="stat-box">
      <div class="val">${esc(String(s.val))}</div>
      <div class="lbl">${esc(t(s.lbl))}</div>
    </div>`).join('');

  // Daily challenge stats block
  const dailyData = dailyLoad();
  const dailyAvg  = dailyData.totalAnswered > 0
    ? Math.round((dailyData.totalCorrect / dailyData.totalAnswered) * 100) : 0;
  document.getElementById('stats-daily-grid').innerHTML = [
    { val: dailyData.totalCompleted,  lbl: 'dailyTotalCompleted' },
    { val: dailyData.currentStreak, lbl: 'dailyCurrentStreak' },
    { val: dailyData.longestStreak,  lbl: 'dailyLongestStreak' },
    { val: dailyAvg + '%',           lbl: 'dailyAvgScore' },
  ].map(s => `
    <div class="stat-box">
      <div class="val">${esc(String(s.val))}</div>
      <div class="lbl">${esc(t(s.lbl))}</div>
    </div>`).join('');

  const recentEl = document.getElementById('stats-recent-list');
  if (!data.rounds.length) {
    recentEl.innerHTML = `<div class="stats-empty">${esc(t('statsNoData'))}</div>`;
    return;
  }

  const locale = lang === 'de' ? 'de-DE' : 'en-US';
  recentEl.innerHTML = data.rounds.slice(0, 5).map(r => {
    const dateStr = new Date(r.ts).toLocaleDateString(locale, { month: 'short', day: 'numeric' });
    const modeBadgeClass = r.mode === 'code' ? 'srr-mode-code' : r.mode === 'satellite' ? 'srr-mode-satellite' : 'srr-mode-mixed';
    const modeBadgeLabel = r.mode === 'code' ? t('modeBadge_code') : r.mode === 'satellite' ? t('modeBadge_sat') : t('modeMixed_title');
    const pctClass = r.pct >= 80 ? 'srr-gold' : r.pct >= 55 ? 'srr-green' : 'srr-red';
    return `
      <div class="stats-round-row">
        <span class="srr-pct ${pctClass}">${r.pct}%</span>
        <span class="srr-mode-badge ${modeBadgeClass}">${esc(modeBadgeLabel)}</span>
        <span class="srr-cat">${esc(r.categoryIcon)} ${esc(t(r.categoryKey))}</span>
        <span class="srr-detail">${r.correct}/${r.total} · ${esc(t('diffBadge_' + r.difficulty))}</span>
        <span class="srr-date">${dateStr}</span>
      </div>`;
  }).join('');
}

function showStats() {
  renderStatsScreen();
  showScreen('screen-stats');
}
