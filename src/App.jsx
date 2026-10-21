import { useTranslation } from 'react-i18next';
import Background from './components/Background.jsx';
import ImageSlider from './components/ImageSlider.jsx';
import LanguageSwitcher from './components/LanguageSwitcher.jsx';
import ThemeToggle from './components/ThemeToggle.jsx';

export default function App() {
  const { t } = useTranslation();

  return (
    <div className="relative isolate min-h-screen overflow-hidden text-ink transition-colors dark:text-violet-50">
      <Background />
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10">
        <header className="flex items-center justify-between gap-4 border-b border-violet-100 py-8 dark:border-white/10">
          <strong className="text-mauve tracking-[.24em] dark:text-violet-300">{t('header.brand')}</strong>
          <nav aria-label={t('header.navLabel')} className="ml-auto text-xs font-semibold tracking-widest text-slate-500 dark:text-violet-300/70">
            {t('header.nav')}
          </nav>
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </header>
        <main className="grid gap-16 py-20 lg:grid-cols-2 lg:items-center lg:gap-20">
          <section aria-label={t('hero.sectionLabel')} className="space-y-7">
            <p className="text-xs font-bold tracking-[.2em] text-violet-600 dark:text-violet-400">
              {t('hero.eyebrow')}
            </p>
            <h1 className="max-w-xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
              {t('hero.title')}
            </h1>
            <p className="max-w-lg text-lg leading-relaxed text-slate-500 dark:text-violet-100/60">
              {t('hero.subtitle')}
            </p>
          </section>
          <ImageSlider />
        </main>
        <footer className="py-10 text-xs font-semibold tracking-widest text-slate-400 dark:text-violet-300/40">
          {t('footer.stack')}
        </footer>
      </div>
    </div>
  );
}
