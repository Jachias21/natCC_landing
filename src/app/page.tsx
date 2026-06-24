import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { CONTACT } from "@/data/content";

const NAV_CARDS = [
  {
    eyebrow: "Servicios",
    title: "Cómo puedo acompañarte",
    href: "/servicios",
    featured: true,
  },
  {
    eyebrow: "Enfoque",
    title: "Base cognitivo-conductual, mirada integradora.",
    href: "/enfoque",
    featured: false,
  },
  {
    eyebrow: "Sobre mí",
    title: "Acompañarte con rigor y humanidad.",
    href: "/sobre-mi",
    featured: false,
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[92vh] flex items-center bg-cream-100">
        <div className="max-w-6xl mx-auto px-6 py-24 w-full grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-sans font-medium uppercase tracking-widest text-terracotta-500 mb-6">
              Psicóloga Sanitaria · Terapeuta de Pareja · Sexóloga Clínica
            </p>
            <h1 className="font-serif text-ink-900 text-5xl md:text-6xl lg:text-7xl leading-[1.08] mb-6">
              Soy <em>Natalia,</em>
              <br />
              tu psicóloga.
            </h1>
            <p className="font-sans text-ink-600 text-lg md:text-xl leading-relaxed max-w-md mb-10">
              Un espacio seguro para escucharte, comprenderte y avanzar. Terapia
              individual, de pareja y sexología clínica en Barcelona, Granollers
              y online.
            </p>

            <div className="flex flex-wrap gap-3 mb-12">
              <Link
                href={CONTACT.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-forest-700 text-cream-50 font-sans text-sm px-6 py-3 rounded-full hover:bg-forest-900 transition-colors"
              >
                <Calendar size={16} strokeWidth={1.5} />
                Concertar sesión
              </Link>
              <Link
                href="/enfoque"
                className="inline-flex items-center gap-2 border border-ink-900/20 text-ink-900 font-sans text-sm px-6 py-3 rounded-full hover:bg-cream-50 transition-colors"
              >
                Conocer mi enfoque
                <ArrowRight size={14} strokeWidth={1.5} />
              </Link>
            </div>

            <div className="flex flex-wrap gap-x-5 gap-y-1 text-xs font-sans text-ink-600 uppercase tracking-widest">
              <span>Online y presencial</span>
              <span className="text-border-soft select-none">·</span>
              <span>Barcelona · Granollers</span>
              <span className="text-border-soft select-none">·</span>
              <span>ES · CAT · EN</span>
            </div>
          </div>

          {/* Placeholder foto */}
          <div className="hidden md:flex items-center justify-center">
            <div className="w-80 h-96 rounded-2xl bg-cream-200 border border-border-soft flex items-center justify-center">
              <p className="font-serif text-ink-600/40 text-sm italic text-center px-8">
                Foto de Natalia
                <br />
                pendiente
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tarjetas de navegación — grid asimétrico */}
      <section className="bg-cream-50 border-t border-border-soft">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {NAV_CARDS.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className={`group flex flex-col justify-between p-8 rounded-2xl border border-border-soft bg-cream-100 hover:bg-cream-50 transition-colors ${
                  card.featured ? "md:col-span-2" : ""
                }`}
              >
                <div>
                  <p className="text-xs font-sans font-medium uppercase tracking-widest text-terracotta-500 mb-4">
                    {card.eyebrow}
                  </p>
                  <h2
                    className={`font-serif text-ink-900 leading-snug ${
                      card.featured
                        ? "text-3xl md:text-4xl"
                        : "text-xl md:text-2xl"
                    }`}
                  >
                    {card.title}
                  </h2>
                </div>
                <div className="mt-8 flex items-center gap-2 text-sm font-sans text-forest-700 group-hover:gap-3 transition-all">
                  <span>Ver más</span>
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
