import { publicProcedure, protectedProcedure, router } from "./trpc";

export const appRouter = router({
  getStuff: publicProcedure.query(async () => {
    return [1, 2, 3];
  }),
});

export type AppRouter = typeof appRouter;
