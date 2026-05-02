import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  BadgeCheck,
  Drama,
  Puzzle,
  Sparkles,
  Timer,
  ToyBrick,
} from "lucide-react";

import { directions, faqItems, plans, scheduleSlots } from "@/lib/data";
import { formatPrice } from "@/lib/format-price";
import { Section } from "@/components/home/section";
import { AnimatedSection } from "@/components/home/animated-section";

export const metadata: Metadata = {
  title: "Детский развивающий центр | ЦСН",
  description:
    "Английский, дошколята, актёрское мастерство и робототехника. Игровой подход, мягкая атмосфера и результат каждый месяц.",
};

const directionIcons = {
  english: Puzzle,
  preschool: Sparkles,
  acting: Drama,
  robotics: ToyBrick,
} as const;

export default function HomePage() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8">
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

      <AnimatedSection delay={0.04}>
        <Section
          title="Наши направления"
          subtitle="Минимум теории, максимум практики и живого участия ребёнка."
        >
          <div className="grid gap-4 md:grid-cols-2">
            {directions.map((direction) => {
              const Icon =
                directionIcons[direction.slug as keyof typeof directionIcons] ??
                Sparkles;
              return (
                <article
                  key={direction.slug}
                  className="rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-4 transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
                    <Icon size={18} />
                  </span>
                  <h3 className="mt-3 text-xl font-semibold text-slate-900">
                    {direction.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">
                    {direction.shortText}
                  </p>
                  <Link
                    href={`/directions/${direction.slug}`}
                    className="mt-3 inline-flex text-sm font-medium text-sky-600"
                  >
                    Подробнее →
                  </Link>
                </article>
              );
            })}
          </div>
        </Section>
      </AnimatedSection>

      <AnimatedSection delay={0.08}>
        <Section
          title="Почему родители выбирают нас"
          subtitle="Удобное пространство, продуманный формат и дружелюбная атмосфера."
        >
          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Один просторный кабинет с учебной, игровой зоной и местом для отдыха.",
              "Электронные замки, контроль доступа и датчики пожарной/охранной системы.",
              "Преподаватели-наставники: общение на равных, поддержка и комфортный темп.",
              "Игровой подход с квестами, викторинами и командными форматами.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-white p-4 text-slate-700"
              >
                <p className="inline-flex items-start gap-2">
                  <BadgeCheck
                    size={18}
                    className="mt-0.5 shrink-0 text-emerald-500"
                  />{" "}
                  {item}
                </p>
              </div>
            ))}
          </div>
        </Section>
      </AnimatedSection>

      <AnimatedSection delay={0.12}>
        <Section
          title="Формат занятий 1,5 часа"
          subtitle="Практика → перерыв → закрепление → рефлексия."
        >
          <div className="grid gap-3 md:grid-cols-4">
            {["Практика", "Перерыв", "Закрепление", "Рефлексия"].map(
              (step, index) => (
                <div
                  key={step}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center"
                >
                  <p className="text-xs font-semibold text-sky-600">
                    Этап {index + 1}
                  </p>
                  <p className="mt-1 font-semibold text-slate-900">{step}</p>
                </div>
              ),
            )}
          </div>
        </Section>
      </AnimatedSection>

      <AnimatedSection delay={0.16}>
        <Section
          title="Что вы увидите в результате занятий"
          subtitle="Каждый месяц ребёнок показывает понятный итог."
        >
          <div className="grid gap-4 md:grid-cols-[1.2fr_1fr]">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 text-slate-700">
              <p>
                Сценка, портфолио, видео, поделка, проект или мини-выступление.
                Мероприятие проходит раз в месяц и длится до 1,5 часов.
              </p>
              <p className="mt-3 inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-800">
                <Timer size={14} /> Организационный взнос — не более 2 000 ₽
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-sky-50 p-4">
              <p className="font-semibold text-slate-900">
                Результат — это не слова
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
                <li>видимый прогресс и уверенность ребёнка;</li>
                <li>понятная динамика для родителей;</li>
                <li>демонстрация навыков в живом формате.</li>
              </ul>
            </div>
          </div>
        </Section>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <Section
          title="График занятий"
          subtitle="Удобное расписание, которое легко совмещать с учебой и работой."
        >
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500">
                  <th className="pb-2">День</th>
                  <th className="pb-2">Время</th>
                  <th className="pb-2">Направление</th>
                  <th className="pb-2">Возраст</th>
                  <th className="pb-2">Педагог</th>
                </tr>
              </thead>
              <tbody>
                {scheduleSlots.map((slot) => (
                  <tr
                    key={slot.join("-")}
                    className="border-b border-slate-100 text-slate-700"
                  >
                    <td className="py-2">{slot[0]}</td>
                    <td>
                      {slot[1]}–{slot[2]}
                    </td>
                    <td>{slot[3]}</td>
                    <td>{slot[4]}</td>
                    <td>{slot[5]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>
      </AnimatedSection>

      <AnimatedSection delay={0.24}>
        <Section
          title="Абонементы"
          subtitle="Прозрачные цены и удобные пакеты."
        >
          <div className="grid gap-4 md:grid-cols-3">
            {plans.map((plan) => (
              <article
                key={plan.slug}
                className="rounded-2xl border border-slate-200 bg-white p-4"
              >
                {plan.isPopular ? (
                  <span className="inline-flex rounded-full bg-rose-100 px-2 py-1 text-xs font-semibold text-rose-700">
                    Популярный
                  </span>
                ) : null}
                <h3 className="mt-2 text-lg font-semibold text-slate-900">
                  {plan.title}
                </h3>
                <p className="text-sm text-slate-600">
                  {plan.lessonsCount} занятий
                </p>
                <p className="mt-2 text-2xl font-bold kids-gradient-text">
                  {formatPrice(plan.price)}
                </p>
              </article>
            ))}
          </div>
        </Section>
      </AnimatedSection>

      <AnimatedSection delay={0.28}>
        <Section title="FAQ">
          <div className="space-y-4">
            {faqItems.map((item) => (
              <article
                key={item.question}
                className="rounded-2xl border border-slate-200 bg-white p-4"
              >
                <h3 className="font-semibold text-slate-900">
                  {item.question}
                </h3>
                <p className="mt-1 text-slate-600">{item.answer}</p>
              </article>
            ))}
          </div>
        </Section>
      </AnimatedSection>
    </div>
  );
}
