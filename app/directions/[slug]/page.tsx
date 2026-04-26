import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

import { directions } from "@/lib/data";

export function generateStaticParams() {
  return directions.map((d) => ({ slug: d.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const direction = directions.find((item) => item.slug === params.slug);
  return {
    title: direction ? direction.title : "Направление",
    description: direction?.shortText,
  };
}

export default function DirectionDetails({ params }: { params: { slug: string } }) {
  const direction = directions.find((item) => item.slug === params.slug);
  if (!direction) return notFound();

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="text-3xl font-bold">{direction.title}</h1>
      <p className="mt-4 text-slate-700">{direction.description}</p>
      <ul className="mt-4 list-disc space-y-1 pl-6 text-slate-700">
        {direction.skills.map((skill) => (
          <li key={skill}>Развиваем: {skill}</li>
        ))}
      </ul>
      <div className="mt-6 flex gap-3">
        <Link href="/prices" className="rounded-full bg-sky-500 px-5 py-3 text-sm font-medium text-white">Выбрать абонемент</Link>
        <Link href="/contacts" className="rounded-full border border-slate-300 px-5 py-3 text-sm font-medium">Записаться</Link>
      </div>
    </div>
  );
}
