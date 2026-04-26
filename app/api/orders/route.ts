import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    {
      message: "MVP endpoint подготовлен. Создание заказа будет расширено с snapshot OrderItem и очисткой корзины.",
      status: "PENDING_PAYMENT",
    },
    { status: 202 },
  );
}
