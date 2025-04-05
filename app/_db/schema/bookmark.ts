import { relations } from "drizzle-orm";
import { integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

import { collection, user } from "@/app/_db/schema";

export const bookmark = pgTable("bookmark", {
  id: serial("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  collectionId: integer("collection_id").references(() => collection.id, {
    onDelete: "cascade",
  }),
  name: text("name").notNull(),
  link: text("link").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const bookmarkRelations = relations(bookmark, ({ one }) => ({
  user: one(user),
  collection: one(collection),
}));
