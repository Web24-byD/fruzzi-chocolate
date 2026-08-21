import type { HeroCta } from "./heroContent";

type Props = {
  cta: HeroCta;
  variant: "primary" | "secondary";
};

export function HeroCTA({ cta, variant }: Props) {
  const base =
    "group inline-flex items-center gap-3 px-7 py-3.5 text-[0.68rem] font-medium uppercase tracking-[0.22em] transition-colors duration-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-champagne focus-visible:ring-offset-2 focus-visible:ring-offset-espresso";
  const styles =
    variant === "primary"
      ? "bg-ivory text-espresso hover:bg-champagne"
      : "border border-ivory/35 text-ivory hover:border-ivory/80 hover:bg-ivory/10";

  const content = (
    <>
      <span>{cta.label}</span>
      <span
        aria-hidden="true"
        className="inline-block translate-x-0 transition-transform duration-500 ease-out group-hover:translate-x-1.5"
      >
        →
      </span>
    </>
  );

  if (cta.href) {
    return (
      <a href={cta.href} onClick={cta.onClick} className={`${base} ${styles}`}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={cta.onClick} className={`${base} ${styles}`}>
      {content}
    </button>
  );
}
