import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/server/db";
import { getServerAuthSession } from "@/server/auth";
import { z } from "zod";

const UserFormInfos = z.object({
  characterLink: z.string().optional(),
  description: z.string().optional(),
  username: z.string(),
  discord: z.string().optional(),
  twitter: z.string().optional(),
  youtube: z.string().optional(),
});

export default async function PUT(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerAuthSession({
    req,
    res,
  });

  if (!session) {
    res.status(401).end();
    console.error("no session");
    return;
  }

  try {
    const { characterLink, username, description, discord, twitter, youtube } =
      UserFormInfos.parse(req.body);

    const userData = await prisma.user.update({
      where: {
        id: session.user.id,
      },
      data: {
        characterLink,
        username,
        description,
        discord,
        twitter,
        youtube,
      },
    });

    res.status(200).send(userData);
  } catch (error) {
    console.error("Error updating user data:", error);
    res.status(500).send("Error updating user data");
  }
}
