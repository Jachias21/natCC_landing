"use client";

import { useTranslations, useLocale } from "next-intl";
import { usePathname, useRouter, Link } from "@/i18n/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { CONTACT } from "@/data/content";

const LOCALES = [
  { code: "es", label: "ES" },
  { code: "ca", label: "CAT" },
  { code: "en", label: "EN" },
];

export default function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { key: "enfoque", href: "/enfoque" },
    { key: "servicios", href: "/servicios" },
    { key: "sobreMi", href: "/sobre-mi" },
    { key: "opiniones", href: "/opiniones" },
    { key: "faq", href: "/faq" },
    { key: "contacto", href: "/contacto" },
  ] as const;

  function switchLocale(newLocale: string) {
    router.replace(pathname, { locale: newLocale });
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream-100/90 backdrop-blur-sm border-b border-border-soft">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-serif text-ink-900 text-lg leading-tight">
          Natalia <span className="text-ink-600">Chias Coughlan</span>
        </Link>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-sans transition-colors ${
                pathname === link.href
                  ? "text-forest-700 font-medium"
                  : "text-ink-600 hover:text-ink-900"
              }`}
            >
              {t(link.key)}
            </Link>
          ))}
        </nav>

        {/* Switcher de idioma + CTA desktop */}
        <div className="hidden md:flex items-center gap-5">
          <div className="flex items-center gap-1">
            {LOCALES.map((loc, i) => (
              <span key={loc.code} className="flex items-center">
                {i > 0 && <span className="text-border-soft mx-1 text-xs select-none">·</span>}
                <button
                  onClick={() => switchLocale(loc.code)}
                  className={`text-xs font-sans transition-colors ${
                    locale === loc.code
                      ? "text-ink-900 font-medium"
                      : "text-ink-600 hover:text-ink-900"
                  }`}
                >
                  {loc.label}
                </button>
              </span>
            ))}
          </div>
          <a
            href={CONTACT.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-forest-700 text-cream-50 text-sm font-sans px-5 py-2.5 rounded-full hover:bg-forest-900 transition-colors"
          >
            {t("reservar")}
          </a>
        </div>

        {/* Menú mobile */}
        <button
          className="md:hidden text-ink-900 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          {menuOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Drawer mobile */}
      {menuOpen && (
        <div className="md:hidden bg-cream-100 border-t border-border-soft px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-base font-sans ${
                pathname === link.href ? "text-forest-700 font-medium" : "text-ink-600"
              }`}
            >
              {t(link.key)}
            </Link>
          ))}

          {/* Switcher idioma mobile */}
          <div className="flex items-center gap-3 pt-2 border-t border-border-soft">
            {LOCALES.map((loc) => (
              <button
                key={loc.code}
                onClick={() => { switchLocale(loc.code); setMenuOpen(false); }}
                className={`text-sm font-sans transition-colors ${
                  locale === loc.code ? "text-ink-900 font-medium" : "text-ink-600"
                }`}
              >
                {loc.label}
              </button>
            ))}
          </div>

          <a
            href={CONTACT.calendly}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mt-1 bg-forest-700 text-cream-50 text-sm font-sans px-6 py-3 rounded-full text-center hover:bg-forest-900 transition-colors"
          >
            {t("reservar")}
          </a>
        </div>
      )}
    </header>
  );
}
