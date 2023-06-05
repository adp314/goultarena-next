import Image from "next/image";
import { loadStripe } from "@stripe/stripe-js";
import { useSession } from "next-auth/react";

interface ComponentProps {
  src: any;
  alt: string;
  packName: string;
  packPrice: string;
  packDescription: string;
  product: string;
}

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
    ? process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
    : "nokey"
);

export const ProductCard: React.FC<ComponentProps> = ({
  src,
  alt,
  packName,
  packPrice,
  packDescription,
  product,
}) => {
  const { data: session } = useSession();

  const handleCheckout = async () => {
    try {
      if (session) {
        const stripe = await stripePromise;
        if (stripe) {
          const response = await fetch("/api/payments/checkout_sessions", {
            method: "POST",
            body: JSON.stringify({
              product,
              userId: session.user.id,
              username: session.user.username,
              email: session.user.email,
              packName: packName,
            }),
          });
          const checkoutSession = await response.json();
          await stripe.redirectToCheckout({ sessionId: checkoutSession }); // Pass sessionId as an object
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className=" flex h-max w-72 flex-col items-center justify-center rounded-md bg-neutral-100 px-8 py-6  shadow-md">
      <div className={`mt-4 h-auto w-24`}>
        <Image src={src} alt={alt} className="h-full w-full" />
      </div>
      <span className="mt-6 text-xl font-bold">{packName}</span>
      <span className="mt-2 text-3xl font-bold">{packPrice}</span>
      <p className="mt-6 text-center">{packDescription}</p>

      <button
        type="submit"
        onClick={() => handleCheckout()}
        role="link"
        className="mt-6 w-full rounded-lg bg-orange-800 px-6 py-4 text-white hover:bg-orange-700"
      >
        Checkout
      </button>
    </div>
  );
};
