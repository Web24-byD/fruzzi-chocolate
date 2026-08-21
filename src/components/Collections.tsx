import { useI18n } from "@/i18n";
import { SECTIONS, scrollToSection } from "@/lib/brand";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import creations from "@/assets/collection-1.jpg";
import confectionery from "@/assets/collection-2.jpg";
import signature from "@/assets/collection-3.jpg";
import gifts from "@/assets/gifting.jpg";
import bespoke from "@/assets/texture.jpg";

export function Collections() {
  const { t } = useI18n();
  const c = t.collections.items;

  const items = [
    { key: "creations", image: creations, w: 1200, h: 1504, ...c.creations, span: "lg:col-span-7", ratio: "aspect-4/5" },
    { key: "confectionery", image: confectionery, w: 1200, h: 900, ...c.confectionery, span: "lg:col-span-5 lg:mt-32", ratio: "aspect-4/3" },
    { key: "signature", image: signature, w: 1200, h: 1500, ...c.signature, span: "lg:col-span-4 lg:col-start-2", ratio: "aspect-3/4" },
    { key: "gifts", image: gifts, w: 1400, h: 1000, ...c.gifts, span: "lg:col-span-6 lg:col-start-7 lg:mt-24", ratio: "aspect-16/11" },
    { key: "bespoke", image: bespoke, w: 1920, h: 1088, ...c.bespoke, span: "lg:col-span-8 lg:col-start-3", ratio: "aspect-21/9" },
  ];

  return (
    <section id={SECTIONS.collections} className="section-y" aria-labelledby="collections-heading">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading label={t.collections.label} index="02" />
            <Reveal delay={0.08}>
              <h2 id="collections-heading" className="mt-8 display-lg text-ivory">
                {t.collections.title}
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.16} className="lg:col-span-4 lg:col-start-9 lg:pt-16">
            <p className="body-lead">{t.collections.intro}</p>
          </Reveal>
        </div>

        <ul className="mt-20 grid gap-x-8 gap-y-16 lg:grid-cols-12 lg:gap-y-8">
          {items.map((item, i) => (
            <Reveal as="li" key={item.key} delay={0.05 * i} className={`group ${item.span}`}>
              <button
                type="button"
                onClick={() => scrollToSection(SECTIONS.contact)}
                className="block w-full text-left"
                data-cursor="image"
              >
                <div className={`relative overflow-hidden bg-cocoa ${item.ratio}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    width={item.w}
                    height={item.h}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-[900ms] ease-editorial group-hover:scale-[1.045]"
                  />
                </div>
                <div className="mt-5 flex items-start justify-between gap-6 border-t border-border pt-4">
                  <div className="min-w-0">
                    <h3 className="font-display text-2xl leading-tight font-light text-ivory transition-transform duration-700 ease-editorial group-hover:translate-x-1">
                      {item.title}
                    </h3>
                    <p className="mt-2 max-w-[46ch] text-sm text-muted-foreground opacity-70 transition-opacity duration-700 group-hover:opacity-100">
                      {item.text}
                    </p>
                  </div>
                  <span className="micro flex shrink-0 items-center gap-2 pt-1 text-champagne">
                    {t.collections.view}
                    <span
                      aria-hidden="true"
                      className="inline-block transition-transform duration-700 ease-editorial group-hover:translate-x-2"
                    >
                      →
                    </span>
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
