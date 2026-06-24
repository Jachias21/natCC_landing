import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { CONTACT } from "@/data/content";

export default function ServiciosPage() {
  const t = useTranslations("servicios");
  const items = t.raw("items") as Array<{
    title: string;
    description: string;
    tags: string[];
    price: string;
  }>;

  return (
    <div className="bg-cream-100">
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-12">
        <p className="text-xs font-sans font-medium uppercase tracking-widest text-terracotta-500 mb-4">
          {t("eyebrow")}
        </p>
        <h1 className="font-serif text-ink-900 text-4xl md:text-5xl leading-tight max-w-xl">
          {t("h1")}
        </h1>
        <p className="font-sans text-ink-600 mt-4 text-base">{t("subtitle")}</p>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((service, i) => (
            <article
              key={i}
              className={`flex flex-col justify-between p-8 rounded-2xl border border-border-soft bg-cream-50 ${
                i === 0 ? "md:col-span-2" : ""
              }`}
            >
              <div>
                <h2 className="font-serif text-ink-900 text-2xl mb-3">{service.title}</h2>
                <p className="font-sans text-ink-600 text-base leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-sans font-medium px-3 py-1 rounded-full bg-terracotta-100 text-terracotta-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-border-soft flex items-end justify-between">
                <div>
                  <p className="text-xs font-sans text-ink-600 uppercase tracking-wide mb-1">
                    {t("priceLabel")}
                  </p>
                  <p className="font-serif text-ink-900 text-3xl">{service.price}</p>
                </div>
                <a
                  href={CONTACT.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-forest-700 text-cream-50 font-sans text-sm px-5 py-2.5 rounded-full hover:bg-forest-900 transition-colors"
                >
                  {t("cta")}
                  <ArrowRight size={14} strokeWidth={1.5} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
