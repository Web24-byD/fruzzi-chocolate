import { motion } from "framer-motion";
import { useI18n } from "@/i18n";
import heroImage from "@/assets/hero.jpg";

/**
 * Hero slot.
 *
 * This component owns the exact layout, typography and spacing of the final
 * hero. It will later be replaced by the standalone cinematic component:
 *
 *   <CinematicScrollHero
 *     language={language}
 *     onExploreCollection={...}
 *     onDiscoverAtelier={...}
 *   />
 *
 * The props below match that interface, so the rest of the site does not
 * need to change when the animation is dropped in.
 */
export type HeroProps = {
  onExploreCollection: () => void;
  onDiscoverAtelier: () => void;
};

const ease = [0.16, 1, 0.3, 1] as const;

export function HeroPlaceholder({ onExploreCollection, onDiscoverAtelier }: HeroProps) {
  const { t } = useI18n();

  const rise = (delay: number) => ({
    initial: { opacity: 0, y: 22, filter: "blur(8px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: { duration: 1.3, delay, ease },
  });

  return (
    <section
      id="hero"
      data-hero-slot="cinematic"
      className="relative flex min-h-[90svh] w-full items-end overflow-hidden bg-espresso lg:min-h-svh"
      aria-label={`${t.hero.brand} — ${t.hero.subBrand}`}
    >
      {/* Placeholder visual — replaced by the 240-frame sequence canvas. */}
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src={heroImage}
          alt=""
          width={1920}
          height={1280}
          fetchPriority="high"
          className="h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-espresso/55" />
        <div className="absolute inset-x-0 top-0 h-48 bg-linear-to-b from-espresso to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-linear-to-t from-espresso to-transparent" />
      </div>

      <div className="shell relative z-10 w-full pt-28 pb-12 md:pb-16">
        <motion.p {...rise(0.1)} className="micro text-champagne">
          {t.hero.location}
        </motion.p>

        <motion.h1
          {...rise(0.22)}
          className="mt-8 max-w-[16ch] display-xl text-ivory"
        >
          {t.hero.headline}
        </motion.h1>

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:items-end">
          <motion.div {...rise(0.34)} className="min-w-0">
            <div className="flex items-baseline gap-4">
              <span className="font-display text-2xl leading-none font-light tracking-[0.4em] text-ivory md:text-3xl">
                FRUZZI
              </span>
              <span aria-hidden="true" className="h-px w-10 bg-cream/30" />
              <span className="micro text-ivory/60">{t.hero.subBrand}</span>
            </div>
          </motion.div>

          <motion.p {...rise(0.42)} className="body-lead max-w-prose text-cream/70">
            {t.hero.supporting}
          </motion.p>
        </div>

        <motion.div {...rise(0.54)} className="mt-12 flex flex-wrap items-center gap-4">
          <button type="button" onClick={onExploreCollection} className="btn-solid">
            {t.hero.ctaPrimary}
          </button>
          <button type="button" onClick={onDiscoverAtelier} className="btn-line">
            {t.hero.ctaSecondary}
          </button>
        </motion.div>

        <motion.div
          {...rise(0.7)}
          className="mt-14 flex items-center gap-4 text-ivory/45"
        >
          <span className="micro">{t.hero.scroll}</span>
          <motion.span
            aria-hidden="true"
            className="block h-px w-16 origin-left bg-current"
            animate={{ scaleX: [0.2, 1, 0.2] }}
            transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
