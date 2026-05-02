import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  children: ReactNode;
};

export function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="w-full space-y-3">
      <h2 className="text-2xl font-semibold tracking-tight text-black dark:text-zinc-50">
        {title}
      </h2>
      {children}
    </section>
  );
}
