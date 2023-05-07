import { useState } from "react";
import Image from "next/image";
import iconDeposit from "@/assets/images/icons8-coins-94.png";
import iconFight from "@/assets/images/icons8-sword-94.png";
import iconCashOut from "@/assets/images/icons8-coin-wallet-94.png";
import Link from "next/link";

export const UseFlow = () => {
  const [flowSelected, setFlowSelected] = useState<number>(1);

  return (
    <section className="bg-white">
      <div className="homeSection h-max ">
        <div className="mb-8 mt-14 text-center font-bold">
          <h2 className="mb-4 text-lg uppercase text-orange-800">
            Goultarena.GG USE Flow
          </h2>
          <h1 className="text-4xl text-neutral-800">
            We like to keep it fast and easy.
          </h1>
        </div>
        <div className="mb-10 flex flex-col items-center lg:mb-14 lg:w-full lg:flex-row lg:justify-center">
          <div
            className={`flex h-32 w-80 cursor-pointer rounded-lg p-4 xl:h-36 xl:w-96   ${
              flowSelected === 1
                ? "bg-orange-300 text-white shadow-lg "
                : "bg-neutral-100 text-neutral-800 shadow-md"
            }`}
            onClick={() => setFlowSelected(1)}
          >
            <Image
              src={iconDeposit}
              alt="DepositIcon"
              className="mx-3 my-auto h-20 w-20"
            />
            <div className="my-auto ">
              <h2 className="text-lg font-bold xl:text-xl">1- Deposit </h2>
              <p className="text-md xl:text-lg">
                Select the amount you want to deposit.
              </p>
            </div>
          </div>
          <div
            className={`my-6 flex h-32 w-80 cursor-pointer rounded-lg p-4  lg:mx-6 xl:mx-8 xl:h-36 xl:w-96    ${
              flowSelected === 2
                ? "bg-orange-300 text-white shadow-lg "
                : "bg-neutral-100 text-neutral-800 shadow-md"
            }`}
            onClick={() => setFlowSelected(2)}
          >
            <Image
              src={iconFight}
              alt="FightIcon"
              className="mx-3 my-auto h-20 w-20"
            />
            <div className="my-auto ">
              <h2 className="text-lg font-bold xl:text-xl">2- Game </h2>
              <p className="text-md xl:text-lg">
                Create or accept a stake versus match.
              </p>
            </div>
          </div>
          <div
            className={`flex h-32 w-80 cursor-pointer rounded-lg p-4 xl:h-36 xl:w-96   ${
              flowSelected === 3
                ? "bg-orange-300 text-white shadow-lg "
                : "bg-neutral-100 text-neutral-800 shadow-md"
            }`}
            onClick={() => setFlowSelected(3)}
          >
            <Image
              src={iconCashOut}
              alt="CashOutIcon"
              className="mx-3 my-auto h-20 w-20"
            />
            <div className="my-auto ">
              <h2 className="text-lg font-bold xl:text-xl">3- Cash Out </h2>
              <p className="text-md xl:text-lg">
                Retire your benefices via a cash out request.
              </p>
            </div>
          </div>
        </div>
        {flowSelected === 1 && (
          <div className=" mx-auto mb-14 flex h-full w-full max-w-5xl flex-col lg:h-72 lg:flex-row">
            <div className="mx-auto mb-6 flex h-72 w-full items-center justify-center rounded-xl bg-gray-300 text-3xl shadow-lg sm:w-[30rem] lg:mx-0 lg:mb-0 lg:mr-6 ">
              // PLACEHOLDER //
            </div>
            <div className="flex w-full flex-col justify-between text-center lg:w-1/2 lg:text-left">
              <h2 className="text-2xl font-bold text-neutral-800">
                Select Your Desired Amount
              </h2>
              <div>
                <p className=" mt-4 text-lg">
                  You can choose the amount you want to deposit, and we'll
                  credit it automatically to your secure Goultarena.gg wallet
                  after a successful payment and verification. Our payment
                  system is secure and efficient, ensuring easy access to your
                  funds for playing competitive matches on our platform.
                </p>
                <Link
                  href="/"
                  className="mx-auto mb-8 mt-4 flex h-14 w-44 items-center justify-center rounded-md bg-orange-800 text-lg text-white shadow-md hover:bg-orange-700 lg:mx-0 lg:mb-0 "
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
        {flowSelected === 2 && (
          <div className=" mx-auto  mb-14  flex h-full w-full max-w-5xl flex-col lg:h-72 lg:flex-row">
            <div className="mx-auto mb-6 flex h-72 w-full items-center justify-center rounded-xl bg-gray-300 text-3xl shadow-lg sm:w-[30rem] lg:mx-0 lg:mb-0 lg:mr-6 ">
              // PLACEHOLDER //
            </div>
            <div className="flex w-full flex-col justify-between text-center lg:w-1/2 lg:text-left">
              <h2 className="text-2xl font-bold text-neutral-800">
                Select Your Desired Amount
              </h2>
              <div>
                <p className=" mt-4 text-lg">
                  You can choose the amount you want to deposit, and we'll
                  credit it automatically to your secure Goultarena.gg wallet
                  after a successful payment and verification. Our payment
                  system is secure and efficient, ensuring easy access to your
                  funds for playing competitive matches on our platform.
                </p>
                <Link
                  href="/"
                  className="mx-auto mb-8 mt-4 flex h-14 w-44 items-center justify-center rounded-md bg-orange-800 text-lg text-white shadow-md hover:bg-orange-700 lg:mx-0 lg:mb-0 "
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
        {flowSelected === 3 && (
          <div className="mx-auto mb-14 flex h-full w-full max-w-5xl flex-col lg:h-72 lg:flex-row">
            <div className="mx-auto mb-6 flex h-72 w-full items-center justify-center rounded-xl bg-gray-300 text-3xl shadow-lg sm:w-[30rem] lg:mx-0 lg:mb-0 lg:mr-6 ">
              // PLACEHOLDER //
            </div>
            <div className="flex w-full flex-col justify-between text-center lg:w-1/2 lg:text-left">
              <h2 className="text-2xl font-bold text-neutral-800">
                Select Your Desired Amount
              </h2>
              <div>
                <p className=" mt-4 text-lg">
                  You can choose the amount you want to deposit, and we'll
                  credit it automatically to your secure Goultarena.gg wallet
                  after a successful payment and verification. Our payment
                  system is secure and efficient, ensuring easy access to your
                  funds for playing competitive matches on our platform.
                </p>
                <Link
                  href="/"
                  className="mx-auto mb-8 mt-4 flex h-14 w-44 items-center justify-center rounded-md bg-orange-800 text-lg text-white shadow-md hover:bg-orange-700 lg:mx-0 lg:mb-0 "
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
