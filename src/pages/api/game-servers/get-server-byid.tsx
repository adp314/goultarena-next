import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/server/db";

export default async function GET(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (id && typeof id === "string") {
    const serverData = await prisma.server.findUnique({
      where: {
        id: id,
      },
      include: {
        serverMatchs: true,
      },
    });

    if (serverData) {
      return res.status(200).send(serverData);
    } else {
      return res.status(500).send("internal server error");
    }
  }
}
