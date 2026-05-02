import { BadgeCheck } from "lucide-react";

import { AnimatedSection } from "@/components/home/animated-section";
import { Section } from "@/components/home/section";

const benefits = [
  "Один просторный кабинет с учебной, игровой зоной и местом для отдыха.",
  "Электронные замки, контроль доступа и датчики пожарной/охранной системы.",
  "Преподаватели-наставники: общение на равных, поддержка и комфортный темп.",
  "Игровой подход с квестами, викторинами и командными форматами.",
];

export function BenefitsSection() {
  return (
    <AnimatedSection delay={0.08}>
      <Section
        title="Почему родители выбирают нас"
        subtitle="Удобное пространство, продуманный формат и дружелюбная атмосфера."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {benefits.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-200 bg-white p-4 text-slate-700"
            >
              <p className="inline-flex items-start gap-2">
                <BadgeCheck size={18} className="mt-0.5 shrink-0 text-emerald-500" /> {item}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </AnimatedSection>
  );
}
