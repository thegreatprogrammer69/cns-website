import Link from "next/link";
import { Menu, Sparkles, X } from "lucide-react";

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
      <div className="mx-auto max-w-6xl px-4 py-3">
        <div className="flex items-center justify-between gap-3">
          <Link href="/" className="inline-flex min-w-0 items-center gap-2 text-slate-900">
            <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-600">
              <Sparkles size={16} />
            </span>
            <span className="truncate text-sm font-bold sm:text-base">Центр Семейного Наставничества</span>
          </Link>

          <nav className="hidden items-center gap-5 text-sm md:flex">
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

          <details className="group md:hidden">
            <summary className="flex cursor-pointer list-none items-center justify-center rounded-full border border-slate-300 p-2 text-slate-700 transition hover:bg-slate-50">
              <Menu size={18} className="group-open:hidden" />
              <X size={18} className="hidden group-open:block" />
              <span className="sr-only">Открыть меню</span>
            </summary>
            <div className="absolute inset-x-0 top-full border-b border-slate-200 bg-white/95 px-4 py-4 shadow-sm backdrop-blur">
              <nav className="grid gap-2">
                {nav.map(([label, href]) => (
                  <Link
                    key={href}
                    href={href}
                    className="rounded-xl px-3 py-2 text-slate-700 transition hover:bg-slate-100"
                  >
                    {label}
                  </Link>
                ))}
                <Link
                  href="/login"
                  className="mt-1 rounded-xl bg-sky-500 px-3 py-2 text-center font-medium text-white transition hover:bg-sky-600"
                >
                  Войти
                </Link>
              </nav>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
