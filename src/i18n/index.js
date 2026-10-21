import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import pt from './locales/pt.json';
import en from './locales/en.json';
import es from './locales/es.json';
import { detectLanguage } from './preload.js';

export const SUPPORTED_LANGUAGES = ['pt', 'en', 'es'];
export const DEFAULT_LANGUAGE = 'pt';
const STORAGE_KEY = 'wild-stories:language';

i18n.use(initReactI18next).init({
  resources: {
    pt: { translation: pt },
    en: { translation: en },
    es: { translation: es },
  },
  lng: detectLanguage(),
  fallbackLng: DEFAULT_LANGUAGE,
  interpolation: { escapeValue: false }, // o React já escapa o conteúdo.
});

// Mantém <html lang>, o título da aba e o armazenamento sincronizados com o
// idioma ativo.
i18n.on('languageChanged', (lng) => {
  document.documentElement.lang = lng;
  document.title = i18n.t('meta.title');
  document.querySelector('meta[name="description"]')?.setAttribute('content', i18n.t('meta.description'));
  localStorage.setItem(STORAGE_KEY, lng);
});
i18n.on('initialized', () => {
  document.title = i18n.t('meta.title');
});
document.documentElement.lang = i18n.language;

export default i18n;
