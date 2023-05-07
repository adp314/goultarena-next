import Link from "next/link";

export const HomeCommunity = () => {
  return (
    <section className=" bg-white ">
      <div className=" homeSection flex h-max flex-col items-center xl:flex-row xl:justify-between">
        <div className="my-16 flex flex-col gap-6 xl:my-14 ">
          <div className="flex flex-col items-end gap-6 md:flex-row md:justify-start">
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
                  “..All in all, a really comfortable and nice experience with
                  the VIP Pass. Would definetely buy again. 5/5 Customer 5/5 VIP
                  service.”
                </p>
                <span className="mt-4 text-xl font-bold">Zara</span>
                <span className="mt-2 text-lg font-medium text-neutral-500">
                  Discord
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-6 md:ml-14 md:flex-row md:items-end md:justify-start">
              <div className="flex h-72 w-72 items-center justify-center rounded-xl bg-green-100 p-8">
                <div className="flex flex-col">
                  <p className="text-lg font-medium text-neutral-500">
                    “It was my first deposit on goultarena.gg and was a
                    wonderful experience, play for money is so exciting!”
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
                    “I find a Duo on Goultarena Discord — really skilled player
                    and also friendly and really funny guy! 😄”
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
        <div className=" text-center xl:ml-16 xl:text-left">
          <h2 className="text-4xl font-bold text-neutral-800">Our Community</h2>
          <h3 className="mt-6 text-xl font-semibold text-neutral-600">
            Customer satisfaction is our main goal. See what our customers are
            saying.
          </h3>
          <p className="mt-4 text-lg text-neutral-500">
            Here at Goultarena, our focus is not just on completing our
            customer's Deposit/Cash out orders, it goes further than that, we
            try our hardest to give our players the best experience possible.
          </p>
          <Link
            href="/"
            className=" mx-auto mb-12 mt-10 flex h-14 w-44 items-center justify-center rounded-lg bg-gray-800 text-lg text-white hover:bg-opacity-80 xl:mx-0  xl:mb-0"
          >
            Join us
          </Link>
        </div>
      </div>
    </section>
  );
};
