import { cache } from "react";
import { eq } from "drizzle-orm";

import { db } from "@/app/_db/client";
import { collection } from "@/app/_db/schema";
import { verifySession } from "@/app/_lib/session";

export const getCollections = cache(async () => {
  const session = await verifySession();

  const data = await db
    .select({
      name: collection.name,
      createdAt: collection.createdAt,
      updatedAt: collection.updatedAt,
    })
    .from(collection)
    .where(eq(collection.userId, session.userId));

  const [collectionData] = data;

  return collectionData;
});
