import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/server/db";
import { z } from "zod";

const createMatchForm = z.object({
  gameCategory: z.string(),
  createdBy: z.string(),
  amount: z.number(),
  playersByTeam: z.number(),
  isDraft: z.boolean(),
  draftLink: z.string().optional(),
  compo_team_a: z.array(z.string()).optional(),
  teamA_creation_playerIds: z.array(z.string()),
});

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  const createMatchData = createMatchForm.parse(req.body);

  if (createMatchData) {
    try {
    } catch (error) {
      console.error(error);
      return res.status(500).send("Internal server error");
    }
  }

  return res.status(400).send("Bad request");
}
