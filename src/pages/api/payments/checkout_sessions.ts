import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/server/db";
import { getServerAuthSession } from "@/server/auth";
import Stripe from "stripe";
import { z } from "zod";
import cors from "cors";

const userInfos = z.object({
  userId: z.string(),
  username: z.string(),
  email: z.string(),
  product: z.string(),
  packName: z.string(),
});

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

if (!stripeSecretKey) {
  throw new Error("Stripe secret key is not provided");
}

const stripe = new Stripe(stripeSecretKey, {
  apiVersion: "2022-11-15",
});

const stripeCheckoutUrl = "https://buy.stripe.com/test_4gwfYY6rpgvWdby145";

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    // Preflight request response
    res.status(200).end();
    return;
  }
  const userData = userInfos.parse(JSON.parse(req.body));

  try {
    // Create Checkout Sessions from body params.
    const session: Stripe.Response<Stripe.Checkout.Session> =
      await stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: userData.product,
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url: `${req.headers.origin}/?success=true`,

        cancel_url: `${req.headers.origin}/?success=false`,
        automatic_tax: { enabled: false },
        client_reference_id: userData.userId,
      });

    const createPayment = await prisma.payment.create({
      data: {
        userId: userData.userId,
        productName: userData.packName,
        checkoutSessionId: session.id,
        status: "pending",
      },
    });
    res.json(session.id);
    res.redirect(303, session.url as string);
  } catch (err: any) {
    res.status(err.statusCode || 500).json(err.message);
  }
}
