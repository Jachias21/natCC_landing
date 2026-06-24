import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";

export default function EnfoquePage() {
  const t = useTranslations("enfoque");
  const values = t.raw("values") as Array<{ label: string; description: string }>;

  return (
    <div className="bg-cream-100">
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-12">
        <p className="text-xs font-sans font-medium uppercase tracking-widest text-terracotta-500 mb-4">
          {t("eyebrow")}
        </p>
        <h1 className="font-serif text-ink-900 text-4xl md:text-5xl leading-tight max-w-2xl">
          {t("h1Part1")} <em>{t("h1Italic")}</em>
        </h1>
        <p className="font-sans text-ink-600 text-lg leading-relaxed mt-6 max-w-2xl">
          {t("body")}
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-16">
        <div className="divide-y divide-border-soft border-t border-border-soft">
          {values.map((value, i) => (
            <div
              key={value.label}
              className="grid grid-cols-[3rem_1fr_1fr] md:grid-cols-[4rem_1fr_2fr] items-baseline gap-4 py-7"
            >
              <span className="font-sans text-sm font-medium text-terracotta-500 tabular-nums">
                0{i + 1}
              </span>
              <h2 className="font-serif text-ink-900 text-2xl">{value.label}</h2>
              <p className="font-sans text-ink-600 leading-relaxed text-right md:text-left">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-20 flex flex-wrap gap-3 border-t border-border-soft pt-10">
        <Link
          href="/contacto"
          className="inline-flex items-center gap-2 bg-forest-700 text-cream-50 font-sans text-sm px-6 py-3 rounded-full hover:bg-forest-900 transition-colors"
        >
          {t("ctaContacto")}
          <ArrowRight size={14} strokeWidth={1.5} />
        </Link>
        <Link
          href="/sobre-mi"
          className="inline-flex items-center gap-2 border border-ink-900/20 text-ink-900 font-sans text-sm px-6 py-3 rounded-full hover:bg-cream-50 transition-colors"
        >
          {t("ctaSobreMi")}
        </Link>
      </section>
    </div>
  );
}
