import { useTranslation } from 'react-i18next';
import { SUPPORTED_LANGUAGES } from '../i18n/index.js';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <div role="group" aria-label={i18n.t('header.languageLabel')}
      className="flex items-center gap-1 rounded-full border border-violet-100 bg-white/70 p-1 shadow-sm dark:border-white/10 dark:bg-white/10">
      {SUPPORTED_LANGUAGES.map((code) => {
        const isActive = i18n.resolvedLanguage === code;
        return (
          <button key={code} type="button" lang={code}
            onClick={() => i18n.changeLanguage(code)}
            aria-pressed={isActive}
            title={i18n.t(`languages.${code}`)}
            className={`cursor-pointer rounded-full px-2.5 py-1 text-xs font-bold uppercase tracking-widest transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mauve ${isActive ? 'bg-mauve text-white' : 'text-slate-500 hover:bg-violet-50 hover:text-mauve dark:text-violet-200/70 dark:hover:bg-white/10 dark:hover:text-violet-100'}`}>
            {code}
          </button>
        );
      })}
    </div>
  );
}
