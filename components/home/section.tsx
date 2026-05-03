import type { ReactNode } from "react";

export function Section({ title, subtitle, children }: { title: string; subtitle?: string; children: ReactNode }) {
  return (
    <section className="px-3 py-8 md:px-0 md:py-10">
      <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">{title}</h2>
      {subtitle ? <p className="mt-2 max-w-3xl text-slate-600">{subtitle}</p> : null}
      <div className="mt-6">{children}</div>
    </section>
  );
}
