import { useI18n, type Language } from "@/i18n";

const languages: Language[] = ["en", "ru"];

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { language, setLanguage } = useI18n();

  return (
    <div
      className={`flex items-center gap-2 ${className}`}
      role="group"
      aria-label="Language"
    >
      {languages.map((lang, i) => (
        <span key={lang} className="flex items-center gap-2">
          {i > 0 ? (
            <span aria-hidden="true" className="text-current/30 text-[11px]">
              |
            </span>
          ) : null}
          <button
            type="button"
            onClick={() => setLanguage(lang)}
            aria-pressed={language === lang}
            aria-label={lang === "en" ? "English" : "Русский"}
            className={`micro min-h-[44px] px-1 transition-opacity duration-500 ${
              language === lang ? "opacity-100" : "opacity-45 hover:opacity-80"
            }`}
          >
            {lang.toUpperCase()}
          </button>
        </span>
      ))}
    </div>
  );
}
