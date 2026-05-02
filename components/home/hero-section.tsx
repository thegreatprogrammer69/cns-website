import Image from "next/image";
import Link from "next/link";
import {
  CalendarDays,
  Clock3,
  MessageCircleMore,
  NotebookPen,
  ShieldCheck,
  Star,
  UserRound,
  Users,
} from "lucide-react";

import { AnimatedSection } from "@/components/home/animated-section";

const stats = [
  { icon: Users, text: "Группы до 8 детей" },
  { icon: Clock3, text: "Занятие 90 минут" },
  { icon: CalendarDays, text: "Пробное без обязательств" },
];

const highlights = [
  { icon: ShieldCheck, text: "Безопасная и доброжелательная среда", color: "text-blue-500" },
  { icon: UserRound, text: "Индивидуальный подход к каждому ребёнку", color: "text-rose-500" },
  { icon: Star, text: "Опытные педагоги, которые любят детей", color: "text-amber-500" },
  { icon: NotebookPen, text: "Регулярная обратная связь для родителей", color: "text-emerald-500" },
];

export function HeroSection() {
  return (
    <AnimatedSection>
      <section className="kids-card overflow-hidden">
        <div className="grid items-stretch md:grid-cols-[1.05fr_1fr]">
          <div className="p-6 md:p-10">
            <p className="inline-flex rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
              Детям интересно, родителям спокойно
            </p>
            <h1 className="mt-5 text-4xl leading-tight font-extrabold text-slate-900 md:text-5xl">
              Занятия для детей 4–12 лет: английский, театр, робототехника и
              подготовка к школе 💛
            </h1>
            <p className="mt-5 max-w-xl text-lg text-slate-600">
              Учимся через игру, практику и проекты. Небольшие группы,
              спокойная атмосфера и понятная обратная связь для родителей
              каждый месяц.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/prices"
                className="rounded-xl bg-blue-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-blue-700"
              >
                Записаться на пробное занятие
              </Link>
              <Link
                href="/schedule"
                className="rounded-xl border-2 border-blue-200 bg-white px-6 py-3 text-base font-semibold text-blue-600 transition hover:bg-blue-50"
              >
                Посмотреть расписание
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-slate-600">
              {stats.map(({ icon: Icon, text }) => (
                <span key={text} className="inline-flex items-center gap-2 text-sm font-medium">
                  <Icon className="h-4 w-4 text-blue-500" />
                  {text}
                </span>
              ))}
            </div>
          </div>

          <div className="relative flex min-h-[320px] items-end justify-end bg-amber-50">
            <Image
              src="/kids-hero.png"
              alt="Дети собирают робота с преподавателем"
              width={860}
              height={620}
              className="h-full w-full object-cover"
              priority
            />
            <div className="absolute right-4 bottom-6 flex w-52 flex-col gap-3 md:right-6">
              <div className="rounded-2xl bg-white/95 p-3 shadow-lg">
                <p className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <Users className="h-4 w-4 text-blue-500" /> 6 детей в группе
                </p>
              </div>
              <div className="rounded-2xl bg-white/95 p-3 shadow-lg">
                <p className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <MessageCircleMore className="h-4 w-4 text-amber-500" /> Обратная связь
                  родителям
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-0 border-t border-slate-200/80 md:grid-cols-4">
          {highlights.map(({ icon: Icon, text, color }) => (
            <div
              key={text}
              className="flex items-center gap-3 border-b border-slate-200/80 p-5 md:border-r md:border-b-0"
            >
              <Icon className={`h-6 w-6 ${color}`} />
              <p className="text-sm font-medium text-slate-700">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </AnimatedSection>
  );
}
