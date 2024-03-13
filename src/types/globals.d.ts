export {};

export type Role = "admin" | "official" | "coach" | "parent" | "player";
export type Roles = Role[];

declare global {
  interface CustomJwtSessionClaims {
    metadata: {
      roles?: Roles;
    };
  }
}
