import { AnimatedSection } from "@/components/home/animated-section";
import { results } from "@/lib/data";

export function ResultsSection() {
  return (
    <AnimatedSection id="results" title="Results">
      <ul className="list-disc space-y-1 pl-6 text-zinc-700 dark:text-zinc-300">
        {results.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </AnimatedSection>
  );
}
