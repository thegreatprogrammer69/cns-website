import Link from "next/link";
import { Drama, Puzzle, Sparkles, ToyBrick } from "lucide-react";

import { AnimatedSection } from "@/components/home/animated-section";
import { Section } from "@/components/home/section";
import { directions } from "@/lib/data";

const directionIcons = {
  english: Puzzle,
  preschool: Sparkles,
  acting: Drama,
  robotics: ToyBrick,
} as const;

export function DirectionsSection() {
  return (
    <AnimatedSection delay={0.04}>
      <Section
        title="Наши направления"
        subtitle="Минимум теории, максимум практики и живого участия ребёнка."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {directions.map((direction) => {
            const Icon =
              directionIcons[direction.slug as keyof typeof directionIcons] ??
              Sparkles;
            return (
              <article
                key={direction.slug}
                className="rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-4 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
                  <Icon size={18} />
                </span>
                <h3 className="mt-3 text-xl font-semibold text-slate-900">
                  {direction.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {direction.shortText}
                </p>
                <Link
                  href={`/directions/${direction.slug}`}
                  className="mt-3 inline-flex text-sm font-medium text-sky-600"
                >
                  Подробнее →
                </Link>
              </article>
            );
          })}
        </div>
      </Section>
    </AnimatedSection>
  );
}
