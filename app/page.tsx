import Link from "next/link";
import { Metadata } from "next";

import { directions, faqItems, plans, scheduleSlots } from "@/lib/data";
import { formatPrice } from "@/lib/format-price";
import { Section } from "@/components/home/section";

export const metadata: Metadata = {
  title: "Детский развивающий центр | Kids Center",
  description:
    "Английский, дошколята, актёрское мастерство и робототехника. Занятия по 1,5 часа, игровой подход и понятный ежемесячный результат.",
};

export default function HomePage() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8">
      <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-amber-50 via-sky-50 to-emerald-50 p-8">
        <p className="inline-flex rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-700">Детям интересно, родителям спокойно</p>
        <h1 className="mt-4 max-w-2xl text-4xl font-bold text-slate-900">Современный детский центр с тёплой атмосферой и видимым результатом каждый месяц</h1>
        <p className="mt-4 max-w-2xl text-slate-700">
          Занятия по 1,5 часа: практика, перерыв, закрепление и рефлексия. Без давления и скучной теории — с заботой, игрой и уверенностью в результате.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/prices" className="rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-white">Записаться на пробное</Link>
          <Link href="/schedule" className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800">Посмотреть расписание</Link>
        </div>
      </section>

      <Section title="Направления" subtitle="Минимум теории, максимум практики.">
        <div className="grid gap-4 md:grid-cols-2">
          {directions.map((direction) => (
            <article key={direction.slug} className="rounded-2xl border border-slate-200 p-4">
              <h3 className="text-xl font-semibold text-slate-900">{direction.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{direction.shortText}</p>
              <Link href={`/directions/${direction.slug}`} className="mt-3 inline-flex text-sm font-medium text-sky-600">Подробнее →</Link>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Преимущества центра" subtitle="Безопасное пространство, наставники и удобный формат для всей семьи.">
        <ul className="grid list-disc gap-3 pl-6 text-slate-700 md:grid-cols-2">
          <li>Один просторный кабинет с зонами обучения, игр и отдыха.</li>
          <li>Электронные замки, контроль доступа и датчики безопасности.</li>
          <li>Преподаватели-наставники и комфортный темп без давления.</li>
          <li>Удобный график, который легко совмещать со школой и работой.</li>
        </ul>
      </Section>

      <Section title="Что вы увидите в результате занятий" subtitle="Каждый месяц ребёнок показывает конкретный итог, а не только “мы ходим на занятия”.">
        <p className="text-slate-700">Сценка, портфолио, видео, поделка, проект или мини-выступление. Мероприятия проходят 1 раз в месяц и длятся не более 1,5 часов. Организационный взнос — до 2 000 ₽ или участие в рамках абонемента.</p>
      </Section>

      <Section title="График занятий" subtitle="Адаптированный формат с понятной структурой по дням недели.">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500">
                <th className="pb-2">День</th><th className="pb-2">Время</th><th className="pb-2">Направление</th><th className="pb-2">Возраст</th><th className="pb-2">Педагог</th>
              </tr>
            </thead>
            <tbody>
              {scheduleSlots.map((slot) => (
                <tr key={slot.join("-")} className="border-b border-slate-100">
                  <td className="py-2">{slot[0]}</td><td>{slot[1]}–{slot[2]}</td><td>{slot[3]}</td><td>{slot[4]}</td><td>{slot[5]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section title="Абонементы и цены">
        <div className="grid gap-4 md:grid-cols-3">
          {plans.map((plan) => (
            <div key={plan.slug} className="rounded-2xl border border-slate-200 p-4">
              <p className="text-sm text-slate-500">{plan.lessonsCount} занятий</p>
              <h3 className="text-lg font-semibold">{plan.title}</h3>
              <p className="mt-2 text-2xl font-bold">{formatPrice(plan.price)}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="FAQ">
        <div className="space-y-4">
          {faqItems.map((item) => (
            <article key={item.question}>
              <h3 className="font-semibold text-slate-900">{item.question}</h3>
              <p className="text-slate-600">{item.answer}</p>
            </article>
          ))}
        </div>
      </Section>
    </div>
  );
}
