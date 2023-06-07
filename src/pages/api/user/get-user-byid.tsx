import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/server/db";

export default async function GET(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (id && typeof id === "string") {
    const userData = await prisma.user.findUnique({
      where: {
        id: id,
      },
      include: {
        accounts: true,
        sessions: true,
        PaymentOrder: true,
      },
    });

    if (userData) {
      return res.status(200).send(userData);
    } else {
      return res.status(404).end();
    }
  }
}
