import { AnimatedSection } from "@/components/home/animated-section";
import { faqs } from "@/lib/data";

export function FaqSection() {
  return (
    <AnimatedSection id="faq" title="FAQ">
      <div className="space-y-3">
        {faqs.map((faq) => (
          <article key={faq.question}>
            <h3 className="font-semibold text-black dark:text-zinc-100">{faq.question}</h3>
            <p className="text-zinc-600 dark:text-zinc-400">{faq.answer}</p>
          </article>
        ))}
      </div>
    </AnimatedSection>
  );
}
