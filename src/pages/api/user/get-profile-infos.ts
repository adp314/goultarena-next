import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/server/db";
import { getServerAuthSession } from "@/server/auth";

export default async function GET(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerAuthSession({
    req,
    res,
  });

  if (!session) {
    res.status(401).end();
    console.error("no session");
    return;
  }

  const userData = await prisma.user.findFirst({
    where: {
      id: session.user.id,
    },
  });

  if (userData) {
    return res.status(200).send(userData);
  } else {
    return null;
  }
}
