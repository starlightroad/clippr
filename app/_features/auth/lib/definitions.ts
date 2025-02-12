import { z } from "zod";

import {
  MAX_PASSWORD,
  MIN_PASSWORD,
  PASSWORD_REGEX,
} from "@/app/_features/auth";

export const RegistrationFormSchema = z
  .object({
    email: z.string().email("Please enter a valid email."),
    password: z
      .string()
      .min(MIN_PASSWORD, "Password must be at least 8 characters long.")
      .max(MAX_PASSWORD, "Password must be no more than 32 characters.")
      .regex(
        PASSWORD_REGEX,
        "Password must contain at least one letter, one number, and one special character.",
      ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });
