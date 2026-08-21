/**
 * FrameSequenceLoader
 * Progressive, memory-conscious loader for an ordered JPG frame sequence.
 * No dependencies. Framework agnostic.
 */

export type FrameSequenceOptions = {
  /** Total number of frames in the sequence (1-indexed urls). */
  total: number;
  /** Returns the url for a 1-indexed frame number. */
  url: (frame: number) => string;
  /** Parallel network requests during progressive fill. */
  concurrency?: number;
  /** Called as loading progresses (0..1) */
  onProgress?: (loaded: number, total: number) => void;
  /** Called once enough frames exist to start rendering. */
  onReady?: () => void;
  /** Every Nth frame is treated as a priority "key" frame. */
  keyStep?: number;
};

export class FrameSequenceLoader {
  readonly total: number;
  private url: (frame: number) => string;
  private concurrency: number;
  private keyStep: number;
  private onProgress: ((loaded: number, total: number) => void) | undefined;
  private onReady: (() => void) | undefined;

  private images: (HTMLImageElement | null)[];
  private loaded: boolean[];
  private failed: boolean[];
  private loadedCount = 0;
  private ready = false;
  private destroyed = false;

  constructor(opts: FrameSequenceOptions) {
    this.total = opts.total;
    this.url = opts.url;
    this.concurrency = opts.concurrency ?? 6;
    this.keyStep = opts.keyStep ?? 8;
    this.onProgress = opts.onProgress;
    this.onReady = opts.onReady;
    this.images = new Array(this.total).fill(null);
    this.loaded = new Array(this.total).fill(false);
    this.failed = new Array(this.total).fill(false);
  }

  /** Index-safe (0-based) lookup that never returns a broken image. */
  getFrame(index: number): HTMLImageElement | null {
    const i = Math.max(0, Math.min(this.total - 1, index));
    if (this.loaded[i]) return this.images[i] ?? null;
    // walk outwards to the closest successfully loaded frame
    for (let d = 1; d < this.total; d++) {
      const back = i - d;
      if (back >= 0 && this.loaded[back]) return this.images[back] ?? null;
      const fwd = i + d;
      if (fwd < this.total && this.loaded[fwd]) return this.images[fwd] ?? null;
    }
    return null;
  }

  get progress() {
    return this.loadedCount / this.total;
  }

  start() {
    const keys: number[] = [];
    for (let i = 0; i < this.total; i += this.keyStep) keys.push(i);
    if (keys[keys.length - 1] !== this.total - 1) keys.push(this.total - 1);

    const rest: number[] = [];
    for (let i = 0; i < this.total; i++) if (!keys.includes(i)) rest.push(i);

    // First frame is the most important: it is the poster.
    this.loadOne(0).then(() => {
      if (this.destroyed) return;
      this.markReady();
      void this.runQueue(keys).then(() => this.runQueue(rest));
    });
  }

  private markReady() {
    if (this.ready) return;
    this.ready = true;
    this.onReady?.();
  }

  private async runQueue(queue: number[]) {
    let cursor = 0;
    const workers = new Array(Math.min(this.concurrency, queue.length))
      .fill(0)
      .map(async () => {
        while (!this.destroyed && cursor < queue.length) {
          const idx = queue[cursor++];
          if (idx !== undefined) await this.loadOne(idx);
        }
      });
    await Promise.all(workers);
  }

  private loadOne(index: number): Promise<void> {
    if (this.loaded[index] || this.failed[index] || this.destroyed) {
      return Promise.resolve();
    }
    return new Promise((resolve) => {
      const img = new Image();
      img.decoding = "async";
      img.src = this.url(index + 1);
      const done = (ok: boolean) => {
        if (this.destroyed) return resolve();
        if (ok) {
          this.images[index] = img;
          this.loaded[index] = true;
          this.loadedCount++;
        } else {
          this.failed[index] = true;
        }
        this.onProgress?.(this.loadedCount, this.total);
        resolve();
      };
      const settle = () => {
        if (typeof img.decode === "function") {
          img.decode().then(
            () => done(true),
            () => done(true),
          );
        } else {
          done(true);
        }
      };
      if (img.complete && img.naturalWidth > 0) settle();
      img.onload = settle;
      img.onerror = () => done(false);
    });
  }

  destroy() {
    this.destroyed = true;
    for (let i = 0; i < this.images.length; i++) {
      const img = this.images[i];
      if (img) {
        img.onload = null;
        img.onerror = null;
        img.src = "";
      }
      this.images[i] = null;
      this.loaded[i] = false;
    }
    this.loadedCount = 0;
  }
}
