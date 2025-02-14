import { defineConfig } from "drizzle-kit";

import env from "@/app/_lib/env";

export default defineConfig({
  schema: "./app/_db/schema",
  out: "./app/_db/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
});
