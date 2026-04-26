"use server";

export async function createOrderFromCart() {
  return { status: "PENDING_PAYMENT" as const };
}
