import { z } from "zod";

export const registerSchema = z
  .object({
    email: z.email("Введите корректный email"),
    password: z.string().min(8, "Минимум 8 символов"),
    confirmPassword: z.string().min(8, "Минимум 8 символов"),
  })
  .refine((value) => value.password === value.confirmPassword, {
    message: "Пароли должны совпадать",
    path: ["confirmPassword"],
  });

export const profileSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  middleName: z.string().optional(),
  phone: z.string().min(10),
  birthDate: z.string().min(1),
  address: z.string().min(5),
});

export const childSchema = z.object({
  fullName: z.string().min(2),
  birthDate: z.string().min(1),
});

export const guardianSchema = z.object({
  fullName: z.string().min(2),
  birthDate: z.string().min(1),
  phone: z.string().min(10),
  canPickup: z.boolean(),
});

export const leadSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(10),
  email: z.email().optional().or(z.literal("")),
  message: z.string().max(2000).optional(),
});
