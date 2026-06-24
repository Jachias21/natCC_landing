import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowRight, MapPin, Languages } from "lucide-react";

export default function SobreMiPage() {
  const t = useTranslations("sobreMi");

  return (
    <div className="bg-cream-100">
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-12">
        <p className="text-xs font-sans font-medium uppercase tracking-widest text-terracotta-500 mb-4">
          {t("eyebrow")}
        </p>
        <h1 className="font-serif text-ink-900 text-4xl md:text-5xl leading-tight max-w-xl">
          {t("h1Part1")} <em>{t("h1Italic")}</em>
        </h1>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="font-sans text-ink-600 text-lg leading-relaxed">{t("body1")}</p>
            <p className="font-sans text-ink-600 text-base leading-relaxed">{t("body2")}</p>

            <div className="pt-4 space-y-4">
              <div className="flex items-center gap-3">
                <MapPin size={16} strokeWidth={1.5} className="text-terracotta-500 shrink-0" />
                <span className="font-sans text-ink-600 text-sm">{t("location")}</span>
              </div>
              <div className="flex items-center gap-3">
                <Languages size={16} strokeWidth={1.5} className="text-terracotta-500 shrink-0" />
                <span className="font-sans text-ink-600 text-sm">{t("languages")}</span>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 bg-forest-700 text-cream-50 font-sans text-sm px-6 py-3 rounded-full hover:bg-forest-900 transition-colors"
              >
                {t("cta")}
                <ArrowRight size={14} strokeWidth={1.5} />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] rounded-2xl bg-forest-700 flex items-center justify-center">
              <span className="font-serif text-cream-50/15 text-7xl select-none">N</span>
            </div>
            <div className="aspect-[3/4] rounded-2xl bg-terracotta-100 mt-8" />
          </div>
        </div>
      </section>
    </div>
  );
}
