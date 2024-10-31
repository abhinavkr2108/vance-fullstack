import { PrismaClient } from "@prisma/client";

// Ensure that `prisma` is declared in a scope accessible to the conditional assignment below.
let prisma;

// Assign `prisma` to the existing global instance or create a new one if it doesn't exist.
prisma = globalThis.prisma || new PrismaClient();

// Store the `prisma` instance back to `globalThis` if not in production environment.
if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = prisma;
}

// Export the `prisma` instance for use in other modules.
export const db = prisma;
