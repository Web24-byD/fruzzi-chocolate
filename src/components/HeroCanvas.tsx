import { useEffect, useRef } from "react";
import { useFrameSequence } from "@/hooks/useFrameSequence";
import type { ProgressListener } from "@/hooks/useScrollProgress";

export type HeroCanvasProps = {
  subscribe: (fn: ProgressListener) => () => void;
  total: number;
  url: (frame: number) => string;
  sample?: number;
  reducedMotion?: boolean;
  /** 0..1 horizontal / vertical focal point used for cover cropping. */
  focal?: { x: number; y: number };
  onReadyChange?: (ready: boolean) => void;
  className?: string;
};

export function HeroCanvas({
  subscribe,
  total,
  url,
  sample = 1,
  reducedMotion = false,
  focal = { x: 0.5, y: 0.45 },
  onReadyChange,
  className,
}: HeroCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { loaderRef, ready } = useFrameSequence({ total, url, sample });
  const currentFrame = useRef(-1);
  const focalRef = useRef(focal);
  focalRef.current = focal;

  useEffect(() => {
    onReadyChange?.(ready);
  }, [ready, onReadyChange]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let width = 0;
    let height = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      currentFrame.current = -1;
      draw(lastProgress);
    };

    const drawImageCover = (img: HTMLImageElement) => {
      const iw = img.naturalWidth || 16;
      const ih = img.naturalHeight || 9;
      const scale = Math.max(width / iw, height / ih);
      const dw = iw * scale;
      const dh = ih * scale;
      const dx = (width - dw) * focalRef.current.x;
      const dy = (height - dh) * focalRef.current.y;
      ctx.drawImage(img, dx, dy, dw, dh);
    };

    let lastProgress = 0;
    const draw = (progress: number) => {
      const loader = loaderRef.current;
      if (!loader || width === 0) return;
      const count = loader.total;
      // The last ~10% of the scroll holds on the final frame so the visual
      // settles before the section releases into the next one.
      const timeline = Math.min(1, progress / 0.9);
      const index = reducedMotion
        ? Math.floor(count * 0.34)
        : Math.min(count - 1, Math.floor(timeline * (count - 1) + 0.0001));
      if (index === currentFrame.current) return;
      const img = loader.getFrame(index);
      if (!img) return;
      currentFrame.current = index;
      drawImageCover(img);
    };

    const onProgress: ProgressListener = (p) => {
      lastProgress = p;
      draw(p);
    };

    resize();
    const unsubscribe = subscribe(onProgress);

    // Redraw as new frames arrive so gaps fill in smoothly.
    const fillTimer = setInterval(() => {
      currentFrame.current = -1;
      draw(lastProgress);
    }, 400);

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    return () => {
      unsubscribe();
      clearInterval(fillTimer);
      ro.disconnect();
    };
  }, [subscribe, loaderRef, reducedMotion, ready]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      role="img"
      aria-label="Cinematic chocolate sequence by FRUZZI"
    />
  );
}
