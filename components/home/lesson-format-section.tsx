import { AnimatedSection } from "@/components/home/animated-section";
import { lessonFormats } from "@/lib/data";

export function LessonFormatSection() {
  return (
    <AnimatedSection id="lesson-format" title="Lesson Format">
      <ul className="list-disc space-y-1 pl-6 text-zinc-700 dark:text-zinc-300">
        {lessonFormats.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </AnimatedSection>
  );
}
