import { useEffect, useRef, useState } from "react";
import { FrameSequenceLoader } from "@/components/FrameSequenceLoader";

export type FrameSequenceConfig = {
  total: number;
  url: (frame: number) => string;
  sample?: number;
};

export function useFrameSequence({
  total,
  url,
  sample = 1,
}: FrameSequenceConfig) {
  const loaderRef = useRef<FrameSequenceLoader | null>(null);
  const [ready, setReady] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const count = Math.max(1, Math.ceil(total / sample));

    const loader = new FrameSequenceLoader({
      total: count,
      url: (frame) =>
        url(Math.min(total, (frame - 1) * sample + 1)),
      concurrency: sample > 1 ? 4 : 6,
      keyStep: 8,
      onReady: () => setReady(true),
      onProgress: (loaded, all) => setProgress(loaded / all),
    });

    loaderRef.current = loader;
    loader.start();

    return () => {
      loader.destroy();
      loaderRef.current = null;
    };
  }, [total, url, sample]);

  return {
    loaderRef,
    ready,
    progress,
  };
}