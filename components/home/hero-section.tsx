import Image from "next/image";
import Link from "next/link";
import {
  CalendarCheck2,
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

const heroStats = [
  {
    icon: Users,
    text: "Группы до 8 детей",
  },
  {
    icon: Clock3,
    text: "Занятие 90 минут",
  },
  {
    icon: CalendarDays,
    text: "Пробное без обязательств",
  },
];

const highlights = [
  {
    icon: ShieldCheck,
    text: "Безопасная и доброжелательная среда",
    className: "text-blue-500",
  },
  {
    icon: UserRound,
    text: "Индивидуальный подход к каждому ребёнку",
    className: "text-rose-500",
  },
  {
    icon: Star,
    text: "Опытные педагоги, которые любят детей",
    className: "text-amber-500",
  },
  {
    icon: NotebookPen,
    text: "Регулярная обратная связь для родителей",
    className: "text-emerald-500",
  },
];

const floatingCards = [
  {
    icon: Users,
    text: (
      <>
        6 детей
        <br />в группе
      </>
    ),
    className: "top-8 right-5 bg-white/95",
    iconWrapperClassName: "bg-blue-100",
    iconClassName: "text-blue-500",
  },
  {
    icon: MessageCircleMore,
    text: (
      <>
        Обратная связь
        <br />
        родителям
      </>
    ),
    className: "top-[102px] right-4 bg-white/95",
    iconWrapperClassName: "bg-amber-100",
    iconClassName: "text-amber-500",
  },
  {
    icon: CalendarCheck2,
    text: (
      <>
        Сегодня:
        <br />
        робототехника
        <br />
        17:00
      </>
    ),
    className:
      "right-0 bottom-8 rounded-r-none border-r-4 border-amber-400 bg-emerald-50",
    iconWrapperClassName: "bg-emerald-100",
    iconClassName: "text-emerald-500",
  },
];

export function HeroSection() {
  return (
    <AnimatedSection>
      <section className="kids-card overflow-hidden bg-white">
        <div className="grid lg:min-h-[390px] lg:grid-cols-[0.95fr_1.05fr]">
          <HeroContent />
          <HeroImage />
        </div>

        <Highlights />
      </section>
    </AnimatedSection>
  );
}

function HeroContent() {
  return (
    <div className="flex flex-col justify-center px-4 py-6 sm:px-6 md:px-10 md:py-8">
      <p className="w-fit rounded-full bg-sky-100 px-3.5 py-1.5 text-xs font-semibold text-sky-600">
        Детям интересно, родителям спокойно
      </p>

      <h1 className="mt-4 max-w-[560px] text-[26px] font-extrabold leading-[1.15] tracking-[-0.025em] text-slate-900 sm:text-[30px] md:text-[34px]">
        Занятия для детей 4–12 лет: английский, театр, робототехника и
        подготовка к школе <span className="text-amber-400">♡</span>
      </h1>

      <p className="mt-4 max-w-[500px] text-sm font-medium leading-6 text-slate-500 md:text-[15px]">
        Учимся через игру, практику и проекты. Небольшие группы, спокойная
        атмосфера и понятная обратная связь для родителей каждый месяц.
      </p>

      <HeroStats />
      <HeroActions />
    </div>
  );
}

function HeroStats() {
  return (
    <div className="mt-5 grid grid-cols-3 gap-1.5 text-slate-500 sm:gap-2 lg:flex lg:flex-wrap lg:items-center lg:gap-x-5 lg:gap-y-3">
      {heroStats.map(({ icon: Icon, text }) => (
        <span
          key={text}
          className="flex min-h-[46px] items-center justify-center gap-1 rounded-2xl bg-slate-50 px-1.5 py-2 text-center text-[9px] font-bold leading-[1.15] ring-1 ring-slate-100 min-[380px]:gap-1.5 min-[380px]:px-2 min-[380px]:text-[10px] sm:min-h-0 sm:gap-2 sm:px-3 sm:py-2.5 sm:text-xs lg:bg-transparent lg:px-0 lg:py-0 lg:ring-0"
        >
          <Icon
            className="h-3.5 w-3.5 shrink-0 text-blue-500 sm:h-4 sm:w-4"
            aria-hidden="true"
          />
          <span>{text}</span>
        </span>
      ))}
    </div>
  );
}

function HeroActions() {
  return (
    <div className="mt-5 grid grid-cols-2 gap-2 sm:gap-3 lg:flex lg:flex-nowrap lg:items-center">
      <Link
        href="/prices"
        className="inline-flex min-h-11 items-center justify-center rounded-xl bg-blue-600 px-2 py-2 text-center text-[11px] font-semibold leading-4 text-white shadow-sm transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 min-[380px]:text-xs sm:min-h-12 sm:px-5 sm:text-sm sm:leading-5"
      >
        Записаться на пробное занятие
      </Link>

      <Link
        href="/schedule"
        className="inline-flex min-h-11 items-center justify-center rounded-xl border-2 border-blue-200 bg-white px-2 py-2 text-center text-[11px] font-semibold leading-4 text-blue-600 transition hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 min-[380px]:text-xs sm:min-h-12 sm:px-5 sm:text-sm sm:leading-5"
      >
        Посмотреть расписание
      </Link>
    </div>
  );
}

function HeroImage() {
  return (
    <div className="relative h-[240px] overflow-hidden bg-amber-50 sm:h-[280px] md:h-[320px] lg:h-[390px]">
      <Image
        src="/kids-hero.png"
        alt="Дети собирают робота с преподавателем"
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 55vw"
        className="object-cover object-center"
        priority
      />

      {floatingCards.map(
        ({
          icon: Icon,
          text,
          className,
          iconWrapperClassName,
          iconClassName,
        }) => (
          <div
            key={String(text)}
            className={`absolute hidden rounded-2xl px-3 py-2.5 shadow-lg md:block ${className}`}
          >
            <p className="flex items-center gap-3 text-[13px] font-bold leading-4 text-slate-700">
              <span
                className={`flex h-8 w-8 items-center justify-center rounded-xl ${iconWrapperClassName}`}
              >
                <Icon
                  className={`h-4 w-4 ${iconClassName}`}
                  aria-hidden="true"
                />
              </span>

              <span>{text}</span>
            </p>
          </div>
        ),
      )}
    </div>
  );
}

function Highlights() {
  return (
    <div className="mx-4 mb-4 mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm sm:mx-6 md:mx-10 md:mb-6 md:mt-0">
      <div className="grid grid-cols-2 md:grid-cols-4">
        {highlights.map(({ icon: Icon, text, className }, index) => {
          const isLeftColumn = index % 2 === 0;
          const isTopRow = index < 2;
          const isLastDesktopItem = index === highlights.length - 1;

          return (
            <div
              key={text}
              className={`flex min-h-[84px] items-center gap-2 px-2.5 py-3 text-left min-[380px]:px-3 sm:min-h-[92px] sm:px-4 md:min-h-0 md:gap-3 md:px-5 md:py-4 ${
                isTopRow ? "border-b border-slate-200 md:border-b-0" : ""
              } ${isLeftColumn ? "border-r border-slate-200" : ""} ${
                !isLastDesktopItem ? "md:border-r md:border-slate-200" : ""
              }`}
            >
              <Icon
                className={`h-6 w-6 shrink-0 ${className} sm:h-7 sm:w-7`}
                strokeWidth={1.8}
                aria-hidden="true"
              />

              <p className="text-[11px] font-bold leading-4 text-slate-700 min-[380px]:text-[12px] sm:text-[13px] sm:leading-5">
                {text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
