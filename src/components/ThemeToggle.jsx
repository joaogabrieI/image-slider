import { Moon, Sun } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../hooks/useTheme.js';

export default function ThemeToggle() {
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button type="button" onClick={toggleTheme}
      aria-label={t(isDark ? 'theme.switchToLight' : 'theme.switchToDark')}
      aria-pressed={isDark}
      title={t(isDark ? 'theme.light' : 'theme.dark')}
      className="grid size-9 cursor-pointer place-items-center rounded-full border border-violet-100 bg-white/70 text-mauve shadow-sm transition hover:-translate-y-0.5 hover:bg-violet-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mauve dark:border-white/10 dark:bg-white/10 dark:text-violet-200 dark:hover:bg-white/20">
      {isDark ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  );
}
