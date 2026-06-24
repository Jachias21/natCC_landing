"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, CONTACT } from "@/data/content";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream-100/90 backdrop-blur-sm border-b border-border-soft">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-serif text-ink-900 text-lg leading-tight">
          Natalia <span className="text-ink-600">Chias Coughlan</span>
        </Link>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-sans transition-colors ${
                pathname === link.href
                  ? "text-forest-700 font-medium"
                  : "text-ink-600 hover:text-ink-900"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA + idioma desktop */}
        <div className="hidden md:flex items-center gap-4">
          <span className="text-xs text-ink-600 font-sans tracking-widest uppercase">
            ES · CAT · EN
          </span>
          <Link
            href={CONTACT.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-forest-700 text-cream-50 text-sm font-sans px-5 py-2.5 rounded-full hover:bg-forest-900 transition-colors"
          >
            Reservar cita
          </Link>
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
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-base font-sans ${
                pathname === link.href ? "text-forest-700 font-medium" : "text-ink-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={CONTACT.calendly}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mt-2 bg-forest-700 text-cream-50 text-sm font-sans px-6 py-3 rounded-full text-center hover:bg-forest-900 transition-colors"
          >
            Reservar cita
          </Link>
        </div>
      )}
    </header>
  );
}
