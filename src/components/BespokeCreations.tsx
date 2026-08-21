import { useState } from "react";
import { useI18n } from "@/i18n";
import { WHATSAPP_URL } from "@/lib/brand";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function BespokeCreations() {
  const { t } = useI18n();
  const [selected, setSelected] = useState<string | null>(null);
  const o = t.bespoke.options;
  const options = [o.corporate, o.private, o.weddings, o.events, o.custom];

  const href = `${WHATSAPP_URL}?text=${encodeURIComponent(
    selected ? `${t.bespoke.label}: ${selected}` : t.bespoke.label,
  )}`;

  return (
    <section className="surface-light section-y" aria-labelledby="bespoke-heading">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionHeading label={t.bespoke.label} index="06" />
            <Reveal delay={0.1}>
              <h2 id="bespoke-heading" className="mt-8 display-lg text-espresso uppercase">
                {t.bespoke.headline}
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.16} className="lg:col-span-4 lg:col-start-9 lg:pt-16">
            <p className="body-lead">{t.bespoke.body}</p>
          </Reveal>
        </div>

        <ul className="mt-16 flex flex-wrap gap-3">
          {options.map((option, i) => (
            <Reveal as="li" key={option} delay={0.04 * i}>
              <button
                type="button"
                aria-pressed={selected === option}
                onClick={() => setSelected((v) => (v === option ? null : option))}
                className={`micro min-h-[44px] border px-5 py-3 transition-colors duration-500 ease-editorial ${
                  selected === option
                    ? "border-espresso bg-espresso text-ivory"
                    : "border-border text-espresso hover:border-espresso"
                }`}
              >
                {option}
              </button>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={0.1}>
          <a href={href} target="_blank" rel="noopener noreferrer" className="btn-solid mt-14">
            {t.bespoke.cta}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
