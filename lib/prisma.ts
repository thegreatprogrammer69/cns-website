/**
 * Prisma 7 note:
 * Direct DB adapter wiring is environment-specific.
 * For this UI-focused MVP iteration we expose a nullable prisma handle.
 */
export const prisma: {
  user?: {
    findUnique: (args: unknown) => Promise<unknown>;
    create: (args: unknown) => Promise<unknown>;
  };
} = {};
