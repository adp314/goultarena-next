import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/server/db";
import { Role, User } from "@prisma/client";
import { z } from "zod";

const newServerForm = z.object({
  userId: z.string(),
  name: z.string(),
  startDate: z.string(),
  finishDate: z.string(),
  gameCategory: z.string(),
  linkImage: z.string().optional(),
});

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    const newServerData = newServerForm.parse(req.body);
    const isValidAdminUser = await checkUserValidity(newServerData.userId);
    const parsedStartDate = new Date(newServerData.startDate);
    const parsedFinishDate = new Date(newServerData.finishDate);

    if (isValidAdminUser) {
      const { userId, ...serverData } = newServerData;

      const newServer = await prisma.server.create({
        data: {
          ...serverData,
          startDate: parsedStartDate,
          finishDate: parsedFinishDate,
        },
      });

      return res.status(200).send(newServer);
    } else {
      return res.status(404).send("internal server error");
    }
  } catch (error) {
    console.log(error);
  }
}

async function checkUserValidity(userId: string): Promise<boolean> {
  const user: User | null = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (user) {
    return user.role === Role.ADMIN;
  }
  return false;
}
