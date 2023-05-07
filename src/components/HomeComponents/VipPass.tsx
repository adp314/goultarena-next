import VipPassIcon from "@/assets/images/icons8-vip-94.png";
import Image from "next/image";
import Link from "next/link";
import { RxArrowRight } from "react-icons/Rx";

export const VipPass = () => {
  return (
    <section className=" bg-neutral-100">
      <div className=" mx-auto flex h-full w-full max-w-3xl flex-col items-center justify-start px-4 py-6">
        <div className="mb-8 mt-14 flex flex-col items-center justify-center text-black">
          <h1 className="mb-8 flex flex-col items-center text-center text-4xl font-bold text-orange-800 md:flex-row">
            Goultarena VIP Pass
            <Image
              src={VipPassIcon}
              alt="vip icon"
              className="-mb-0.5 h-20 w-20 md:ml-2"
            />
          </h1>
          <h2 className=" text-center text-lg text-neutral-800">
            If you're looking to take your experience to the next level,
            consider purchasing the VIP pass. With this pass, you'll unlock a
            range of additional benefits that will make your usage even more
            enjoyable.
          </h2>
        </div>

        <div className="mb-10 w-full max-w-md rounded-2xl border border-neutral-200 bg-white p-10 shadow-lg">
          <div className="mb-6 flex items-center justify-start">
            <h3 className="mr-3 text-2xl font-semibold sm:text-3xl">
              One Month Plan
            </h3>
            <span className="inline-block rounded-md bg-orange-800 p-2 text-sm text-white">
              30% OFF
            </span>
          </div>

          <div className=" mb-10 flex items-end justify-start ">
            <span className="mr-4 text-3xl leading-10 sm:text-4xl">6,99 €</span>
            <span className="text-lg leading-7 line-through sm:text-xl">
              9,99 €
            </span>
          </div>

          <div>
            <p className=" mb-5 text-base font-bold">
              If you buy the pass, you have :
            </p>
            <ul className="">
              <li className="mb-4 flex items-center justify-start gap-2">
                <RxArrowRight className="text-lg" /> Cash Out Fees reduced at 0%
              </li>
              <li className="mb-4 flex items-center justify-start gap-2">
                <RxArrowRight className="text-lg" /> Cash Out request unlimited
              </li>
              <li className="mb-4 flex items-center justify-start gap-2">
                <RxArrowRight className="text-lg" /> 1 token reset statistiques
              </li>
              <li className="mb-4 flex items-center justify-start gap-2">
                <RxArrowRight className="text-lg" /> 1 token reset username
              </li>
              <li className="mb-4 flex items-center justify-start gap-2">
                <RxArrowRight className="text-lg" />
                Changment image profil unlocked
                <span className="text-sm italic">(WIP)</span>
              </li>
              <li className="mb-4 flex items-center justify-start gap-2">
                <RxArrowRight className="text-lg" /> Priority fill for your
                dispute matchs
              </li>
              <li className="mb-4 flex items-center justify-start gap-2">
                Private channels on our oficial discord, vote and access of the
                next features planed on the platform etc...
              </li>
            </ul>
          </div>
        </div>
        <Link
          href="/"
          className="mb-14 flex h-14 w-44 items-center justify-center rounded-full bg-orange-800 text-lg text-white hover:bg-orange-700 "
        >
          Buy Pass
        </Link>
      </div>
    </section>
  );
};
