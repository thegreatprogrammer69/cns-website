"use server";

import { guardianSchema } from "@/lib/validators";

export async function saveGuardian(data: unknown) {
  return guardianSchema.parse(data);
}
