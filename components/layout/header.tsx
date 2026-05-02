import Link from "next/link";
import { Sparkles } from "lucide-react";

const nav = [
  ["Направления", "/directions"],
  ["Цены", "/prices"],
  ["Расписание", "/schedule"],
  ["Контакты", "/contacts"],
  ["Личный кабинет", "/account"],
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-slate-900"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 text-sky-600">
            <Sparkles size={16} />
          </span>
          <span className="font-bold">Центр Семейного Наставничества</span>
        </Link>
        <nav className="hidden gap-5 text-sm md:flex">
          {nav.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="text-slate-600 transition hover:text-sky-600"
            >
              {label}
            </Link>
          ))}
        </nav>
        <Link
          href="/login"
          className="rounded-full bg-sky-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-sky-600"
        >
          Войти
        </Link>
      </div>
    </header>
  );
}
