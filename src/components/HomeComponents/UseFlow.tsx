import { useState } from "react";
import Image from "next/image";
import iconDeposit from "@/assets/images/icons8-coins-94.png";
import iconFight from "@/assets/images/icons8-sword-94.png";
import iconCashOut from "@/assets/images/icons8-coin-wallet-94.png";
import Link from "next/link";

export const UseFlow = () => {
  const [flowSelected, setFlowSelected] = useState<number>(1);

  return (
    <section className=" bg-white font-Poppins">
      <div className=" mx-auto flex h-[50rem] w-full max-w-7xl flex-col items-center justify-start px-4 pt-6 font-Poppins">
        <div className="mb-6 flex flex-col items-center justify-center text-black">
          <h2 className="mb-4 mt-8 text-lg font-bold uppercase text-orange-800">
            Goultarena.GG USE Flow
          </h2>
          <h1 className="mb-8 text-4xl font-bold text-neutral-800">
            We like to keep it fast and easy.
          </h1>
          <div className="mt-5 flex gap-8">
            <div
              className={`flex h-36 w-96 cursor-pointer gap-3 rounded-lg p-4    ${
                flowSelected === 1
                  ? "bg-orange-300 text-white shadow-lg "
                  : "bg-neutral-100 text-neutral-800 shadow-md"
              }`}
              onClick={() => setFlowSelected(1)}
            >
              <Image
                src={iconDeposit}
                alt="Cash in"
                className="my-auto ml-2 h-20 w-20"
              />

              <div className="my-auto ">
                <h2 className="text-xl font-bold">1- Deposit </h2>
                <p className="text-lg">
                  Select the amount you want to deposit.
                </p>
              </div>
            </div>
            <div
              className={`flex h-36 w-96 cursor-pointer gap-3 rounded-lg p-3    ${
                flowSelected === 2
                  ? "bg-orange-300 text-white shadow-lg "
                  : "bg-neutral-100 text-neutral-800 shadow-md"
              }`}
              onClick={() => setFlowSelected(2)}
            >
              <div className="my-auto ml-2  h-20 w-20">
                <Image
                  src={iconFight}
                  alt="Cash in"
                  className="h-full w-full"
                />
              </div>
              <div className="my-auto ">
                <h2 className="text-xl font-bold">2- Game </h2>
                <p className="text-lg">
                  Create or accept a stake versus match.
                </p>
              </div>
            </div>
            <div
              className={`flex h-36 w-96 cursor-pointer gap-3 rounded-lg p-3    ${
                flowSelected === 3
                  ? "bg-orange-300 text-white shadow-lg "
                  : "bg-neutral-100 text-neutral-800 shadow-md"
              }`}
              onClick={() => setFlowSelected(3)}
            >
              <div className="my-auto ml-2 h-20 w-20">
                <Image
                  src={iconCashOut}
                  alt="Cash in"
                  className="h-full w-full"
                />
              </div>
              <div className="my-auto ">
                <h2 className="text-xl font-bold">3- Cash Out </h2>
                <p className="text-lg">
                  Retire your benefices via a cash out request.
                </p>
              </div>
            </div>
          </div>
          {flowSelected === 1 && (
            <div className="mt-12 flex w-3/4 justify-center gap-6">
              <div className="flex h-[18rem] w-1/2 items-center justify-center rounded-xl bg-gray-300 text-3xl shadow-lg">
                // PLACEHOLDER //
              </div>
              <div className="w-1/2">
                <h2 className="text-2xl font-bold text-neutral-800">
                  Select Your Desired Amount
                </h2>
                <p className="mt-4 text-lg">
                  You can choose the amount you want to deposit, and we'll
                  credit it automatically to your secure Goultarena.gg wallet
                  after a successful payment and verification. Our payment
                  system is secure and efficient, ensuring easy access to your
                  funds for playing competitive matches on our platform.
                </p>
                <Link
                  href="/"
                  className=" mt-4 flex h-14 w-44 items-center justify-center rounded-md bg-orange-800 text-lg text-white shadow-md hover:bg-orange-700 "
                >
                  Get Started
                </Link>
              </div>
            </div>
          )}
          {flowSelected === 2 && (
            <div className="mt-12 flex w-3/4 justify-center gap-6">
              <div className="flex h-[18rem] w-1/2 items-center justify-center rounded-xl bg-gray-300 text-3xl shadow-lg">
                // PLACEHOLDER //
              </div>
              <div className="w-1/2">
                <h2 className="text-2xl font-bold text-neutral-800">
                  Find or create a stake game
                </h2>
                <p className="mt-4 text-lg">
                  You can choose the amount you want to deposit, and we'll
                  credit it automatically to your secure Goultarena.gg wallet
                  after a successful payment and verification. Our payment
                  system is secure and efficient, ensuring easy access to your
                  funds for playing competitive matches on our platform.
                </p>
                <Link
                  href="/"
                  className=" mt-4 flex h-14 w-44 items-center justify-center rounded-md bg-orange-800 text-lg text-white shadow-md hover:bg-orange-700 "
                >
                  Get Started
                </Link>
              </div>
            </div>
          )}
          {flowSelected === 3 && (
            <div className="mt-12 flex w-3/4 justify-center gap-6">
              <div className="flex h-[18rem] w-1/2 items-center justify-center rounded-xl bg-gray-300 text-3xl shadow-lg">
                // PLACEHOLDER //
              </div>
              <div className="w-1/2">
                <h2 className="text-2xl font-bold text-neutral-800">
                  Recolt your benefits
                </h2>
                <p className="mt-4 text-lg">
                  You can choose the amount you want to deposit, and we'll
                  credit it automatically to your secure Goultarena.gg wallet
                  after a successful payment and verification. Our payment
                  system is secure and efficient, ensuring easy access to your
                  funds for playing competitive matches on our platform.
                </p>
                <Link
                  href="/"
                  className=" mt-4 flex h-14 w-44 items-center justify-center rounded-md bg-orange-800 text-lg text-white shadow-md hover:bg-orange-700 "
                >
                  Get Started
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
