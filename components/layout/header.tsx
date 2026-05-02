import Link from "next/link";
import { Menu, Sparkles } from "lucide-react";

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
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <Link href="/" className="inline-flex min-w-0 items-center gap-2 text-slate-900">
          <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-600">
            <Sparkles size={16} />
          </span>
          <span className="truncate text-sm font-bold sm:text-base">Центр Семейного Наставничества</span>
        </Link>

        <nav className="hidden gap-5 text-sm md:flex">
          {nav.map(([label, href]) => (
            <Link key={href} href={href} className="text-slate-600 transition hover:text-sky-600">
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/login"
            className="rounded-full bg-sky-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-sky-600"
          >
            Войти
          </Link>
        </div>

        <details className="relative md:hidden">
          <summary className="flex list-none items-center justify-center rounded-full border border-slate-300 bg-white p-2 text-slate-700 marker:content-none">
            <Menu size={18} />
          </summary>
          <div className="absolute right-0 mt-2 w-64 rounded-2xl border border-slate-200 bg-white p-3 shadow-lg">
            <nav className="flex flex-col">
              {nav.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="rounded-xl px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-50"
                >
                  {label}
                </Link>
              ))}
              <Link
                href="/login"
                className="mt-2 rounded-full bg-sky-500 px-4 py-2 text-center text-sm font-medium text-white transition hover:bg-sky-600"
              >
                Войти
              </Link>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}
