import { useI18n } from "@/i18n";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function ArtOfChocolate() {
  const { t } = useI18n();
  return (
    <section className="surface-light section-y" aria-labelledby="art-heading">
      <div className="shell">
        <SectionHeading label={t.art.label} index="01" />
        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-8">
            <h2 id="art-heading" className="display-lg text-espresso">
              {t.art.headlineA}
              <br />
              <span className="text-berry italic">{t.art.headlineB}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.12} className="lg:col-span-4 lg:pt-4">
            <p className="body-lead">{t.art.body}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
