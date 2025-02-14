import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import * as schema from "@/app/_db/schema";
import env from "@/app/_lib/env";

export const client = postgres(env.DATABASE_URL, {
  ssl: "require",
  max: env.DATABASE_MIGRATING || env.DATABASE_SEEDING ? 1 : undefined,
});

export const db = drizzle(client, {
  schema,
  logger: true,
});

export type Database = typeof db;
