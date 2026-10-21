import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function SliderControls({ index, count, onPrevious, onNext, onSelect }) {
  const { t } = useTranslation();

  return (
    <div className="mt-8 flex flex-wrap items-center gap-3" role="group" aria-label={t('slider.controlsLabel')}>
      <button type="button" onClick={onPrevious} aria-label={t('slider.previous')}
        className="grid size-13 cursor-pointer place-items-center rounded-2xl border border-violet-100 bg-white text-mauve shadow-sm transition hover:-translate-y-0.5 hover:bg-violet-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mauve dark:border-white/15 dark:bg-white/10 dark:text-violet-200 dark:hover:bg-white/20">
        <ArrowLeft size={20} />
      </button>
      <button type="button" onClick={onNext} aria-label={t('slider.next')}
        className="grid size-13 cursor-pointer place-items-center rounded-2xl bg-mauve text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-violet-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mauve">
        <ArrowRight size={20} />
      </button>
      <div className="flex gap-2" role="group" aria-label={t('slider.selectLabel')}>
        {Array.from({ length: count }, (_, i) => (
          <button key={i} type="button" onClick={() => onSelect(i)}
            aria-label={t('slider.goTo', { number: i + 1 })}
            aria-current={i === index ? 'true' : undefined}
            className={`h-2.5 cursor-pointer rounded-full transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mauve dark:bg-white/25 dark:hover:bg-white/40 ${i === index ? 'w-7 bg-mauve dark:bg-violet-400' : 'w-2.5 bg-violet-200 hover:bg-violet-400'}`}
          />
        ))}
      </div>
      <span aria-live="polite" className="ml-auto text-sm font-bold tabular-nums text-mauve dark:text-violet-200">
        {String(index + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
      </span>
    </div>
  );
}
