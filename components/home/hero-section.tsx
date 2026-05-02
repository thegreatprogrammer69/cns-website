import Image from "next/image";
import Link from "next/link";
import { CalendarCheck2, Clock3, HeartHandshake, Users, MessagesSquare, NotebookText, ShieldCheck, Heart, Star } from "lucide-react";

import { AnimatedSection } from "@/components/home/animated-section";

const highlights = [
  { icon: Users, text: "Группы до 8 детей" },
  { icon: Clock3, text: "Занятие 90 минут" },
  { icon: CalendarCheck2, text: "Пробное без обязательств" },
];

const cards = [
  { icon: Users, title: "6 детей", subtitle: "в группе", color: "text-sky-500" },
  { icon: MessagesSquare, title: "Обратная связь", subtitle: "родителям", color: "text-amber-500" },
  { icon: NotebookText, title: "Сегодня: робототехника", subtitle: "17:00", color: "text-emerald-500" },
];

const values = [
  { icon: ShieldCheck, text: "Безопасная и доброжелательная среда", color: "text-sky-500" },
  { icon: Heart, text: "Индивидуальный подход к каждому ребёнку", color: "text-rose-500" },
  { icon: Star, text: "Опытные педагоги, которые любят детей", color: "text-amber-500" },
  { icon: HeartHandshake, text: "Регулярная обратная связь для родителей", color: "text-emerald-500" },
];

export function HeroSection() {
  return (
    <AnimatedSection>
      <section className="overflow-hidden rounded-[28px] border border-slate-200 bg-white">
        <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <div className="px-6 py-8 md:px-10 md:py-12">
            <p className="inline-flex rounded-full bg-sky-100 px-4 py-1.5 text-sm font-semibold text-sky-700">
              Детям интересно, родителям спокойно
            </p>
            <h1 className="mt-5 text-4xl leading-tight font-bold text-slate-900 md:text-5xl">
              Занятия для детей 4–12 лет: английский, театр, робототехника и подготовка к школе 💛
            </h1>
            <p className="mt-5 max-w-xl text-lg text-slate-600">
              Учимся через игру, практику и проекты. Небольшие группы, спокойная атмосфера и понятная обратная
              связь для родителей каждый месяц.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/prices" className="rounded-xl bg-sky-500 px-6 py-3 text-base font-semibold text-white hover:bg-sky-600">
                Записаться на пробное занятие
              </Link>
              <Link href="/schedule" className="rounded-xl border border-sky-300 bg-white px-6 py-3 text-base font-semibold text-sky-600 hover:bg-sky-50">
                Посмотреть расписание
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-slate-600">
              {highlights.map(({ icon: Icon, text }) => (
                <p key={text} className="inline-flex items-center gap-2 text-sm font-medium">
                  <Icon size={17} className="text-sky-500" />
                  {text}
                </p>
              ))}
            </div>
          </div>

          <div className="relative min-h-[340px] lg:min-h-full">
            <Image src="/kids-hero.png" alt="Педагог и дети на занятии" fill className="object-cover" priority />
            <div className="absolute inset-y-0 left-0 hidden w-24 bg-gradient-to-r from-white to-transparent lg:block" />
            <div className="absolute right-4 bottom-4 flex w-[220px] flex-col gap-3 md:right-6 md:bottom-6">
              {cards.map(({ icon: Icon, title, subtitle, color }) => (
                <div key={title} className="rounded-2xl border border-slate-200 bg-white/95 p-3 shadow-sm backdrop-blur">
                  <p className="inline-flex items-center gap-2 text-sm font-semibold text-slate-800">
                    <Icon size={17} className={color} /> {title}
                  </p>
                  <p className="mt-0.5 pl-6 text-sm text-slate-600">{subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-2 border-t border-slate-200 bg-slate-50/50 p-4 md:grid-cols-2 lg:grid-cols-4">
          {values.map(({ icon: Icon, text, color }) => (
            <div key={text} className="flex items-center gap-3 rounded-xl bg-white p-3">
              <Icon className={color} size={22} />
              <p className="text-sm font-medium text-slate-700">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </AnimatedSection>
  );
}
