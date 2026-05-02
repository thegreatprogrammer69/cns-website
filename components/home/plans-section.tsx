import { AnimatedSection } from "@/components/home/animated-section";
import { Section } from "@/components/home/section";
import { plans } from "@/lib/data";
import { formatPrice } from "@/lib/format-price";

export function PlansSection() {
  return (
    <AnimatedSection delay={0.24}>
      <Section title="Абонементы" subtitle="Прозрачные цены и удобные пакеты.">
        <div className="grid gap-4 md:grid-cols-3">
          {plans.map((plan) => (
            <article key={plan.slug} className="rounded-2xl border border-slate-200 bg-white p-4">
              {plan.isPopular ? (
                <span className="inline-flex rounded-full bg-rose-100 px-2 py-1 text-xs font-semibold text-rose-700">
                  Популярный
                </span>
              ) : null}
              <h3 className="mt-2 text-lg font-semibold text-slate-900">{plan.title}</h3>
              <p className="text-sm text-slate-600">{plan.lessonsCount} занятий</p>
              <p className="mt-2 text-2xl font-bold kids-gradient-text">{formatPrice(plan.price)}</p>
            </article>
          ))}
        </div>
      </Section>
    </AnimatedSection>
  );
}
