import { type GetServerSidePropsContext } from "next";
import {
  getServerSession,
  type NextAuthOptions,
  type DefaultSession,
  DefaultUser,
} from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { env } from "@/env.mjs";
import { prisma } from "@/server/db";
import { generateUsername } from "unique-username-generator";

const generateSignInUserName = () => {
  const userNameGenerate = generateUsername("", 0, 10);
  return `${userNameGenerate}#${Math.floor(Math.random() * 10)}${Math.floor(
    Math.random() * 10
  )}${Math.floor(Math.random() * 10)}`;
};

export const authOptions: NextAuthOptions = {
  debug: env.NODE_ENV !== "production",
  events: {
    async signIn({ user }) {
      const newUsername = generateSignInUserName();
      if (!user.username) {
        await prisma.user.update({
          where: {
          

            id: user.id,
          },
          data: {
            username: newUsername,
            // Create UserWallet and GameInfos for the user
            userWallet: {
              create: {
                tokensWallet: 10,
                totalEarnings: 0,
                totalSpends: 0,
              },
            },
            gameInfos: {
              create: {
                level: 1,
                totalMatchs: 0,
                totalWins: 0,
                totalDraws: 0,
                totalLooses: 0,
              },
            },
          },
          include: {
            userWallet: true,
            gameInfos: true,
          },
        });
      }
    },
  },
  callbacks: {
    session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
        session.user.username = user.username;
        session.user.role = user.role;
      }
      return session;
    },
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    DiscordProvider({
      clientId: env.DISCORD_CLIENT_ID,
      clientSecret: env.DISCORD_CLIENT_SECRET,
    }),
  ],
};

export const getServerAuthSession = (ctx: {
  req: GetServerSidePropsContext["req"];
  res: GetServerSidePropsContext["res"];
}) => {
  return getServerSession(ctx.req, ctx.res, authOptions);
};
