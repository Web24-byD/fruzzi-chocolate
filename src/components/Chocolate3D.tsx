import { useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useI18n } from "@/i18n";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import piece from "@/assets/hero.jpg";

/**
 * 2.5D chocolate object: a lit, parallaxed sculpture that responds to the
 * pointer and to scroll. Chosen over WebGL so the page stays light on
 * mobile — no runtime cost beyond transforms.
 */
export function Chocolate3D() {
  const { t } = useI18n();
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scrollRotate = useTransform(scrollYProgress, [0, 1], [-6, 6]);
  const rotateZ = useSpring(scrollRotate, { stiffness: 40, damping: 20 });

  const tilt = reduced ? { x: 0, y: 0 } : pointer;

  return (
    <section className="section-y overflow-hidden" aria-labelledby="object-heading">
      <div className="shell grid gap-14 lg:grid-cols-12 lg:items-center lg:gap-16">
        <div className="lg:col-span-4">
          <SectionHeading label={t.object.label} index="07" />
          <Reveal delay={0.1}>
            <h2 id="object-heading" className="mt-8 display-md text-ivory">
              {t.object.headline}
            </h2>
            <p className="body-lead mt-6 max-w-[36ch]">{t.object.body}</p>
          </Reveal>
        </div>

        <Reveal delay={0.14} className="lg:col-span-7 lg:col-start-6">
          <div
            ref={ref}
            data-cursor="image"
            onPointerMove={(e) => {
              const r = e.currentTarget.getBoundingClientRect();
              setPointer({
                x: ((e.clientX - r.left) / r.width - 0.5) * 2,
                y: ((e.clientY - r.top) / r.height - 0.5) * 2,
              });
            }}
            onPointerLeave={() => setPointer({ x: 0, y: 0 })}
            className="relative aspect-4/3 w-full overflow-hidden bg-cocoa"
            style={{ perspective: "1200px" }}
          >
            <motion.div
              className="absolute -inset-8"
              style={{ rotateZ, transformStyle: "preserve-3d" }}
              animate={{ rotateY: tilt.x * 9, rotateX: -tilt.y * 7 }}
              transition={{ type: "spring", stiffness: 45, damping: 18 }}
            >
              <img
                src={piece}
                alt=""
                aria-hidden="true"
                width={1920}
                height={1280}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
              <motion.div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                  background: `radial-gradient(38% 42% at ${50 + tilt.x * 22}% ${44 + tilt.y * 22}%, color-mix(in oklab, var(--champagne) 32%, transparent), transparent 70%)`,
                }}
              />
            </motion.div>
            <span className="micro absolute bottom-4 left-4 text-ivory/45">{t.object.hint}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
