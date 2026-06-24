import Link from "next/link";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { CONTACT } from "@/data/content";

export default function Footer() {
  return (
    <footer className="bg-forest-900 text-cream-50/80 font-sans">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <p className="font-serif text-cream-50 text-lg">Natalia Chias Coughlan</p>
          <p className="text-sm mt-1 text-cream-50/60">
            Psicóloga sanitaria · Sexóloga clínica · Barcelona · Granollers
          </p>
        </div>

        <div className="flex items-center gap-6">
          <Link
            href={CONTACT.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-cream-50 transition-colors"
          >
            <FaInstagram size={18} />
          </Link>
          <Link
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-cream-50 transition-colors"
          >
            <FaLinkedinIn size={18} />
          </Link>
        </div>
      </div>

      <div className="border-t border-cream-50/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-cream-50/40">
          <span>© 2026 Natalia Chias Coughlan</span>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-cream-50/70 transition-colors">Aviso legal</Link>
            <Link href="#" className="hover:text-cream-50/70 transition-colors">Privacidad</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
