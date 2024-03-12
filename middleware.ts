import { authMiddleware } from "@clerk/nextjs";

import { TRPC_BASE_URL } from "@/constants";

export default authMiddleware({
  publicRoutes: [
    "/",
    // Public API Routes
    // `${TRPC_BASE_URL}/getStuff`,
  ],
});

export const config = {
  matcher: ["/(api|trpc)(.*)", "/signup", "/account/(.*)"],
};
