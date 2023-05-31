import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/server/db";
import { getServerAuthSession } from "@/server/auth";
import { z } from "zod";

const billingInfos = z.object({
  firstName: z.string(),
  lastName: z.string(),
  country: z.string(),
  zipCode: z.string(),
  street: z.string(),
  number: z.string(),
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
    const billingInfosData = billingInfos.parse(req.body);

    const updateBillingData = await prisma.user.update({
      where: {
        id: session.user.id,
      },
      data: billingInfosData,
    });

    res.status(200).send(updateBillingData);
  } catch (error) {
    console.error("Error updating user data:", error);
    res.status(500).send("Error updating user data");
  }
}
