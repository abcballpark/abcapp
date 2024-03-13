import { createInsertSchema } from "drizzle-zod";
import { eq } from "drizzle-orm";
import { z } from "zod";

import { publicProcedure, protectedProcedure, router } from "./trpc";
import { db, PlayersTable, UserPlayersTable } from "@/db";

export const appRouter = router({
  // TODO(kevin): Remove this example
  getStuff: publicProcedure.query(async () => {
    return [1, 2, 3];
  }),

  // Add a new player connected to the current user account
  addAccountPlayer: protectedProcedure
    .input(
      z.object({
        playerFirstName: z.string(),
        playerLastName: z.string(),
        playerBirthdate: z.string(),
        teamPreference: z.string().optional(),
        jerseyNumberPreference: z.string().optional(),
        canCoach: z.boolean(),
      })
    )
    .mutation(async (params) => {
      await db.transaction(async (tx) => {
        // Add to the players table
        const newPlayers = await tx
          .insert(PlayersTable)
          .values({
            playerFirstName: params.input.playerFirstName,
            playerLastName: params.input.playerLastName,
            playerBirthdate: params.input.playerBirthdate,
            jerseyNumberPreference: params.input.jerseyNumberPreference,
          })
          .returning();
        // Link user to the new player
        await tx.insert(UserPlayersTable).values({
          userId: params.ctx.auth.userId,
          playerId: newPlayers[0].id,
          canCoach: params.input.canCoach,
        });
      });
    }),

  // Get all players connected to the current user account
  getAccountPlayers: protectedProcedure.query(async (params) => {
    const players = await db
      .select({
        id: PlayersTable.id,
        playerFirstName: PlayersTable.playerFirstName,
        playerLastName: PlayersTable.playerLastName,
        playerBirthdate: PlayersTable.playerBirthdate,
        jerseyNumberPreference: PlayersTable.jerseyNumberPreference,
        canCoach: UserPlayersTable.canCoach,
      })
      .from(UserPlayersTable)
      .leftJoin(PlayersTable, eq(UserPlayersTable.playerId, PlayersTable.id))
      .where(eq(UserPlayersTable.userId, params.ctx.auth.userId));
    return players;
  }),
});

export type AppRouter = typeof appRouter;
