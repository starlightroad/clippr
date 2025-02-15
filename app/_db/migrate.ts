import { migrate } from "drizzle-orm/postgres-js/migrator";

import config from "@/drizzle.config";
import { client, db } from "@/app/_db/client";
import env from "@/app/_lib/env";

const initializeMigration = async () => {
  try {
    if (!env.DATABASE_MIGRATING) {
      throw new Error(
        'You must set DATABASE_MIGRATING to "true" when running migrations.',
      );
    }

    await migrate(db, { migrationsFolder: config.out! });

    await client.end();
  } catch (error) {
    console.error(error);

    await client.end();
  }
};

initializeMigration();
