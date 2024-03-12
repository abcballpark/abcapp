import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";
import * as schema from "./schema";

export { PlayersTable, type Player, type NewPlayer } from "./schema";

export const db = drizzle(sql, { schema });
