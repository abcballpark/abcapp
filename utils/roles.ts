import { Role } from "@/types/globals";
import { auth } from "@clerk/nextjs";

export const checkRole = (role: Role) => {
  const { sessionClaims } = auth();
  // TODO(kevin): Handle users without roles set
  return sessionClaims?.metadata?.roles?.includes(role);
};
