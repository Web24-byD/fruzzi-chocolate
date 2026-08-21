import { useEffect, useState } from "react";
import { useI18n } from "@/i18n";
import { INSTAGRAM_URL, SECTIONS, scrollToSection } from "@/lib/brand";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { id: SECTIONS.collections, label: t.nav.collections },
    { id: SECTIONS.atelier, label: t.nav.atelier },
    { id: SECTIONS.masterclasses, label: t.nav.masterclasses },
    { id: SECTIONS.journal, label: t.nav.journal },
    { id: SECTIONS.contact, label: t.nav.contact },
  ];

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 text-ivory transition-colors duration-700 ${
          scrolled && !open
            ? "border-b border-cream/12 bg-espresso/80 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="shell grid h-16 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 md:h-20 lg:grid-cols-[1fr_auto_1fr]">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="min-w-0 justify-self-start text-left"
            aria-label="FRUZZI"
          >
            <span className="font-display text-xl leading-none font-light tracking-[0.34em] md:text-2xl">
              FRUZZI
            </span>
          </button>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {links.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(link.id)}
                    className="micro link-underline py-2 text-ivory/75 transition-colors duration-500 hover:text-ivory"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex shrink-0 items-center gap-3 justify-self-end md:gap-5">
            <LanguageSwitcher />
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.nav.instagram}
              className="hidden h-11 w-11 items-center justify-center text-ivory/75 transition-colors duration-500 hover:text-ivory md:flex"
            >
              <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <button
              type="button"
              onClick={() => scrollToSection(SECTIONS.contact)}
              className="btn-line hidden !min-h-[40px] !px-5 !py-2 lg:inline-flex"
            >
              {t.nav.enquire}
            </button>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? t.nav.close : t.nav.menu}
              className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] lg:hidden"
            >
              <span
                className={`block h-px w-6 bg-current transition-transform duration-500 ${open ? "translate-y-[3px] rotate-45" : ""}`}
              />
              <span
                className={`block h-px w-6 bg-current transition-transform duration-500 ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
              />
            </button>
          </div>
        </div>
      </header>
      <MobileMenu open={open} onClose={() => setOpen(false)} links={links} />
    </>
  );
}
