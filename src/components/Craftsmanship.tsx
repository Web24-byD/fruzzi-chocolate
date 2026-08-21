import { useI18n } from "@/i18n";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Craftsmanship() {
  const { t } = useI18n();
  const s = t.craft.steps;
  const steps = [s.ingredients, s.tempering, s.moulding, s.decoration, s.final];

  return (
    <section className="surface-light section-y" aria-labelledby="craft-heading">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading label={t.craft.label} index="04" />
          </div>
          <Reveal delay={0.1} className="lg:col-span-7">
            <h2 id="craft-heading" className="display-lg text-espresso uppercase">
              {t.craft.headlineA}
              <br />
              <span className="text-berry">{t.craft.headlineB}</span>
            </h2>
          </Reveal>
        </div>

        <ol className="mt-20 border-t border-border">
          {steps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={0.05 * i}>
              <div className="group grid grid-cols-[auto_minmax(0,1fr)] items-baseline gap-6 border-b border-border py-8 transition-colors duration-700 md:grid-cols-[5rem_minmax(0,18rem)_minmax(0,1fr)] md:gap-10 md:py-10">
                <span className="micro text-caramel">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-2xl leading-tight font-light text-espresso transition-transform duration-700 ease-editorial group-hover:translate-x-1 md:text-3xl">
                  {step.title}
                </h3>
                <p className="col-span-2 max-w-[48ch] text-sm text-muted-foreground md:col-span-1">
                  {step.text}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
