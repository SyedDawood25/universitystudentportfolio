"use server";

import prisma from "@/lib/db";
import { UserSchema } from "@/schemas/userSchema";
import { z } from "zod";

export const createUser = async (values: z.infer<typeof UserSchema>) => {
  const validatedValues = UserSchema.safeParse(values);

  if (!validatedValues.success) {
    return { err: "Invalid Values" };
  }

  await prisma.user.create({
    data: {
      name: validatedValues.data?.name,
      age: validatedValues.data?.age,
      semester: validatedValues.data?.semester,
      information: validatedValues.data?.information,
      liked: false,
    },
  });
};
