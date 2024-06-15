"use server";

import prisma from "@/lib/db";

export const getUsers = async () => {
  return await prisma.user.findMany();
};
