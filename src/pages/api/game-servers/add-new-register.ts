import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/server/db";

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  const data = req.body;

  if (data) {
    const { userId, serverId } = data;

    try {
      const user = await prisma.user.findUnique({
        where: { id: userId },
      });

      if (user) {
        const { serverRegistered } = user;

        if (serverRegistered.includes(serverId)) {
          // Server ID already exists in the user's registered servers array
          return res
            .status(400)
            .send("Server already registered for this user");
        }

        await prisma.user.update({
          where: { id: userId },
          data: {
            serverRegistered: [...serverRegistered, serverId],
          },
        });

        // Increment the totalRegistered count in the Server table
        await prisma.server.update({
          where: { id: serverId },
          data: {
            totalPlayersRegistered: {
              increment: 1,
            },
          },
        });

        return res.status(200).send("Server registered successfully");
      }
    } catch (error) {
      console.error(error);
      return res.status(500).send("Internal server error");
    }
  }

  return res.status(400).send("Bad request");
}
