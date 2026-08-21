import { useI18n } from "@/i18n";
import { SECTIONS } from "@/lib/brand";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import one from "@/assets/journal-1.jpg";
import two from "@/assets/journal-2.jpg";
import three from "@/assets/journal-3.jpg";

export function Journal() {
  const { t } = useI18n();
  const stories = [
    { image: one, category: t.journal.categories.bts, ...t.journal.stories.one },
    { image: two, category: t.journal.categories.craft, ...t.journal.stories.two },
    { image: three, category: t.journal.categories.seasonal, ...t.journal.stories.three },
  ];

  return (
    <section id={SECTIONS.journal} className="surface-light section-y" aria-labelledby="journal-heading">
      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionHeading label={t.journal.label} index="09" />
            <Reveal delay={0.08}>
              <h2 id="journal-heading" className="mt-8 display-lg text-espresso">
                {t.journal.title}
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.14} className="lg:col-span-4 lg:col-start-9">
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {Object.values(t.journal.categories).map((c) => (
                <li key={c} className="micro text-muted-foreground">
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <ul className="mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
          {stories.map((story, i) => (
            <Reveal as="li" key={story.title} delay={0.06 * i} className="group">
              <article>
                <div className="relative aspect-3/2 overflow-hidden bg-beige" data-cursor="image">
                  <img
                    src={story.image}
                    alt={story.title}
                    width={1200}
                    height={800}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-[900ms] ease-editorial group-hover:scale-[1.04]"
                  />
                </div>
                <p className="micro mt-5 text-caramel">{story.category}</p>
                <h3 className="mt-3 font-display text-2xl leading-tight font-light text-espresso">
                  {story.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">{story.text}</p>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
