"use client";

import Link from "next/link";
import { Menu, Sparkles, X } from "lucide-react";
import { useState } from "react";

const nav = [
  ["Направления", "/directions"],
  ["Цены", "/prices"],
  ["Расписание", "/schedule"],
  ["Контакты", "/contacts"],
  ["Личный кабинет", "/account"],
] as const;

export function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <Link
          href="/"
          className="inline-flex min-w-0 items-center gap-2 text-slate-900"
          onClick={() => setIsMobileNavOpen(false)}
        >
          <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-600">
            <Sparkles size={16} />
          </span>
          <span className="line-clamp-2 text-sm font-bold sm:text-base">
            Центр Семейного Наставничества
          </span>
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

        <div className="hidden md:block">
          <Link
            href="/login"
            className="rounded-full bg-sky-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-sky-600"
          >
            Войти
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:bg-slate-50 md:hidden"
          aria-expanded={isMobileNavOpen}
          aria-controls="mobile-nav"
          aria-label={isMobileNavOpen ? "Закрыть меню" : "Открыть меню"}
          onClick={() => setIsMobileNavOpen((prev) => !prev)}
        >
          {isMobileNavOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {isMobileNavOpen ? (
        <nav id="mobile-nav" className="border-t border-slate-200/70 px-4 py-3 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-2">
            {nav.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="rounded-xl px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-100"
                onClick={() => setIsMobileNavOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/login"
              className="mt-1 inline-flex items-center justify-center rounded-full bg-sky-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-sky-600"
              onClick={() => setIsMobileNavOpen(false)}
            >
              Войти
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
