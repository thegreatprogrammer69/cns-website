import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { directions } from "@/lib/data";
import { AnimatedSection } from "@/components/home/animated-section";

export const metadata: Metadata = {
  title: "Направления",
  description: "Английский, дошколята, актёрское мастерство и робототехника для детей.",
};

export default function DirectionsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <AnimatedSection>
        <div className="kids-card p-6 md:p-8">
          <h1 className="text-3xl font-bold">Направления центра</h1>
          <p className="mt-2 text-slate-600">Выбирайте программу по интересам ребёнка — обучение через практику и игру.</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {directions.map((d, idx) => (
              <AnimatedSection key={d.slug} delay={0.03 * (idx + 1)}>
                <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                  <h2 className="text-xl font-semibold">{d.title}</h2>
                  <p className="mt-2 text-slate-600">{d.description}</p>
                  <p className="mt-2 text-sm text-slate-500">Возраст: {d.ageGroup}</p>
                  <p className="text-sm text-slate-500">Формат: {d.format}</p>
                  <p className="mt-2 text-sm">Результат: {d.parentResult}</p>
                  <div className="mt-4 flex gap-3">
                    <Link href="/prices" className="rounded-full bg-sky-500 px-4 py-2 text-sm text-white">
                      Выбрать абонемент
                    </Link>
                    <Link href={`/directions/${d.slug}`} className="inline-flex items-center gap-1 rounded-full border border-slate-300 px-4 py-2 text-sm">
                      Подробнее <ArrowRight size={14} />
                    </Link>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
