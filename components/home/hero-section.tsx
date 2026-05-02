import Image from "next/image";
import Link from "next/link";

import { AnimatedSection } from "@/components/home/animated-section";

export function HeroSection() {
  return (
    <AnimatedSection>
      <section className="relative overflow-hidden bg-white px-4 py-10 md:px-10 md:py-14">
        <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-[1.05fr_1fr]">
          <div className="relative z-10">
            <p className="inline-flex rounded-full bg-sky-100 px-4 py-2 text-sm font-bold text-blue-600">
              Детям интересно, родителям спокойно
            </p>

            <h1 className="mt-7 max-w-2xl text-4xl leading-[1.12] font-extrabold text-slate-950 md:text-5xl">
              Занятия для детей 4–12 лет: английский, театр, робототехника и
              подготовка к школе{" "}
              <span className="inline-block text-amber-400">♡</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Учимся через игру, практику и проекты. Небольшие группы, спокойная
              атмосфера и понятная обратная связь для родителей каждый месяц.
            </p>

            <div className="mt-7 flex flex-wrap gap-4">
              <Link
                href="/prices"
                className="rounded-xl bg-blue-600 px-7 py-4 text-sm font-bold text-white shadow-sm transition hover:bg-blue-700"
              >
                Записаться на пробное занятие
              </Link>

              <Link
                href="/schedule"
                className="rounded-xl border-2 border-blue-500 bg-white px-7 py-4 text-sm font-bold text-blue-600 transition hover:bg-blue-50"
              >
                Посмотреть расписание
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-semibold text-slate-500">
              <span>👥 Группы до 8 детей</span>
              <span>🕘 Занятие 90 минут</span>
              <span>🎁 Пробное без обязательств</span>
            </div>
          </div>

          <div className="relative min-h-[390px]">
            <div className="absolute inset-y-0 -left-12 w-[120%] rounded-l-[45%] bg-amber-50" />

            <Image
              src="/kids-hero.png"
              alt="Педагог занимается робототехникой с детьми"
              width={720}
              height={520}
              className="relative z-10 h-[390px] w-full rounded-l-[42%] object-cover md:h-[500px]"
              priority
            />

            <div className="absolute top-24 right-4 z-20 rounded-2xl bg-white px-4 py-3 shadow-lg">
              <div className="flex items-center gap-3">
                <span className="rounded-xl bg-blue-100 p-2 text-blue-600">
                  👥
                </span>
                <p className="text-sm font-bold text-slate-800">
                  6 детей
                  <br />
                  <span className="font-semibold">в группе</span>
                </p>
              </div>
            </div>

            <div className="absolute top-44 right-4 z-20 rounded-2xl bg-white px-4 py-3 shadow-lg">
              <div className="flex items-center gap-3">
                <span className="rounded-xl bg-amber-100 p-2 text-amber-500">
                  💬
                </span>
                <p className="text-sm font-bold text-slate-800">
                  Обратная связь
                  <br />
                  родителям
                </p>
              </div>
            </div>

            <div className="absolute right-4 bottom-28 z-20 rounded-2xl border-l-4 border-amber-400 bg-emerald-50 px-4 py-3 shadow-lg">
              <div className="flex items-center gap-3">
                <span className="rounded-xl bg-emerald-100 p-2 text-emerald-600">
                  🗓️
                </span>
                <p className="text-sm font-bold text-slate-800">
                  Сегодня:
                  <br />
                  робототехника
                  <br />
                  17:00
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-8 grid max-w-7xl gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm md:grid-cols-4">
          <Feature icon="🛡️" text="Безопасная и доброжелательная среда" />
          <Feature icon="♡" text="Индивидуальный подход к каждому ребёнку" />
          <Feature icon="☆" text="Опытные педагоги, которые любят детей" />
          <Feature icon="📋" text="Регулярная обратная связь для родителей" />
        </div>
      </section>
    </AnimatedSection>
  );
}

function Feature({ icon, text }: { icon: string; text: string }) {
  return (
    <div className="flex items-center gap-4 border-slate-100 px-2 md:border-r last:md:border-r-0">
      <span className="text-4xl text-blue-500">{icon}</span>
      <p className="text-sm font-bold leading-5 text-slate-700">{text}</p>
    </div>
  );
}
