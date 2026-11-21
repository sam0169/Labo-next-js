import { PrismaClient } from "../generated/prisma/client";

export const prisma = new PrismaClient(process.env.DATABASE_URL!);
