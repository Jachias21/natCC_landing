"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FAQ } from "@/data/content";

export default function FAQPage() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="bg-cream-100">
      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-12">
        <p className="text-xs font-sans font-medium uppercase tracking-widest text-terracotta-500 mb-4">
          Dudas frecuentes
        </p>
        <h1 className="font-serif text-ink-900 text-4xl md:text-5xl leading-tight">
          Preguntas habituales
        </h1>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 pb-24">
        <div className="space-y-2">
          {FAQ.map((item, i) => (
            <div
              key={i}
              className="border border-border-soft rounded-2xl bg-cream-50 overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-7 py-5 text-left"
              >
                <span className="font-sans text-ink-900 font-medium pr-4">
                  {item.question}
                </span>
                {open === i ? (
                  <Minus size={16} strokeWidth={1.5} className="shrink-0 text-terracotta-500" />
                ) : (
                  <Plus size={16} strokeWidth={1.5} className="shrink-0 text-ink-600" />
                )}
              </button>
              {open === i && (
                <div className="px-7 pb-6">
                  <p className="font-sans text-ink-600 leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
