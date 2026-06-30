// RunwayIQ — Initialisation: event wiring + Vercel stubs
// Loaded last so all DOM and other scripts are ready.

// ── Vercel Analytics stub (queues calls until script.js loads) ───────────────
window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
window.si = window.si || function () { (window.siq = window.siq || []).push(arguments); };

// ── i18n ──────────────────────────────────────────────────────────────────────
applyI18n();

// ── Language switcher ─────────────────────────────────────────────────────────
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => setLang(btn.dataset.lang));
});

// ── Landing screen ────────────────────────────────────────────────────────────
document.getElementById('btn-hero').addEventListener('click', showModeScreen);
document.getElementById('btn-landing-stats').addEventListener('click', showStats);
document.getElementById('lp-daily-btn').addEventListener('click', startDailyChallenge);

// ── Mode selection screen ─────────────────────────────────────────────────────
document.getElementById('btn-mode-back').addEventListener('click', () => showScreen('screen-landing'));
document.querySelectorAll('.challenge-card').forEach(card => {
  card.addEventListener('click', () => selectModeAndContinue(card.dataset.mode));
});

// ── Category screen ───────────────────────────────────────────────────────────
document.getElementById('btn-cat-groups-back').addEventListener('click', showStartScreen);
document.getElementById('btn-cat-items-back').addEventListener('click', renderCatGroups);

// ── Start screen ──────────────────────────────────────────────────────────────
document.getElementById('btn-start-back').addEventListener('click', showModeScreen);
document.getElementById('btn-mode-change').addEventListener('click', showModeScreen);
document.getElementById('btn-cat-choose').addEventListener('click', showCatScreen);
document.getElementById('dbtn-easy').addEventListener('click', () => setDifficulty('easy'));
document.getElementById('dbtn-hard').addEventListener('click', () => setDifficulty('hard'));
document.getElementById('dbtn-expert').addEventListener('click', () => setDifficulty('expert'));
document.getElementById('rbtn-10').addEventListener('click', () => setRounds(10));
document.getElementById('rbtn-20').addEventListener('click', () => setRounds(20));
document.getElementById('rbtn-50').addEventListener('click', () => setRounds(50));
document.getElementById('btn-start-quiz').addEventListener('click', startQuiz);

// ── Quiz screen ───────────────────────────────────────────────────────────────
document.getElementById('btn-reveal').addEventListener('click', revealAnswer);
document.getElementById('btn-skip').addEventListener('click', skipQuestion);
document.getElementById('btn-cancel').addEventListener('click', cancelRound);

// Autocomplete list — event delegation (items are created dynamically)
document.getElementById('autocomplete-list').addEventListener('click', e => {
  const item = e.target.closest('.ac-item');
  if (item) selectAC(item.dataset.name);
});

// Answer input events
const answerInput = document.getElementById('answer-input');
answerInput.addEventListener('input', onInputChange);
answerInput.addEventListener('keydown', onKeyDown);

// ── Share button (dynamically created by daily.js) ────────────────────────────
document.addEventListener('click', e => {
  if (e.target && e.target.id === 'btn-daily-share') doShare();
});

// ── Result screen ─────────────────────────────────────────────────────────────
document.getElementById('btn-result-play-again').addEventListener('click', startQuiz);
document.getElementById('btn-result-stats').addEventListener('click', showStats);
document.getElementById('btn-result-change-setup').addEventListener('click', showStartScreen);
document.getElementById('btn-result-change-cat').addEventListener('click', showCatScreen);

// ── Stats screen ──────────────────────────────────────────────────────────────
document.getElementById('btn-stats-daily-play').addEventListener('click', startDailyChallenge);
document.getElementById('btn-stats-play-now').addEventListener('click', showModeScreen);
document.getElementById('btn-stats-back').addEventListener('click', () => showScreen('screen-landing'));
