import { AnimatedSection } from "@/components/home/animated-section";
import { benefits } from "@/lib/data";

export function BenefitsSection() {
  return (
    <AnimatedSection id="benefits" title="Benefits">
      <ul className="list-disc space-y-1 pl-6 text-zinc-700 dark:text-zinc-300">
        {benefits.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </AnimatedSection>
  );
}
