export const WHATSAPP_URL = "https://wa.me/77015285601";
export const INSTAGRAM_URL = "https://www.instagram.com/fruzzikz/";
export const INSTAGRAM_HANDLE = "@fruzzikz";

export const SECTIONS = {
  collections: "collections",
  atelier: "atelier",
  masterclasses: "masterclasses",
  journal: "journal",
  contact: "contact",
} as const;

export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
}
