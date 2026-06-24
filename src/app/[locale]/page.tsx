import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Calendar, ArrowRight } from "lucide-react";
import { CONTACT } from "@/data/content";

export default function Home() {
  const t = useTranslations("home");

  return (
    <>
      {/* Hero */}
      <section className="flex items-center bg-cream-100">
        <div className="max-w-6xl mx-auto px-6 py-24 w-full grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-sans font-medium uppercase tracking-widest text-terracotta-500 mb-6">
              {t("eyebrow")}
            </p>
            <h1 className="font-serif text-ink-900 text-5xl md:text-6xl lg:text-7xl leading-[1.08] mb-6">
              {t("h1Line1")} <em>{t("h1Italic")}</em>
              <br />
              {t("h1Line2")}
            </h1>
            <p className="font-sans text-ink-600 text-lg md:text-xl leading-relaxed max-w-md mb-10">
              {t("subtitle")}
            </p>

            <div className="flex flex-wrap gap-3 mb-12">
              <a
                href={CONTACT.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-forest-700 text-cream-50 font-sans text-sm px-6 py-3 rounded-full hover:bg-forest-900 transition-colors"
              >
                <Calendar size={16} strokeWidth={1.5} />
                {t("ctaPrimary")}
              </a>
              <Link
                href="/enfoque"
                className="inline-flex items-center gap-2 border border-ink-900/20 text-ink-900 font-sans text-sm px-6 py-3 rounded-full hover:bg-cream-50 transition-colors"
              >
                {t("ctaSecondary")}
                <ArrowRight size={14} strokeWidth={1.5} />
              </Link>
            </div>

            <div className="flex flex-wrap gap-x-5 gap-y-1 text-xs font-sans text-ink-600 uppercase tracking-widest">
              <span>{t("pill1")}</span>
              <span className="text-border-soft select-none">·</span>
              <span>{t("pill2")}</span>
              <span className="text-border-soft select-none">·</span>
              <span>{t("pill3")}</span>
            </div>
          </div>

          {/* Bloque de marca */}
          <div className="hidden md:flex items-center justify-center">
            <div className="w-80 h-96 rounded-2xl bg-forest-700 flex items-center justify-center">
              <span className="font-serif text-cream-50/20 text-8xl select-none">N</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tarjetas de navegación */}
      <section className="bg-cream-50 border-t border-border-soft">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {(["servicios", "enfoque", "sobreMi"] as const).map((key) => (
              <Link
                key={key}
                href={key === "sobreMi" ? "/sobre-mi" : `/${key}`}
                className="group flex flex-col justify-between p-8 rounded-2xl border border-border-soft bg-cream-100 hover:bg-cream-50 hover:shadow-md hover:-translate-y-1 transition-all duration-200"
              >
                <div>
                  <p className="text-xs font-sans font-medium uppercase tracking-widest text-terracotta-500 mb-4">
                    {t(`cards.${key}.eyebrow`)}
                  </p>
                  <h2
                    className="font-serif text-ink-900 leading-snug text-xl md:text-2xl"
                  >
                    {t(`cards.${key}.title`)}
                  </h2>
                </div>
                <div className="mt-8 flex items-center gap-2 text-sm font-sans text-forest-700 group-hover:gap-3 transition-all">
                  <span>{t("cards.verMas")}</span>
                  <ArrowRight size={14} strokeWidth={1.5} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
