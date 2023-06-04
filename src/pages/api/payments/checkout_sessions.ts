import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/server/db";
import { getServerAuthSession } from "@/server/auth";
import Stripe from "stripe";

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

if (!stripeSecretKey) {
  throw new Error("Stripe secret key is not provided");
}

const stripe = new Stripe(stripeSecretKey, {
  apiVersion: "2022-11-15",
});
export default async function CheckoutSessions(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      // Create Checkout Sessions from body params.
      const session: Stripe.Response<Stripe.Checkout.Session> =
        await stripe.checkout.sessions.create({
          line_items: [
            {
              // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
              price: "price_1NF1uRLuqB4HccBmdaOcGvfI",
              quantity: 1,
            },
          ],
          mode: "payment",
          success_url: `${req.headers.origin}/?success=true`,
          cancel_url: `${req.headers.origin}/?canceled=true`,
          automatic_tax: { enabled: false },
        });
      res.redirect(303, session.url as string);
    } catch (err: any) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
