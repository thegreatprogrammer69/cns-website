import { AnimatedSection } from "@/components/home/animated-section";
import { Section } from "@/components/home/section";
import { scheduleSlots } from "@/lib/data";

export function ScheduleSection() {
  return (
    <AnimatedSection delay={0.2}>
      <Section
        title="График занятий"
        subtitle="Удобное расписание, которое легко совмещать с учебой и работой."
      >
        <div className="hidden overflow-x-auto md:block">
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
                <tr key={slot.join("-")} className="border-b border-slate-100 text-slate-700">
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
        <div className="space-y-3 md:hidden">
          {scheduleSlots.map((slot) => (
            <article key={slot.join("-")} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm shadow-sm">
              <p className="font-semibold text-slate-800">{slot[0]} · {slot[1]}–{slot[2]}</p>
              <p className="mt-1 text-slate-700">{slot[3]} · {slot[4]}</p>
              <p className="mt-1 text-slate-600">{slot[5]}</p>
            </article>
          ))}
        </div>
      </Section>
    </AnimatedSection>
  );
}
