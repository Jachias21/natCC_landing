import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { CONTACT } from "@/data/content";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-forest-900 text-cream-50/80 font-sans">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <p className="font-serif text-cream-50 text-lg">Natalia Chias Coughlan</p>
          <p className="text-sm mt-1 text-cream-50/60">{t("subtitle")}</p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={CONTACT.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-cream-50 transition-colors"
          >
            <FaInstagram size={18} />
          </a>
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-cream-50 transition-colors"
          >
            <FaLinkedinIn size={18} />
          </a>
        </div>
      </div>

      <div className="border-t border-cream-50/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-cream-50/40">
          <span>{t("copy")}</span>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-cream-50/70 transition-colors">{t("legal")}</Link>
            <Link href="#" className="hover:text-cream-50/70 transition-colors">{t("privacy")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
