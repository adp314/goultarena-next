import { type DefaultSession, DefaultUser } from "next-auth";
import type { Role } from "@prisma/client";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      username: string;
      role: Role;
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    username: string;
    role: Role;
  }
}
