"use server";

import { childSchema } from "@/lib/validators";

export async function saveChild(data: unknown) {
  return childSchema.parse(data);
}
