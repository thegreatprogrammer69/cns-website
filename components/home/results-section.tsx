import { Timer } from "lucide-react";

import { AnimatedSection } from "@/components/home/animated-section";
import { Section } from "@/components/home/section";

export function ResultsSection() {
  return (
    <AnimatedSection delay={0.16}>
      <Section
        title="Что вы увидите в результате занятий"
        subtitle="Каждый месяц ребёнок показывает понятный итог."
      >
        <div className="grid gap-4 md:grid-cols-[1.2fr_1fr]">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 text-slate-700">
            <p>
              Сценка, портфолио, видео, поделка, проект или мини-выступление.
              Мероприятие проходит раз в месяц и длится до 1,5 часов.
            </p>
            <p className="mt-3 inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-800">
              <Timer size={14} /> Организационный взнос — не более 2 000 ₽
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-sky-50 p-4">
            <p className="font-semibold text-slate-900">Результат — это не слова</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
              <li>видимый прогресс и уверенность ребёнка;</li>
              <li>понятная динамика для родителей;</li>
              <li>демонстрация навыков в живом формате.</li>
            </ul>
          </div>
        </div>
      </Section>
    </AnimatedSection>
  );
}
