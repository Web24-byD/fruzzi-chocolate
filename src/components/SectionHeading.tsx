import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type Props = {
  label: string;
  children?: ReactNode;
  align?: "left" | "center";
  index?: string;
};

export function SectionHeading({ label, children, align = "left", index }: Props) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      <Reveal>
        <div
          className={`flex items-center gap-4 ${align === "center" ? "justify-center" : ""}`}
        >
          {index ? <span className="micro text-caramel">{index}</span> : null}
          <span className="micro text-muted-foreground">{label}</span>
          <span
            aria-hidden="true"
            className="hidden h-px w-16 bg-border sm:block"
          />
        </div>
      </Reveal>
      {children ? <div className="mt-8">{children}</div> : null}
    </div>
  );
}
