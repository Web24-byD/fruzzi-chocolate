import { useI18n } from "@/i18n";
import { SECTIONS } from "@/lib/brand";
import { EnquiryForm } from "./EnquiryForm";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Masterclasses() {
  const { t } = useI18n();
  return (
    <section id={SECTIONS.masterclasses} className="section-y" aria-labelledby="mc-heading">
      <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading label={t.masterclasses.label} index="05" />
          <Reveal delay={0.1}>
            <h2 id="mc-heading" className="mt-8 display-lg text-ivory">
              {t.masterclasses.headline}
            </h2>
            <p className="body-lead mt-8 max-w-[44ch]">{t.masterclasses.body}</p>
          </Reveal>
        </div>
        <Reveal delay={0.16} className="lg:col-span-6 lg:col-start-7">
          <p className="micro mb-8 text-champagne">{t.masterclasses.cta}</p>
          <EnquiryForm subject="masterclass" />
        </Reveal>
      </div>
    </section>
  );
}
