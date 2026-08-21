import { useI18n } from "@/i18n";
import { INSTAGRAM_URL } from "@/lib/brand";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import a from "@/assets/collection-1.jpg";
import b from "@/assets/texture.jpg";
import c from "@/assets/collection-2.jpg";
import d from "@/assets/journal-1.jpg";
import e from "@/assets/collection-3.jpg";
import f from "@/assets/journal-2.jpg";

const images = [a, b, c, d, e, f];

export function InstagramGallery() {
  const { t } = useI18n();
  return (
    <section className="section-y" aria-labelledby="instagram-heading">
      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionHeading label={t.instagram.label} index="10" />
            <Reveal delay={0.08}>
              <h2 id="instagram-heading" className="mt-8 display-md text-ivory">
                {t.instagram.title}
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.14} className="lg:col-span-4 lg:col-start-9 lg:text-right">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="micro link-underline inline-block min-h-[44px] leading-[44px] text-champagne"
            >
              {t.instagram.cta}
            </a>
          </Reveal>
        </div>

        <ul className="mt-14 grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-3 lg:grid-cols-6">
          {images.map((src, i) => (
            <Reveal as="li" key={i} delay={0.03 * i}>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group block aspect-square overflow-hidden bg-cocoa"
                data-cursor="image"
                aria-label={t.instagram.cta}
              >
                <img
                  src={src}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover opacity-80 transition duration-[900ms] ease-editorial group-hover:scale-105 group-hover:opacity-100"
                />
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
