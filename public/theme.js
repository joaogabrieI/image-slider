// Carregado antes do bundle para evitar o "flash" de tema errado (FOUC).
(function () {
  var THEME_KEY = 'wild-stories:theme';
  var LANGUAGE_KEY = 'wild-stories:language';
  var LANGUAGE_TITLES = {
    pt: 'Natureza em cada detalhe — WILD / STORIES',
    es: 'Naturaleza en cada detalle — WILD / STORIES',
    en: 'Nature in every detail — WILD / STORIES',
  };

  try {
    var saved = localStorage.getItem(THEME_KEY);
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var isDark = saved === 'dark' || (saved !== 'light' && prefersDark);
    document.documentElement.classList.toggle('dark', isDark);
  } catch {
    /* armazenamento indisponível: usa o tema do sistema */
  }

  // Renderiza o título correto (idioma salvo) antes do React montar, para que
  // não haja uma troca visível logo em seguida.
  try {
    var lang = localStorage.getItem(LANGUAGE_KEY);
    if (!LANGUAGE_TITLES[lang]) {
      var browser = (navigator.language || 'pt').toLowerCase().slice(0, 2);
      lang = LANGUAGE_TITLES[browser] ? browser : 'pt';
    }
    document.title = LANGUAGE_TITLES[lang];
  } catch {
    /* armazenamento indisponível: usa o tema do sistema */
  }
})();
