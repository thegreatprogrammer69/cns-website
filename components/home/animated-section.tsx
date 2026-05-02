import type { ReactNode } from "react";

import { Section } from "@/components/home/section";

type AnimatedSectionProps = {
  id: string;
  title: string;
  children: ReactNode;
};

export function AnimatedSection({ id, title, children }: AnimatedSectionProps) {
  return (
    <div className="transition-all duration-300 hover:-translate-y-0.5">
      <Section id={id} title={title}>
        {children}
      </Section>
    </div>
  );
}
