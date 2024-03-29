import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { NextRequest } from "next/server";
import { getAuth } from "@clerk/nextjs/server";

import { appRouter } from "@/server";
import { createTRPCContext } from "@/server/trpc";

import { TRPC_BASE_URL } from "@/constants";

const createContext = async (req: NextRequest) => {
  return createTRPCContext({
    headers: req.headers,
    auth: getAuth(req),
    req,
  });
};

const handler = (req: NextRequest) =>
  fetchRequestHandler({
    endpoint: TRPC_BASE_URL,
    req,
    router: appRouter,
    createContext: () => createContext(req),
  });

export { handler as GET, handler as POST };
