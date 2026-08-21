export type HeroCta = { label: string; href?: string; onClick?: () => void };

export type HeroStrings = {
  eyebrow: string;
  brand: string;
  subBrand: string;
  title: string;
  description: string;
  primaryCta: HeroCta;
  secondaryCta: HeroCta;
  scrollLabel: string;
};

/**
 * Default copy. The parent site can override any of these via props
 * (e.g. from its own src/i18n system) — this is only a fallback.
 */
export const heroDefaults: Record<"en" | "ru", HeroStrings> = {
  en: {
    eyebrow: "KARAGANDA · KAZAKHSTAN",
    brand: "FRUZZI",
    subBrand: "ENDORFINE BY FRUZZI",
    title: "Chocolate, Designed to Be Remembered.",
    description:
      "Handcrafted chocolate creations and confectionery experiences from Karaganda, Kazakhstan.",
    primaryCta: { label: "EXPLORE THE COLLECTION", href: "#collections" },
    secondaryCta: { label: "DISCOVER THE ATELIER", href: "#atelier" },
    scrollLabel: "SCROLL TO DISCOVER",
  },
  ru: {
    eyebrow: "КАРАГАНДА · КАЗАХСТАН",
    brand: "FRUZZI",
    subBrand: "ENDORFINE BY FRUZZI",
    title: "Шоколад, который невозможно забыть.",
    description:
      "Авторские шоколадные изделия и кондитерские творения из Караганды, Казахстан.",
    primaryCta: { label: "СМОТРЕТЬ КОЛЛЕКЦИЮ", href: "#collections" },
    secondaryCta: { label: "УЗНАТЬ ОБ АТЕЛЬЕ", href: "#atelier" },
    scrollLabel: "ЛИСТАЙТЕ ВНИЗ",
  },
};
