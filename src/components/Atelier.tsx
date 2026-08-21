import { useI18n } from "@/i18n";
import { SECTIONS, scrollToSection } from "@/lib/brand";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import atelierImage from "@/assets/atelier.jpg";

export function Atelier() {
  const { t } = useI18n();
  const meta = [
    [t.atelier.meta.based, t.atelier.meta.basedValue],
    [t.atelier.meta.practice, t.atelier.meta.practiceValue],
    [t.atelier.meta.approach, t.atelier.meta.approachValue],
  ];

  return (
    <section id={SECTIONS.atelier} className="section-y" aria-labelledby="atelier-heading">
      <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-6">
          <div className="relative aspect-4/5 overflow-hidden bg-cocoa" data-cursor="image">
            <img
              src={atelierImage}
              alt={`${t.atelier.name} — ${t.atelier.role}`}
              width={1200}
              height={1504}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>

        <div className="lg:col-span-5 lg:col-start-8 lg:self-center">
          <SectionHeading label={t.atelier.label} index="03" />
          <Reveal delay={0.1}>
            <h2 id="atelier-heading" className="mt-8 display-lg text-ivory">
              {t.atelier.name}
            </h2>
            <p className="micro mt-4 text-champagne">{t.atelier.role}</p>
            <p className="micro mt-2 text-muted-foreground">{t.atelier.studio}</p>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="body-lead mt-10">{t.atelier.body}</p>
          </Reveal>
          <Reveal delay={0.24}>
            <dl className="mt-12 grid gap-px border-t border-border">
              {meta.map(([label, value]) => (
                <div key={label} className="grid grid-cols-[minmax(0,1fr)_auto] gap-4 border-b border-border py-4">
                  <dt className="micro text-muted-foreground">{label}</dt>
                  <dd className="text-right text-sm text-ivory/85">{value}</dd>
                </div>
              ))}
            </dl>
            <button
              type="button"
              onClick={() => scrollToSection(SECTIONS.contact)}
              className="btn-line mt-10"
            >
              {t.atelier.cta}
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
