import { randomUUID } from "crypto";

import type { Database } from "@/app/_db/client";
import { user } from "@/app/_db/schema";

import users from "@/app/_db/seeds/data/users.json";

export default async (db: Database) => {
  try {
    const [insertedUsers] = await Promise.all(
      users.map(async ({ name, email }) => {
        return await db
          .insert(user)
          .values({
            id: randomUUID(),
            name,
            email,
            emailVerified: false,
          })
          .returning();
      }),
    );

    console.log(
      `✅ Seeded ${insertedUsers.length} ${insertedUsers.length === 1 ? "user" : "users"}.`,
    );
  } catch (error) {
    console.error("💥 Failed to seed users:", error);
  }
};
