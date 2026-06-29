// RunwayIQ — i18n system
// Depends on: languages/en.js, languages/de.js (must be loaded first)

let _lang = localStorage.getItem('riq_lang') || 'en';

function t(key) {
  const dict = _lang === 'de' ? LANG_DE : LANG_EN;
  return dict[key] ?? key;
}

function applyI18n() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  document.documentElement.lang = _lang;
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === _lang);
  });
}

function setLang(lang) {
  _lang = lang;
  localStorage.setItem('riq_lang', lang);
  applyI18n();
  if (typeof renderCatGroups === 'function') renderCatGroups();
  if (typeof updateCategoryIndicator === 'function') updateCategoryIndicator();
  if (typeof setDifficulty === 'function' && typeof selectedDifficulty !== 'undefined') {
    setDifficulty(selectedDifficulty);
  }
}
