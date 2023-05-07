import Link from "next/link";
import Image from "next/image";

import kiop from "@/assets/images/krosmoz_iop.png";
import kecaflip from "@/assets/images/krosmoz_ecaflip.png";

export const Reminder = () => {
  return (
    <section className="bg-neutral-100">
      <div className="homeSection relative h-max ">
        <Image
          src={kiop}
          alt="krosmoz_iop"
          className="absolute -bottom-6 hidden w-auto  lg:-left-14 lg:block lg:h-72 xl:-left-32 xl:h-80"
        />
        <Image
          src={kecaflip}
          alt="krosmoz_ecaflip"
          className="absolute -bottom-6 hidden  w-auto scale-x-[-1] transform lg:-right-14 lg:block lg:h-72 xl:-right-32 xl:h-80"
        />

        <div className=" mt-20 flex flex-col items-center justify-center text-center ">
          <h1 className=" text-4xl font-bold  text-orange-800">
            Do not hesitate anymore!
          </h1>
          <p className="mt-6 flex max-w-xl justify-center text-xl font-medium text-neutral-800">
            Join our players and start a new experience, insane fights, prizes
            and more waiting you.
          </p>
          <Link
            href="/"
            className="mx-auto mb-16 mt-10 flex h-14 w-44 items-center justify-center rounded-md bg-orange-800 text-lg text-white hover:bg-orange-700 "
          >
            Let's Start
          </Link>
        </div>
      </div>
    </section>
  );
};
