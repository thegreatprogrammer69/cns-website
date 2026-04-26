"use server";

import { profileSchema } from "@/lib/validators";

export async function updateProfile(data: unknown) {
  return profileSchema.parse(data);
}
