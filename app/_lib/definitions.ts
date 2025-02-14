import { z } from "zod";

const stringBoolean = z.coerce
  .string()
  .transform((value) => {
    return value === "true";
  })
  .default("false");

export const EnvSchema = z.object({
  NODE_ENV: z.string(),
  DATABASE_HOST: z.string(),
  DATABASE_PORT: z.coerce.number(),
  DATABASE_USER: z.string(),
  DATABASE_PASSWORD: z.string(),
  DATABASE_NAME: z.string(),
  DATABASE_URL: z.string(),
  DATABASE_MIGRATING: stringBoolean,
  DATABASE_SEEDING: stringBoolean,
});

export type EnvSchema = z.infer<typeof EnvSchema>;
