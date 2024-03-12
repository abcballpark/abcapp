import { createInsertSchema } from "drizzle-zod";
import { eq } from "drizzle-orm";

import { publicProcedure, protectedProcedure, router } from "./trpc";
import { db, PlayersTable } from "@/db";

export const appRouter = router({
  getStuff: publicProcedure.query(async () => {
    return [1, 2, 3];
  }),
  addAccountPlayer: protectedProcedure
    .input(createInsertSchema(PlayersTable))
    .mutation(async (params) => {
      console.log(params.ctx); // TODO(kevin): remove this
      params.input.userId = params.ctx.auth.userId;
      const newPlayer = await db.insert(PlayersTable).values(params.input);
      return newPlayer;
    }),
  getAccountPlayers: protectedProcedure.query(async (params) => {
    const players = await db
      .select()
      .from(PlayersTable)
      .where(eq(PlayersTable.userId, params.ctx.auth.userId));
    return players;
  }),
});

export type AppRouter = typeof appRouter;
