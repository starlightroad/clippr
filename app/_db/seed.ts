import { getTableName, sql, Table } from "drizzle-orm";

import { client, Database, db } from "@/app/_db/client";
import * as schema from "@/app/_db/schema";
import * as seeds from "@/app/_db/seeds";
import env from "@/app/_lib/env";

const resetTable = async (db: Database, table: Table) => {
  return db.execute(
    sql.raw(`TRUNCATE TABLE "${getTableName(table)}" RESTART IDENTITY CASCADE`),
  );
};

const initializeSeed = async () => {
  const tables = [schema.user];

  try {
    if (!env.DATABASE_SEEDING) {
      throw new Error(
        'You must set DATABASE_SEEDING to "true" when running seeds.',
      );
    }

    for (const table of tables) {
      await resetTable(db, table);
    }

    await seeds.user(db);

    await client.end();
  } catch (error) {
    console.error(error);

    await client.end();
  }
};

initializeSeed();
