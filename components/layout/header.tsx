import Link from "next/link";

const nav = [
  ["Направления", "/directions"],
  ["Цены", "/prices"],
  ["Расписание", "/schedule"],
  ["Контакты", "/contacts"],
  ["Кабинет", "/account"],
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="font-semibold text-slate-900">
          Kids Center
        </Link>
        <nav className="hidden gap-5 text-sm md:flex">
          {nav.map(([label, href]) => (
            <Link key={href} href={href} className="text-slate-600 transition hover:text-slate-900">
              {label}
            </Link>
          ))}
        </nav>
        <Link href="/login" className="rounded-full bg-sky-500 px-4 py-2 text-sm font-medium text-white">
          Войти
        </Link>
      </div>
    </header>
  );
}
