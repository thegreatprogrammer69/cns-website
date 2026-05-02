import { Heart, ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 text-sm text-slate-600 md:grid-cols-2">
        <div>
          <p className="inline-flex items-center gap-2 font-semibold text-slate-900">
            <Heart size={16} className="text-rose-500" /> Детям интересно,
            родителям спокойно
          </p>
          <p className="mt-2">
            ООО «Центр Семейного Наставничества», ИНН 7700000000
          </p>
          <p className="mt-1 inline-flex items-center gap-2 text-slate-500">
            <ShieldCheck size={14} /> Пространство с контролем доступа и
            безопасной средой.
          </p>
        </div>
        <div className="md:text-right">
          <p>г. Москва, ул. Тёплая, 12</p>
          <p>+7 (999) 123-45-67</p>
          <p>hello@kids-center.ru</p>
        </div>
      </div>
    </footer>
  );
}
