import { AnimatedSection } from "@/components/home/animated-section";
import { Section } from "@/components/home/section";
import { faqItems } from "@/lib/data";

export function FaqSection() {
  return (
    <AnimatedSection delay={0.28}>
      <Section title="FAQ">
        <div className="space-y-4">
          {faqItems.map((item) => (
            <article
              key={item.question}
              className="rounded-2xl border border-slate-200 bg-white p-4"
            >
              <h3 className="font-semibold text-slate-900">{item.question}</h3>
              <p className="mt-1 text-slate-600">{item.answer}</p>
            </article>
          ))}
        </div>
      </Section>
    </AnimatedSection>
  );
}
