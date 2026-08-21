import { useEffect, useMemo, useRef, useState } from "react";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { HeroCanvas } from "./HeroCanvas";
import { HeroContent } from "./HeroContent";
import {
  heroDefaults,
  type HeroCta,
  type HeroStrings,
} from "./heroContentData";

export type CinematicScrollHeroProps = Partial<HeroStrings> & {
  language?: "en" | "ru";
  /** Total frames in the sequence. */
  frameCount?: number;
  /** Base path of the frame folders (expects /lg and /sm subfolders). */
  framesBasePath?: string;
  /** Total scroll length of the pinned section, in vh. */
  scrollLength?: number;
  className?: string;
};

const usePrefersReducedMotion = () => {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return reduced;
};

/** Chooses asset size + frame sampling based on the device's capabilities. */
const useDeviceProfile = () => {
  const [profile, setProfile] = useState<{ size: "lg" | "sm"; sample: number }>({
    size: "lg",
    sample: 1,
  });
  useEffect(() => {
    const nav = navigator as Navigator & {
      deviceMemory?: number;
      connection?: { saveData?: boolean; effectiveType?: string };
    };
    const small = window.matchMedia("(max-width: 820px)").matches;
    const lowMemory = (nav.deviceMemory ?? 8) <= 4;
    const saveData =
      nav.connection?.saveData === true ||
      /2g/.test(nav.connection?.effectiveType ?? "");
    if (saveData) setProfile({ size: "sm", sample: 4 });
    else if (small && lowMemory) setProfile({ size: "sm", sample: 3 });
    else if (small) setProfile({ size: "sm", sample: 2 });
    else setProfile({ size: "lg", sample: 1 });
  }, []);
  return profile;
};

export function CinematicScrollHero({
  language = "en",
  frameCount = 147,
  framesBasePath = "/hero-frames",
  scrollLength = 300,
  className,
  ...overrides
}: CinematicScrollHeroProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const scrollHintRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const reducedMotion = usePrefersReducedMotion();
  const { size, sample } = useDeviceProfile();
  const { subscribe } = useScrollProgress(sectionRef);
  const [ready, setReady] = useState(false);

  const strings: HeroStrings = useMemo(() => {
    const base = heroDefaults[language];
    return {
      ...base,
      ...(Object.fromEntries(
        Object.entries(overrides).filter(([, v]) => v !== undefined),
      ) as Partial<HeroStrings>),
      primaryCta: (overrides.primaryCta as HeroCta) ?? base.primaryCta,
      secondaryCta: (overrides.secondaryCta as HeroCta) ?? base.secondaryCta,
    };
  }, [language, overrides]);

  const url = useMemo(
    () => (frame: number) =>
      `${framesBasePath}/${size}/frame-${String(frame).padStart(3, "0")}.jpg`,
    [framesBasePath, size],
  );

  // Progress-driven overlay motion, applied directly to the DOM (no re-renders).
 // Progress-driven scroll indicator only.
// Keep hero text visible throughout the animation.
useEffect(() => {
  if (reducedMotion) return;

  return subscribe((p) => {
    const hint = scrollHintRef.current;

    if (hint) {
      const o = Math.max(0, 1 - p * 14);
      hint.style.opacity = String(o);
      hint.style.transform = `translateY(${p * 40}px)`;
    }

    const overlay = overlayRef.current;

    if (overlay) {
      overlay.style.opacity = "1";
      overlay.style.transform = "translateY(0)";
    }
  });
}, [subscribe, reducedMotion]);
return (
  <section
    ref={sectionRef}
    aria-label={`${strings.brand} — ${strings.title}`}
    className={`relative w-full bg-espresso ${className ?? ""}`}
    style={{ height: reducedMotion ? "100svh" : `${scrollLength}vh` }}
  >
    <div className="sticky top-0 h-[100svh] w-full overflow-hidden">
      <HeroCanvas
        subscribe={subscribe}
        total={frameCount}
        url={url}
        sample={sample}
        reducedMotion={reducedMotion}
        onReadyChange={setReady}
        className="absolute inset-0 h-full w-full"
      />

      <div
  className="pointer-events-none absolute inset-0 z-[5] bg-gradient-to-r from-espresso/75 via-espresso/35 to-transparent"
/>

<div
  className="pointer-events-none absolute inset-0 z-[5] bg-gradient-to-t from-espresso/45 via-transparent to-transparent"
/>

      <div
        className={`absolute inset-0 z-10 transition-opacity duration-700 ${
          ready ? "opacity-100" : "opacity-0"
        }`}
      >
        <div ref={overlayRef} className="h-full w-full will-change-transform">
          <div className="pointer-events-auto h-full">
            <HeroContent
              strings={strings}
              reducedMotion={reducedMotion}
            />
          </div>
        </div>

        {!reducedMotion && (
          <div
            ref={scrollHintRef}
            className="pointer-events-none absolute inset-x-0 bottom-7 z-20 flex flex-col items-center gap-3"
          >
            <span className="text-[0.55rem] uppercase tracking-[0.4em] text-cream/70">
              {strings.scrollLabel}
            </span>

            <span
              className="hero-scroll-line"
              aria-hidden="true"
            />
          </div>
        )}
      </div>
    </div>
  </section>
);
  
}

export default CinematicScrollHero;
