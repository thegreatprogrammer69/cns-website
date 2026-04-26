import type { Metadata } from "next";

import { scheduleSlots } from "@/lib/data";

export const metadata: Metadata = {
  title: "Расписание",
  description: "Расписание занятий детского развивающего центра.",
};

export default function SchedulePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="text-3xl font-bold">Расписание</h1>
      <div className="mt-6 hidden overflow-x-auto rounded-2xl border border-slate-200 bg-white p-4 md:block">
        <table className="min-w-full text-left text-sm">
          <thead>
            <tr className="border-b border-slate-200 text-slate-500">
              <th className="pb-2">День</th><th>Начало</th><th>Окончание</th><th>Направление</th><th>Возраст</th><th>Педагог</th><th>Комментарий</th>
            </tr>
          </thead>
          <tbody>
            {scheduleSlots.map((slot) => (
              <tr key={slot.join("-")} className="border-b border-slate-100">
                {slot.map((value) => (
                  <td key={`${slot[0]}-${value}`} className="py-2">{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-6 space-y-3 md:hidden">
        {scheduleSlots.map((slot) => (
          <article key={slot.join("-")} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm">
            <p className="font-semibold">{slot[0]} · {slot[1]}–{slot[2]}</p>
            <p>{slot[3]} · {slot[4]}</p>
            <p className="text-slate-600">{slot[5]} · {slot[6]}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
