import { useTranslations } from "next-intl";
import { Calendar, Mail, MessageCircle } from "lucide-react";
import { CONTACT } from "@/data/content";

export default function ContactoPage() {
  const t = useTranslations("contacto");

  return (
    <div className="bg-cream-100">
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-12">
        <p className="text-xs font-sans font-medium uppercase tracking-widest text-terracotta-500 mb-4">
          {t("eyebrow")}
        </p>
        <h1 className="font-serif text-ink-900 text-4xl md:text-5xl leading-tight max-w-lg">
          {t("h1Part1")} <em>{t("h1Italic")}</em>
        </h1>
        <p className="font-sans text-ink-600 mt-4 text-base max-w-md">{t("subtitle")}</p>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <a
              href={CONTACT.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 p-6 rounded-2xl border border-border-soft bg-cream-50 hover:bg-cream-100 transition-colors group"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-forest-100">
                <Calendar size={18} strokeWidth={1.5} className="text-forest-700" />
              </div>
              <div>
                <p className="text-xs font-sans font-medium uppercase tracking-widest text-terracotta-500 mb-0.5">
                  {t("cita.label")}
                </p>
                <p className="font-sans text-ink-900 font-medium">{t("cita.cta")}</p>
              </div>
            </a>

            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-5 p-6 rounded-2xl border border-border-soft bg-cream-50 hover:bg-cream-100 transition-colors"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-forest-100">
                <Mail size={18} strokeWidth={1.5} className="text-forest-700" />
              </div>
              <div>
                <p className="text-xs font-sans font-medium uppercase tracking-widest text-terracotta-500 mb-0.5">
                  {t("email.label")}
                </p>
                <p className="font-sans text-ink-900 text-sm break-all">{CONTACT.email}</p>
              </div>
            </a>

            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 p-6 rounded-2xl border border-border-soft bg-cream-50 hover:bg-cream-100 transition-colors"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-forest-100">
                <MessageCircle size={18} strokeWidth={1.5} className="text-forest-700" />
              </div>
              <div>
                <p className="text-xs font-sans font-medium uppercase tracking-widest text-terracotta-500 mb-0.5">
                  {t("whatsapp.label")}
                </p>
                <p className="font-sans text-ink-900 font-medium">{CONTACT.whatsappDisplay}</p>
              </div>
            </a>
          </div>

          <div className="p-8 rounded-2xl border border-border-soft bg-cream-50">
            <h2 className="font-serif text-ink-900 text-2xl mb-6">{t("form.title")}</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-xs font-sans font-medium uppercase tracking-wide text-ink-600 mb-2">
                  {t("form.name")}
                </label>
                <input
                  type="text"
                  required
                  placeholder={t("form.namePlaceholder")}
                  className="w-full bg-cream-100 border border-border-soft rounded-xl px-4 py-3 font-sans text-ink-900 text-sm placeholder:text-ink-600/40 focus:outline-none focus:border-forest-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-sans font-medium uppercase tracking-wide text-ink-600 mb-2">
                  {t("form.email")}
                </label>
                <input
                  type="email"
                  required
                  placeholder="tu@email.com"
                  className="w-full bg-cream-100 border border-border-soft rounded-xl px-4 py-3 font-sans text-ink-900 text-sm placeholder:text-ink-600/40 focus:outline-none focus:border-forest-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-sans font-medium uppercase tracking-wide text-ink-600 mb-2">
                  {t("form.message")}
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder={t("form.messagePlaceholder")}
                  className="w-full bg-cream-100 border border-border-soft rounded-xl px-4 py-3 font-sans text-ink-900 text-sm placeholder:text-ink-600/40 focus:outline-none focus:border-forest-500 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-forest-700 text-cream-50 font-sans text-sm px-6 py-3 rounded-full hover:bg-forest-900 transition-colors"
              >
                {t("form.submit")}
              </button>
              <p className="text-xs font-sans text-ink-600/60 text-center">{t("form.legal")}</p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
