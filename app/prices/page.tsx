import type { Metadata } from "next";

import { AddToCartWithChild } from "@/components/prices/add-to-cart-with-child";
import { plans } from "@/lib/data";
import { formatPrice } from "@/lib/format-price";

export const metadata: Metadata = {
  title: "Цены и абонементы",
  description: "Абонементы детского центра: от пробного до расширенных пакетов.",
};

export default function PricesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="text-3xl font-bold">Абонементы и цены</h1>
      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan) => (
          <article key={plan.slug} className="rounded-3xl border border-slate-200 bg-white p-5">
            {plan.isPopular ? <p className="inline-flex rounded-full bg-amber-200 px-2 py-1 text-xs font-medium">Популярный</p> : null}
            <h2 className="mt-2 text-xl font-semibold">{plan.title}</h2>
            <p className="text-sm text-slate-600">{plan.lessonsCount} занятий</p>
            <p className="mt-2 text-2xl font-bold">{formatPrice(plan.price)}</p>
            <p className="text-sm text-slate-500">{formatPrice(Math.round(plan.price / plan.lessonsCount))} за занятие</p>
            <div className="mt-4">
              <AddToCartWithChild />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
