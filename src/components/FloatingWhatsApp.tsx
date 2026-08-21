import { WHATSAPP_URL } from "@/lib/brand";
import { useI18n } from "@/i18n";

export function FloatingWhatsApp() {
  const { t } = useI18n();
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.contact.whatsapp}
      className="fixed right-[max(1rem,env(safe-area-inset-right))] bottom-[max(1rem,env(safe-area-inset-bottom))] z-50 flex h-12 min-h-[44px] items-center gap-2.5 border border-cream/25 bg-cocoa/85 px-4 text-ivory backdrop-blur-md transition-colors duration-500 hover:bg-ivory hover:text-espresso md:h-14 md:px-4"
    >
      <svg
  viewBox="0 0 24 24"
  className="h-5 w-5 shrink-0"
  aria-hidden="true"
  fill="none"
  stroke="currentColor"
  strokeWidth="1.7"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .17 5.33.17 11.89c0 2.1.55 4.15 1.6 5.95L.07 24l6.3-1.65a11.88 11.88 0 0 0 5.69 1.45h.01c6.55 0 11.88-5.33 11.88-11.89 0-3.17-1.23-6.15-3.43-8.43Z" />
  <path d="M8.04 6.93c-.2-.45-.41-.46-.6-.47h-.51c-.18 0-.47.07-.72.34-.25.27-.95.93-.95 2.26s.97 2.63 1.11 2.81c.14.18 1.9 2.9 4.6 3.96 2.25.89 2.71.71 3.2.67.49-.05 1.57-.64 1.79-1.26.22-.62.22-1.15.16-1.26-.07-.11-.25-.18-.52-.31-.27-.14-1.57-.78-1.82-.87-.24-.09-.42-.13-.6.14-.18.27-.68.87-.84 1.04-.15.18-.31.2-.58.07-.27-.14-1.12-.42-2.14-1.33-.79-.7-1.32-1.57-1.48-1.84-.15-.27-.02-.42.12-.55.12-.12.27-.31.4-.47.13-.16.18-.27.27-.45.09-.18.05-.34-.02-.47-.07-.13-.6-1.44-.82-1.98Z" />
</svg>
      <span className="micro hidden md:inline">{t.contact.whatsapp}</span>
    </a>
  );
}
