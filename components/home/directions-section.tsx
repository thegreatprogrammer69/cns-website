import { AnimatedSection } from "@/components/home/animated-section";
import { directions } from "@/lib/data";

export function DirectionsSection() {
  return (
    <AnimatedSection id="directions" title="Directions">
      <ul className="list-disc space-y-1 pl-6 text-zinc-700 dark:text-zinc-300">
        {directions.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </AnimatedSection>
  );
}
