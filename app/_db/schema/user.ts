import { pgTable, text, uuid } from "drizzle-orm/pg-core";

const user = pgTable("user", {
  id: uuid().primaryKey().notNull(),
  name: text("name").notNull(),
});

export default user;
