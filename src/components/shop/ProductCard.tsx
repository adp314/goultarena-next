import Image from "next/image";
import { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";

interface ComponentProps {
  src: any;
  alt: string;
  packName: string;
  packPrice: string;
  packDescription: string;
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
}) => {
  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      console.log("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      console.log(
        "Order canceled -- continue to shop around and checkout when you’re ready."
      );
    }
  }, []);

  // const submitPayement = () => {
  //   const response = fetch("/api/payments/checkout_sessions", {
  //     method: "POST",
  //     // body: JSON.stringify(data),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  // };

  return (
    <div className=" flex h-max w-72 flex-col items-center justify-center rounded-md bg-neutral-100 px-8 py-6  shadow-md">
      <div className={`mt-4 h-auto w-24`}>
        <Image src={src} alt={alt} className="h-full w-full" />
      </div>
      <span className="mt-6 text-xl font-bold">{packName}</span>
      <span className="mt-2 text-3xl font-bold">{packPrice}</span>
      <p className="mt-6 text-center">{packDescription}</p>
      <form action="/api/payments/checkout_sessions" method="POST">
        <section>
          <button
            type="submit"
            role="link"
            className="mt-6 w-full rounded-lg bg-orange-800 py-4 text-white hover:bg-orange-700"
          >
            Checkout
          </button>
        </section>
      </form>
    </div>
  );
};
