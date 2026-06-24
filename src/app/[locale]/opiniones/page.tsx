import { useTranslations } from "next-intl";

export default function OpinionesPage() {
  const t = useTranslations("opiniones");
  const items = t.raw("items") as Array<{ quote: string; author: string }>;
  const [featured, ...rest] = items;

  return (
    <div className="bg-cream-100">
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-6">
        <p className="text-xs font-sans font-medium uppercase tracking-widest text-terracotta-500 mb-4">
          {t("eyebrow")}
        </p>
        <h1 className="font-serif text-ink-900 text-4xl md:text-5xl leading-tight max-w-xl">
          {t("h1Part1")} <em>{t("h1Italic")}</em>
        </h1>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-border-soft">
        <blockquote>
          <p className="font-serif text-ink-900 text-3xl md:text-4xl leading-snug italic">
            "{featured.quote}"
          </p>
          <footer className="mt-6 text-xs font-sans font-medium uppercase tracking-widest text-terracotta-500">
            — {featured.author}
          </footer>
        </blockquote>
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-0 divide-y md:divide-y-0 md:divide-x divide-border-soft border-t border-border-soft">
          {rest.map((t2, i) => (
            <blockquote key={i} className="py-10 md:px-8 first:md:pl-0 last:md:pr-0">
              <p className="font-serif text-ink-900 text-lg leading-relaxed italic">
                "{t2.quote}"
              </p>
              <footer className="mt-4 text-xs font-sans font-medium uppercase tracking-widest text-terracotta-500">
                — {t2.author}
              </footer>
            </blockquote>
          ))}
        </div>
      </section>
    </div>
  );
}
