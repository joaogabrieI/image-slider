// Cada idioma tem seu próprio nome de idioma, então os rótulos do seletor
// permanecem legíveis em qualquer combinação. A detecção também é usada pelo
// script precoce em public/theme.js para renderizar o título correto.
const LANGUAGE_LABELS = { pt: 'Português', es: 'Español', en: 'English' };

export function detectLanguage() {
  try {
    const saved = localStorage.getItem('wild-stories:language');
    if (LANGUAGE_LABELS[saved]) return saved;
  } catch {
    /* armazenamento indisponível */
  }

  const browser = typeof navigator !== 'undefined' ? navigator.language?.toLowerCase().slice(0, 2) : null;
  return LANGUAGE_LABELS[browser] ? browser : 'pt';
}
