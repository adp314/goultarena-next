import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/server/db";

export default async function GET(req: NextApiRequest, res: NextApiResponse) {
  const { gameCategory } = req.query;

  if (gameCategory && typeof gameCategory === "string") {
    const serversData = await prisma.server.findMany({
      where: {
        gameCategory: gameCategory,
      },
    });

    if (serversData) {
      return res.status(200).send(serversData);
    } else {
      return res.status(404).end();
    }
  }
}
