import { useState } from "react";
import { motion } from "framer-motion";
import { useI18n } from "@/i18n";
import { SECTIONS, scrollToSection } from "@/lib/brand";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import giftImage from "@/assets/gifting.jpg";
import bonbons from "@/assets/collection-1.jpg";

export function Gifting() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);

  return (
    <section className="section-y" aria-labelledby="gifting-heading">
      <div className="shell grid gap-14 lg:grid-cols-12 lg:items-center lg:gap-16">
        <Reveal className="lg:col-span-6">
          <div className="relative aspect-4/3 overflow-hidden bg-cocoa">
            <img
              src={bonbons}
              alt=""
              aria-hidden="true"
              width={1200}
              height={1504}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <motion.img
              src={giftImage}
              alt={t.gifting.headline}
              width={1400}
              height={1000}
              loading="lazy"
              decoding="async"
              animate={{ y: open ? "-14%" : "0%", opacity: open ? 0.12 : 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-pressed={open}
              className="micro absolute bottom-4 left-4 min-h-[44px] border border-cream/30 bg-espresso/70 px-4 text-ivory backdrop-blur-md transition-colors duration-500 hover:bg-ivory hover:text-espresso"
            >
              {open ? t.gifting.close : t.gifting.open}
            </button>
          </div>
        </Reveal>

        <div className="lg:col-span-5 lg:col-start-8">
          <SectionHeading label={t.gifting.label} index="08" />
          <Reveal delay={0.1}>
            <h2 id="gifting-heading" className="mt-8 display-lg text-ivory">
              {t.gifting.headline}
            </h2>
            <p className="body-lead mt-8 max-w-[42ch]">{t.gifting.body}</p>
            <button
              type="button"
              onClick={() => scrollToSection(SECTIONS.contact)}
              className="btn-line mt-10"
            >
              {t.gifting.cta}
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
