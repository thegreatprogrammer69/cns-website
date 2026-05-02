import { AnimatedSection } from "@/components/home/animated-section";
import { Section } from "@/components/home/section";

const lessonSteps = ["Практика", "Перерыв", "Закрепление", "Рефлексия"];

export function LessonFormatSection() {
  return (
    <AnimatedSection delay={0.12}>
      <Section
        title="Формат занятий 1,5 часа"
        subtitle="Практика → перерыв → закрепление → рефлексия."
      >
        <div className="grid gap-3 md:grid-cols-4">
          {lessonSteps.map((step, index) => (
            <div
              key={step}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center"
            >
              <p className="text-xs font-semibold text-sky-600">Этап {index + 1}</p>
              <p className="mt-1 font-semibold text-slate-900">{step}</p>
            </div>
          ))}
        </div>
      </Section>
    </AnimatedSection>
  );
}
