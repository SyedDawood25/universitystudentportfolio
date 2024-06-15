"use server";

import prisma from "@/lib/db";

export const deleteUser = async (userId: string) => {
  await prisma.user.delete({
    where: { id: userId },
  });
};
