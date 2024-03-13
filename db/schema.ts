import {
  pgTable,
  serial,
  text,
  integer,
  boolean,
  date,
  timestamp,
  uniqueIndex,
} from "drizzle-orm/pg-core";
import { sql, InferSelectModel, InferInsertModel } from "drizzle-orm";

export const PlayersTable = pgTable("Players", {
  id: serial("id").primaryKey(),
  playerFirstName: text("playerFirstName").notNull(),
  playerLastName: text("playerLastName").notNull(),
  playerBirthdate: text("playerBirthdate").notNull(),
  jerseyNumberPreference: text("jerseyNumberPreference"),
  createdOn: timestamp("createdOn")
    .notNull()
    .default(sql`now()`),
});

export type Player = InferSelectModel<typeof PlayersTable>;
export type NewPlayer = InferInsertModel<typeof PlayersTable>;

export const UserPlayersTable = pgTable("UserPlayers", {
  id: serial("id").primaryKey(),
  userId: text("userId").notNull(),
  playerId: integer("playerId").notNull(),
  canCoach: boolean("canCoach").notNull().default(false),
});

export type UserPlayer = InferSelectModel<typeof UserPlayersTable>;
export type NewUserPlayer = InferInsertModel<typeof UserPlayersTable>;
