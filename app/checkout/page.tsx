export default function CheckoutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="text-3xl font-bold">Оформление заказа</h1>
      <div className="mt-6 rounded-2xl border border-amber-300 bg-amber-50 p-5">
        Оплата временно недоступна. Администратор свяжется с вами для подтверждения заказа.
      </div>
      <button type="button" disabled className="mt-4 rounded-full bg-slate-300 px-5 py-3 text-sm font-medium text-slate-600">
        Перейти к оплате
      </button>
    </div>
  );
}
