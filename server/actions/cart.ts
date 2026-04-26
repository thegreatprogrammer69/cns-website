"use server";

import { z } from "zod";

const addToCartSchema = z.object({
  planId: z.string().min(1),
  childId: z.string().min(1),
  quantity: z.number().int().positive().default(1),
});

export async function addToCart(input: z.infer<typeof addToCartSchema>) {
  return addToCartSchema.parse(input);
}
