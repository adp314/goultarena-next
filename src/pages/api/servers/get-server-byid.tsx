import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/server/db";

export default async function GET(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (id && typeof id === "string") {
    const serverData = await prisma.user.findUnique({
      where: {
        id: id,
      },
      include: {
        accounts: true,
        sessions: true,
        PaymentOrder: true,
        gameInfos: true,
        userWallet: true,
      },
    });

    if (serverData) {
      return res.status(200).send(serverData);
    } else {
      return res.status(404).end();
    }
  }
}
