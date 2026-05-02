import Image from "next/image";
import Link from "next/link";

import { AnimatedSection } from "@/components/home/animated-section";

export function HeroSection() {
  return (
    <AnimatedSection>
      <section className="kids-card grid gap-6 overflow-hidden p-6 md:grid-cols-[1.15fr_1fr] md:p-8">
        <div>
          <p className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700">
            Детям интересно, родителям спокойно
          </p>
          <h1 className="mt-4 text-3xl leading-tight font-bold text-slate-900 md:text-5xl">
            Развивающий центр с тёплой атмосферой, где ребёнок учится через
            игру
          </h1>
          <p className="mt-4 max-w-xl text-slate-700">
            Занятия по 1,5 часа: практика, перерыв, закрепление и рефлексия.
            Без давления, с вниманием к каждому ребёнку и понятным результатом
            каждый месяц.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/prices"
              className="rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-600"
            >
              Записаться на пробное
            </Link>
            <Link
              href="/schedule"
              className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
            >
              Посмотреть расписание
            </Link>
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <div className="absolute -top-4 -left-4 h-20 w-20 rounded-full bg-amber-200/70 blur-xl" />
          <div className="absolute -right-6 bottom-6 h-24 w-24 rounded-full bg-emerald-200/70 blur-xl" />
          <Image
            src="/kids-hero.svg"
            alt="Иллюстрация детского центра"
            width={560}
            height={380}
            className="relative z-10 w-full max-w-md"
            priority
          />
        </div>
      </section>
    </AnimatedSection>
  );
}
