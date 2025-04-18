import { relations } from "drizzle-orm";
import { pgTable, text, timestamp, boolean } from "drizzle-orm/pg-core";

import {
  account,
  bookmark,
  collection,
  session,
  verification,
} from "@/app/_db/schema";

export const user = pgTable("user", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: boolean("email_verified").notNull(),
  image: text("image"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const userRelations = relations(user, ({ one, many }) => ({
  session: many(session),
  account: many(account),
  verification: one(verification),
  collection: many(collection),
  bookmark: many(bookmark),
}));
