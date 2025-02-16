import { z } from "zod";

import {
  MAX_PASSWORD,
  MIN_PASSWORD,
  PASSWORD_REGEX,
} from "@/app/_features/auth";
import { ERRORS } from "@/app/_lib/constants";

export const RegistrationFormSchema = z
  .object({
    email: z.string().email(ERRORS.VALIDATION.INVALID_EMAIL),
    password: z
      .string()
      .min(MIN_PASSWORD, ERRORS.VALIDATION.PASSWORD_TOO_SHORT)
      .max(MAX_PASSWORD, ERRORS.VALIDATION.PASSWORD_TOO_LONG)
      .regex(PASSWORD_REGEX, ERRORS.VALIDATION.PASSWORD_WEAK),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: ERRORS.VALIDATION.PASSWORDS_DO_NOT_MATCH,
    path: ["confirmPassword"],
  });

export const LoginFormSchema = z.object({
  email: z.string().email(ERRORS.VALIDATION.INVALID_EMAIL),
  password: z.string().min(1, ERRORS.VALIDATION.PASSWORD_REQUIRED),
});
