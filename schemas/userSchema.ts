import { z } from "zod";

export const UserSchema = z.object({
  name: z
    .string()
    .min(4, { message: "Name should contain atleast 4 characters" }),
  age: z.string().min(1).max(3),
  semester: z.string().max(1),
  information: z.string().min(10, { message: "Write atleast 10 characters" }),
});
