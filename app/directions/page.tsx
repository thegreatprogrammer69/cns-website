import { Metadata } from "next";
import Link from "next/link";
import { directions } from "@/lib/data";

export const metadata: Metadata = {
  title: "Направления",
  description: "Английский, дошколята, актёрское мастерство и робототехника для детей.",
};

export default function DirectionsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="text-3xl font-bold">Направления</h1>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {directions.map((d) => (
          <article key={d.slug} className="rounded-2xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold">{d.title}</h2>
            <p className="mt-2 text-slate-600">{d.description}</p>
            <p className="mt-2 text-sm text-slate-500">Возраст: {d.ageGroup}</p>
            <p className="text-sm text-slate-500">Формат: {d.format}</p>
            <p className="mt-2 text-sm">Результат: {d.parentResult}</p>
            <div className="mt-4 flex gap-3">
              <Link href="/prices" className="rounded-full bg-sky-500 px-4 py-2 text-sm text-white">Выбрать абонемент</Link>
              <Link href={`/directions/${d.slug}`} className="rounded-full border border-slate-300 px-4 py-2 text-sm">Подробнее</Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
