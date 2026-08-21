import { useI18n } from "@/i18n";
import { INSTAGRAM_URL, SECTIONS, WHATSAPP_URL, scrollToSection } from "@/lib/brand";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Footer() {
  const { t } = useI18n();
  const links = [
    { id: SECTIONS.collections, label: t.nav.collections },
    { id: SECTIONS.atelier, label: t.nav.atelier },
    { id: SECTIONS.masterclasses, label: t.nav.masterclasses },
    { id: SECTIONS.journal, label: t.nav.journal },
    { id: SECTIONS.contact, label: t.nav.contact },
  ];

  return (
    <footer className="border-t border-border pt-20 pb-12">
      <div className="shell grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="font-display text-2xl leading-none font-light tracking-[0.34em] text-ivory">
            FRUZZI
          </p>
          <p className="micro mt-4 text-muted-foreground">Endorfine by FRUZZI</p>
          <p className="micro mt-2 text-muted-foreground">{t.footer.location}</p>
        </div>

        <nav aria-label={t.footer.navigate} className="md:col-span-3">
          <p className="micro text-champagne">{t.footer.navigate}</p>
          <ul className="mt-5 space-y-1">
            {links.map((l) => (
              <li key={l.id}>
                <button
                  type="button"
                  onClick={() => scrollToSection(l.id)}
                  className="link-underline min-h-[44px] text-sm text-ivory/75 hover:text-ivory"
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-2">
          <p className="micro text-champagne">{t.footer.connect}</p>
          <ul className="mt-5 space-y-1">
            <li>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline inline-block min-h-[44px] text-sm leading-[44px] text-ivory/75 hover:text-ivory"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline inline-block min-h-[44px] text-sm leading-[44px] text-ivory/75 hover:text-ivory"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <p className="micro text-champagne">{t.footer.legal}</p>
          <ul className="mt-5 space-y-1 text-sm text-ivory/75">
            <li className="min-h-[44px] leading-[44px]">{t.footer.privacy}</li>
            <li className="min-h-[44px] leading-[44px]">{t.footer.terms}</li>
          </ul>
        </div>
      </div>

      <div className="shell mt-16 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="micro text-muted-foreground">
          © {new Date().getFullYear()} FRUZZI. {t.footer.rights}
        </p>
        <LanguageSwitcher />
      </div>
    </footer>
  );
}
