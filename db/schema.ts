import {
  pgTable,
  serial,
  text,
  boolean,
  date,
  timestamp,
  uniqueIndex,
} from "drizzle-orm/pg-core";
import { InferSelectModel, InferInsertModel } from "drizzle-orm";

export const PlayersTable = pgTable("Players", {
  id: serial("id").primaryKey(),
  userId: text("userId").notNull(),
  parentFirstName: text("parentFirstName").notNull(),
  parentLastName: text("parentLastName").notNull(),
  parentEmail: text("parentEmail").notNull(),
  parentPhone: text("parentPhone").notNull(),
  canCoach: boolean("canCoach").notNull(),
  playerFirstName: text("playerFirstName").notNull(),
  playerLastName: text("playerLastName").notNull(),
  playerBirthdate: text("playerBirthdate").notNull(),
});

export type Player = InferSelectModel<typeof PlayersTable>;
export type NewPlayer = InferInsertModel<typeof PlayersTable>;
