import { useCallback, useEffect, useRef, type RefObject } from "react";

export type ProgressListener = (progress: number) => void;

export function useScrollProgress(ref: RefObject<HTMLElement | null>) {
  const progressRef = useRef(0);
  const listenersRef = useRef(new Set<ProgressListener>());

  const subscribe = useCallback((fn: ProgressListener) => {
    listenersRef.current.add(fn);
    fn(progressRef.current);

    return () => {
      listenersRef.current.delete(fn);
    };
  }, []);

  useEffect(() => {
    let rafId = 0;
    let running = false;

    const measure = () => {
      const el = ref.current;
      if (!el) return 0;

      const rect = el.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;

      if (scrollable <= 0) return 0;

      const raw = -rect.top / scrollable;

      return raw < 0 ? 0 : raw > 1 ? 1 : raw;
    };

    const tick = () => {
      const next = measure();

      if (next !== progressRef.current) {
        progressRef.current = next;
        listenersRef.current.forEach((fn) => fn(next));
      }

      rafId = requestAnimationFrame(tick);
      running = true;
    };

    let idleTimer: ReturnType<typeof setTimeout> | undefined;

    const stop = () => {
      cancelAnimationFrame(rafId);
      running = false;
    };

    const kick = () => {
      if (!running) tick();

      if (idleTimer) clearTimeout(idleTimer);

      idleTimer = setTimeout(stop, 400);
    };

    kick();

    window.addEventListener("scroll", kick, { passive: true });
    window.addEventListener("resize", kick, { passive: true });
    window.addEventListener("orientationchange", kick, { passive: true });

    return () => {
      stop();

      if (idleTimer) clearTimeout(idleTimer);

      window.removeEventListener("scroll", kick);
      window.removeEventListener("resize", kick);
      window.removeEventListener("orientationchange", kick);
    };
  }, [ref]);

  return { progressRef, subscribe };
}