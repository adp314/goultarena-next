import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/server/db";
import { ServerData } from "@/types";

export default async function GET(req: NextApiRequest, res: NextApiResponse) {
  const { gameCategory } = req.query;

  if (gameCategory && typeof gameCategory === "string") {
    const serversData = await prisma.server.findUnique({
      where: {
        gameCategory: gameCategory,
      },
    });

    if (serversData) {
      return res.status(200).send(serversData as ServerData);
    } else {
      return res.status(404).end();
    }
  }
}
