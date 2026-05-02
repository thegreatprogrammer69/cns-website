import { AnimatedSection } from "@/components/home/animated-section";
import { scheduleItems } from "@/lib/data";

export function ScheduleSection() {
  return (
    <AnimatedSection id="schedule" title="Schedule">
      <ul className="list-disc space-y-1 pl-6 text-zinc-700 dark:text-zinc-300">
        {scheduleItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </AnimatedSection>
  );
}
