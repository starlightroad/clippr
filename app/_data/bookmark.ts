import { cache } from "react";
import { eq } from "drizzle-orm";

import { db } from "@/app/_db/client";
import { verifySession } from "@/app/_lib/session";
import { bookmark, collection } from "@/app/_db/schema";

export const getBookmarks = cache(async () => {
  const session = await verifySession();

  const data = await db
    .select({
      id: bookmark.id,
      name: bookmark.name,
      collection: collection.name,
      link: bookmark.link,
    })
    .from(bookmark)
    .where(eq(bookmark.userId, session.userId))
    .fullJoin(collection, eq(collection.id, bookmark.collectionId));

  return data;
});
