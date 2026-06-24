import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { APPROACH_VALUES } from "@/data/content";

export const metadata = {
  title: "Enfoque — Natalia Chias Coughlan",
  description:
    "Terapia cognitivo-conductual con mirada integradora. Aceptación, incondicionalidad, cercanía y curiosidad como pilares del proceso terapéutico.",
};

export default function EnfoquePage() {
  return (
    <div className="bg-cream-100">
      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-12">
        <p className="text-xs font-sans font-medium uppercase tracking-widest text-terracotta-500 mb-4">
          El enfoque
        </p>
        <h1 className="font-serif text-ink-900 text-4xl md:text-5xl leading-tight max-w-2xl">
          Base cognitivo-conductual,{" "}
          <em>mirada integradora.</em>
        </h1>
      </section>

      {/* Descripción */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="max-w-2xl">
          <p className="font-sans text-ink-600 text-lg leading-relaxed">
            Trabajo desde la terapia cognitivo-conductual, incorporando
            herramientas de tercera generación y enfoques humanistas según las
            necesidades de cada persona. No hay un método único — hay una
            relación terapéutica construida a medida.
          </p>
        </div>
      </section>

      {/* Valores */}
      <section className="bg-cream-50 border-t border-border-soft">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {APPROACH_VALUES.map((value, i) => (
              <div
                key={value.label}
                className="p-8 rounded-2xl border border-border-soft bg-cream-100"
              >
                <p className="font-sans text-xs font-medium uppercase tracking-widest text-terracotta-500 mb-3">
                  0{i + 1}
                </p>
                <h2 className="font-serif text-ink-900 text-2xl mb-2">
                  {value.label}
                </h2>
                <p className="font-sans text-ink-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 bg-forest-700 text-cream-50 font-sans text-sm px-6 py-3 rounded-full hover:bg-forest-900 transition-colors"
            >
              Contacto
              <ArrowRight size={14} strokeWidth={1.5} />
            </Link>
            <Link
              href="/sobre-mi"
              className="inline-flex items-center gap-2 border border-ink-900/20 text-ink-900 font-sans text-sm px-6 py-3 rounded-full hover:bg-cream-50 transition-colors"
            >
              Sobre mí
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
