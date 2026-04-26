import type { ReactNode } from "react";

export function Section({ title, subtitle, children }: { title: string; subtitle?: string; children: ReactNode }) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <h2 className="text-2xl font-semibold text-slate-900">{title}</h2>
      {subtitle ? <p className="mt-2 text-slate-600">{subtitle}</p> : null}
      <div className="mt-6">{children}</div>
    </section>
  );
}
