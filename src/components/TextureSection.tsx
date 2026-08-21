import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useI18n } from "@/i18n";
import texture from "@/assets/texture.jpg";

export function TextureSection() {
  const { t } = useI18n();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[70svh] items-center overflow-hidden bg-cocoa lg:min-h-[86svh]"
      aria-labelledby="texture-heading"
    >
      <motion.img
        src={texture}
        alt=""
        aria-hidden="true"
        width={1920}
        height={1088}
        loading="lazy"
        decoding="async"
        style={{ y }}
        className="absolute inset-0 h-[118%] w-full object-cover opacity-55"
      />
      <div className="absolute inset-0 bg-espresso/45" aria-hidden="true" />
      <div className="shell relative z-10 py-24">
        <p className="micro text-champagne">{t.texture.label}</p>
        <h2 id="texture-heading" className="mt-8 max-w-[18ch] display-lg text-ivory uppercase">
          {t.texture.headline}
        </h2>
        <p className="body-lead mt-8 max-w-[42ch] text-cream/70">{t.texture.body}</p>
      </div>
    </section>
  );
}
