"use client";

import { SaasProvider } from "@saas-ui/react";
import { AuthProvider } from "@saas-ui/auth";
import { ClerkAuthProvider } from "@saas-ui/clerk";
import TrpcProvider from "./trpc/Provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ClerkAuthProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      {({ authService }) => (
        <SaasProvider>
          <AuthProvider {...authService}>
            <TrpcProvider>{children}</TrpcProvider>
          </AuthProvider>
        </SaasProvider>
      )}
    </ClerkAuthProvider>
  );
}
