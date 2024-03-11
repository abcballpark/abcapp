"use client";

import { SaasProvider } from "@saas-ui/react";
import { Session } from "inspector";
import { ClerkProvider } from "@clerk/nextjs";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <SaasProvider>{children}</SaasProvider>
    </ClerkProvider>
  );
}
