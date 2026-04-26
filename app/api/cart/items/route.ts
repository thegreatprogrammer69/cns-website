import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    {
      message:
        "MVP endpoint подготовлен. Добавление в корзину для авторизованного пользователя будет реализовано через server actions с проверкой владельца ребёнка.",
    },
    { status: 202 },
  );
}
