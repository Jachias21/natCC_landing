import { TESTIMONIALS } from "@/data/content";

export const metadata = {
  title: "Opiniones — Natalia Chias Coughlan",
  description: "Lo que cuentan quienes han pasado por consulta.",
};

export default function OpinionesPage() {
  return (
    <div className="bg-cream-100">
      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-12">
        <p className="text-xs font-sans font-medium uppercase tracking-widest text-terracotta-500 mb-4">
          Opiniones
        </p>
        <h1 className="font-serif text-ink-900 text-4xl md:text-5xl leading-tight max-w-xl">
          Lo que cuentan quienes han{" "}
          <em>pasado por consulta.</em>
        </h1>
      </section>

      {/* Testimonios */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <blockquote
              key={i}
              className={`flex flex-col justify-between p-8 rounded-2xl border border-border-soft bg-cream-50 ${
                i === 0 ? "md:col-span-2" : ""
              }`}
            >
              <p className="font-serif text-ink-900 text-xl md:text-2xl leading-snug italic">
                "{t.quote}"
              </p>
              <footer className="mt-8 text-xs font-sans font-medium uppercase tracking-widest text-terracotta-500">
                — {t.author}
              </footer>
            </blockquote>
          ))}
        </div>
      </section>
    </div>
  );
}
