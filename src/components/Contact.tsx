import { useI18n } from "@/i18n";
import { INSTAGRAM_URL, SECTIONS, WHATSAPP_URL } from "@/lib/brand";
import { EnquiryForm } from "./EnquiryForm";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  const { t } = useI18n();
  return (
    <section id={SECTIONS.contact} className="bg-cocoa section-y" aria-labelledby="contact-heading">
      <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <SectionHeading label={t.contact.label} index="11" />
          <Reveal delay={0.1}>
            <h2 id="contact-heading" className="mt-8 display-lg text-ivory uppercase">
              {t.contact.headline}
            </h2>
            <p className="body-lead mt-8 max-w-[42ch]">{t.contact.body}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-solid">
                {t.contact.whatsapp}
              </a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn-line">
                {t.contact.instagram}
              </a>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.16} className="lg:col-span-5 lg:col-start-8">
          <p className="micro mb-8 text-champagne">{t.contact.enquiry}</p>
          <EnquiryForm subject="general" />
        </Reveal>
      </div>
    </section>
  );
}
