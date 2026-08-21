import type { HeroStrings } from "./heroContentData";
import { HeroCTA } from "./HeroCTA";

type Props = {
  strings: HeroStrings;
  reducedMotion: boolean;
};

export function HeroContent({ strings, reducedMotion }: Props) {
  const enter = reducedMotion ? "" : "hero-enter";

  return (
    <div className="mx-auto flex h-full w-full max-w-[1400px] flex-col justify-end px-6 pb-[9.5rem] sm:px-10 sm:pb-32 md:justify-center md:pb-0 lg:px-16">
      <div className="max-w-[46rem]">
        <p
          className={`${enter} text-[0.6rem] uppercase tracking-[0.42em] text-beige/85 sm:text-[0.68rem]`}
          style={{ animationDelay: "0.05s" }}
        >
          {strings.eyebrow}
        </p>

        <div
          className={`${enter} mt-6 flex flex-wrap items-baseline gap-x-5 gap-y-2`}
          style={{ animationDelay: "0.18s" }}
        >
          <span className="font-display text-[2.1rem] leading-none tracking-[0.28em] text-ivory sm:text-[2.6rem]">
            {strings.brand}
          </span>

          <span className="text-[0.58rem] uppercase tracking-[0.34em] text-beige/70 sm:text-[0.66rem]">
            {strings.subBrand}
          </span>
        </div>

        <h1
          className={`${enter} mt-7 font-display text-[2.35rem] font-light leading-[1.06] tracking-[-0.01em] text-ivory sm:text-[3.4rem] lg:text-[4.6rem]`}
          style={{ animationDelay: "0.32s" }}
        >
          {strings.title}
        </h1>

        <p
          className={`${enter} mt-6 max-w-[34rem] text-sm font-light leading-relaxed text-cream/80 sm:text-[0.98rem]`}
          style={{ animationDelay: "0.46s" }}
        >
          {strings.description}
        </p>

        <div
          className={`${enter} mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4`}
          style={{ animationDelay: "0.6s" }}
        >
          <HeroCTA cta={strings.primaryCta} variant="primary" />
          <HeroCTA cta={strings.secondaryCta} variant="secondary" />
        </div>
      </div>
    </div>
  );
}