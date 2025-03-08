import { cache } from "react";
import { eq } from "drizzle-orm";

import { db } from "@/app/_db/client";
import { user } from "@/app/_db/schema";
import { verifySession } from "@/app/_lib/session";

export const getUser = cache(async () => {
  const session = await verifySession();

  const data = await db
    .select({ name: user.name, email: user.email })
    .from(user)
    .where(eq(user.id, session.userId));

  const [userData] = data;

  return userData;
});
