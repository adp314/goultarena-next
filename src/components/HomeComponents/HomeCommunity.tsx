import Link from "next/link";

export const HomeCommunity = () => {
  return (
    <section className=" bg-white font-Poppins">
      <div className=" mx-auto flex h-[52rem] w-full max-w-7xl flex-col items-center justify-between gap-16 px-4 font-Poppins md:flex-row">
        <div className="flex flex-col gap-6 ">
          <div className="flex items-end justify-start gap-6">
            <div className="flex h-72 w-72 items-center justify-center rounded-xl bg-yellow-100 p-8">
              <div className="flex flex-col">
                <p className="text-lg font-medium text-neutral-500">
                  “From start to finish i have been nothing but impressed with
                  the service.”
                </p>
                <span className="mt-4 text-xl font-bold">MattyMitch</span>
                <span className="mt-2 text-lg font-medium text-neutral-500">
                  Discord
                </span>
              </div>
            </div>
            <div className="flex h-80 w-[22rem] items-center justify-center rounded-xl bg-red-100 p-8">
              <div className="flex flex-col">
                <p className="text-lg font-medium text-neutral-500">
                  “..All in all, a really comfortable and nice boost + customer
                  service. Would definetely buy again. Booster 5/5 Customer
                  service 5/5.”
                </p>
                <span className="mt-4 text-xl font-bold">Zara</span>
                <span className="mt-2 text-lg font-medium text-neutral-500">
                  Discord
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className="ml-14 flex items-end justify-end gap-6">
              <div className="flex h-72 w-72 items-center justify-center rounded-xl bg-green-100 p-8">
                <div className="flex flex-col">
                  <p className="text-lg font-medium text-neutral-500">
                    “It was my first boost purchase and was a wonderful
                    experience with this service.”
                  </p>
                  <span className="mt-4 text-xl font-bold">Rocka</span>
                  <span className="mt-2 text-lg font-medium text-neutral-500">
                    Discord
                  </span>
                </div>
              </div>
              <div className="flex h-72 w-[22rem] items-center justify-center rounded-xl bg-blue-100 p-8">
                <div className="flex flex-col">
                  <p className="text-lg font-medium text-neutral-500">
                    “I had a Duo Boost — really skilled players and also
                    friendly and really funny guys! 😄”
                  </p>
                  <span className="mt-4 text-xl font-bold">Khin</span>
                  <span className="mt-2 text-lg font-medium text-neutral-500">
                    Discord
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-neutral-800">Our Community</h2>
          <h3 className="mt-6 text-xl font-semibold text-neutral-600">
            Customer satisfaction is our main goal. See what our customers are
            saying.
          </h3>
          <p className="mt-4 text-lg text-neutral-500">
            Here at GameBoost, our focus is not just on completing our
            customer's order, it goes further than that, we try our hardest to
            give our client the best experience possible with perfect results.
          </p>
          <Link
            href="/"
            className="mb-10 mt-10 flex h-14 w-44 items-center justify-center rounded-lg bg-gray-800 text-lg text-white hover:bg-opacity-80 "
          >
            Join us
          </Link>
        </div>
      </div>
    </section>
  );
};
