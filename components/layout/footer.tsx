export function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-4 px-4 py-8 text-sm text-slate-600 md:grid-cols-2">
        <div>
          <p className="font-semibold text-slate-900">Детям интересно, родителям спокойно.</p>
          <p>ООО «Kids Center», ИНН 7700000000</p>
        </div>
        <div className="md:text-right">
          <p>г. Москва, ул. Тёплая, 12</p>
          <p>+7 (999) 123-45-67 · hello@kids-center.ru</p>
        </div>
      </div>
    </footer>
  );
}
