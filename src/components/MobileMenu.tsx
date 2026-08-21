import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { useI18n } from "@/i18n";
import { INSTAGRAM_URL, scrollToSection } from "@/lib/brand";
import { LanguageSwitcher } from "./LanguageSwitcher";

type Props = {
  open: boolean;
  onClose: () => void;
  links: { id: string; label: string }[];
};

export function MobileMenu({ open, onClose, links }: Props) {
  const { t } = useI18n();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label={t.nav.menu}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-40 flex flex-col bg-espresso/98 pt-24 pb-10 backdrop-blur-xl lg:hidden"
        >
          <nav className="shell flex flex-1 flex-col justify-center gap-1">
            {links.map((link, i) => (
              <motion.button
                key={link.id}
                type="button"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.05 * i, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => {
                  onClose();
                  setTimeout(() => scrollToSection(link.id), 220);
                }}
                className="display-md min-h-[56px] border-b border-border py-4 text-left text-ivory"
              >
                {link.label}
              </motion.button>
            ))}
          </nav>
          <div className="shell flex items-center justify-between gap-4">
            <LanguageSwitcher className="text-ivory" />
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="micro min-h-[44px] leading-[44px] text-ivory/70"
            >
              {t.nav.instagram}
            </a>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
