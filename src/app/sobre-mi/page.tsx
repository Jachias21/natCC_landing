import Link from "next/link";
import { ArrowRight, MapPin, Languages } from "lucide-react";

export const metadata = {
  title: "Sobre mí — Natalia Chias Coughlan",
  description:
    "Psicóloga sanitaria, terapeuta de pareja y sexóloga clínica. Atención presencial en Barcelona y Granollers, y online.",
};

export default function SobreMiPage() {
  return (
    <div className="bg-cream-100">
      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-12">
        <p className="text-xs font-sans font-medium uppercase tracking-widest text-terracotta-500 mb-4">
          Sobre mí
        </p>
        <h1 className="font-serif text-ink-900 text-4xl md:text-5xl leading-tight max-w-xl">
          Acompañarte con <em>rigor y humanidad.</em>
        </h1>
      </section>

      {/* Contenido */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Texto */}
          <div className="space-y-6">
            <p className="font-sans text-ink-600 text-lg leading-relaxed">
              Soy psicóloga sanitaria, terapeuta de pareja y sexóloga clínica.
              Mi formación se enmarca dentro de la tradición
              cognitivo-conductual, con una mirada integradora que me permite
              adaptar el proceso terapéutico a cada persona.
            </p>
            <p className="font-sans text-ink-600 text-base leading-relaxed">
              Atiendo de manera presencial en Barcelona y Granollers, y también
              online para quienes prefieren la comodidad de su propio espacio.
            </p>

            <div className="pt-4 space-y-4">
              <div className="flex items-center gap-3">
                <MapPin size={16} strokeWidth={1.5} className="text-terracotta-500 shrink-0" />
                <span className="font-sans text-ink-600 text-sm">
                  Consulta en Barcelona · Granollers · Online
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Languages size={16} strokeWidth={1.5} className="text-terracotta-500 shrink-0" />
                <span className="font-sans text-ink-600 text-sm">
                  Atención en ES · CAT · EN
                </span>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 bg-forest-700 text-cream-50 font-sans text-sm px-6 py-3 rounded-full hover:bg-forest-900 transition-colors"
              >
                Contacto
                <ArrowRight size={14} strokeWidth={1.5} />
              </Link>
            </div>
          </div>

          {/* Placeholder fotos */}
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] rounded-2xl bg-cream-200 border border-border-soft flex items-center justify-center">
              <p className="font-serif text-ink-600/40 text-xs italic text-center px-4">
                Consulta Barcelona
              </p>
            </div>
            <div className="aspect-[3/4] rounded-2xl bg-cream-200 border border-border-soft mt-8 flex items-center justify-center">
              <p className="font-serif text-ink-600/40 text-xs italic text-center px-4">
                Espacio de espera
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
