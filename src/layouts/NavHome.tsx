import goultarenalogo from "@/assets/images/goultarenalogo.png";
import navweb from "@/assets/images/bg-iop-mob.jpg";
import { LoginBtn } from "@/components/LoginBtn";
import { ConnectedBtn } from "@/components/ConnectedBtn";
import { TradBtn } from "@/components/TradBtn";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { NavArrowRight } from "iconoir-react";
import dofusretro from "@/assets/images/dofus-retro-cut.png";
import dofus from "@/assets/images/dofus.png";
import dofustouch from "@/assets/images/dofus_touch2.jpg";
import kta from "@/assets/images/kta.png";
import { RiDiscordFill } from "react-icons/Ri";
import { useWindowSize } from "@/hooks/useWindowSize";
import { useState } from "react";
import Link from "next/link";

interface Size {
  width: number;
  height: number;
}

export const NavHome = () => {
  const { data: session } = useSession();

  const size: Size = useWindowSize();
  const [isSubNavOpen, setIsSubNavOpen] = useState<boolean>(false);
  return (
    <div className={`relative h-[700px] w-full shadow-lg`}>
      <Image
        src={navweb}
        alt="Banner"
        className="absolute -z-10 h-full w-full object-cover object-center"
      />
      <div className="h-full w-full bg-black bg-opacity-60 ">
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 pt-8">
          <div className="flex items-center justify-start text-white">
            <div className="h-auto w-20">
              <Image src={goultarenalogo} alt="GoultarenaLogo" />
            </div>
            <div className="ml-1">
              <TradBtn />
            </div>
          </div>
          {size.width >= 1024 && (
            <div className="flex items-center gap-8 text-white">
              <ul className="flex items-center justify-start gap-6 font-Poppins text-xl ">
                <li className="cursor-pointer hover:text-gray-200">
                  Matchfinder
                </li>
                <li className="cursor-pointer hover:text-gray-200">Shop</li>
                <li
                  className="relative flex cursor-pointer items-center gap-0.5 hover:text-gray-200"
                  onClick={() => setIsSubNavOpen(!isSubNavOpen)}
                >
                  <span>More</span>
                  <NavArrowRight
                    strokeWidth="2.5"
                    className={
                      isSubNavOpen
                        ? `mt-0.5 rotate-90 text-base duration-200 ease-in-out`
                        : `mt-0.5 text-base`
                    }
                  />
                  <ul
                    className={` absolute top-10 ${
                      isSubNavOpen ? "visible" : "invisible"
                    } -left-5 flex h-max w-max flex-col items-center justify-center rounded-lg bg-gray-400 bg-opacity-20 px-2 text-base  text-white`}
                  >
                    <li className="py-2">Classement</li>
                    <span className="h-[1px] w-full bg-white bg-opacity-10" />
                    <li className="py-2">Statistiques</li>
                    <span className="h-[1px] w-full bg-white bg-opacity-10" />
                    <li className="py-2">Règlement</li>
                  </ul>
                </li>
              </ul>
              <div className="mt-1">
                {session ? <ConnectedBtn /> : <LoginBtn />}
              </div>
            </div>
          )}
          {size.width < 1024 && <></>}
        </nav>
        <div className=" mx-auto mt-14 flex h-max w-full max-w-7xl items-center justify-between px-4">
          <div className=" mt-14 w-full font-Poppins text-white lg:mb-16 lg:mt-0 lg:w-1/2">
            <h1 className="mb-8 text-5xl font-semibold">
              Use your skill, for win money.
            </h1>
            <p className="text-2xl">
              We provide high quality of matchs services, matchmaking faster,
              and secure payements.
            </p>
            <div className=" flex gap-4 ">
              <Link
                href="/"
                className="mt-8 flex h-14 w-44 items-center justify-center rounded-md bg-orange-800 text-lg hover:mt-6 "
              >
                Let's Start
              </Link>
              <Link
                href="/"
                className="mt-8 flex h-14 w-44 items-center justify-center rounded-md  bg-orange-50 text-lg text-orange-800 hover:mt-6"
              >
                Learn more
              </Link>
            </div>
            <p className="mt-8 flex items-center">
              <span className=" font-semibold uppercase">Join</span>
              <span className="mx-2 flex cursor-pointer items-center gap-0.5 rounded-lg bg-blue-900 px-1.5 py-1 text-lg font-semibold uppercase text-white">
                Discord <RiDiscordFill className="text-2xl" />
              </span>
              <span>to talk with the community and find matchs.</span>
            </p>
          </div>
          <div className="hidden lg:visible lg:mb-24 lg:flex lg:w-1/2 lg:flex-col lg:items-end lg:justify-center lg:gap-7">
            <div className="flex items-end gap-7">
              <div className="lg:h-40 lg:w-40 xl:h-48 xl:w-48">
                <Image
                  src={dofusretro}
                  alt="Dofus Retro"
                  className="h-full w-full rounded-lg border-2 object-cover"
                />
              </div>

              <div className="lg:h-48 lg:w-64 xl:h-56 xl:w-80">
                <Image
                  src={dofus}
                  alt="Dofus"
                  className="h-full w-full rounded-lg border-2 object-cover"
                />
              </div>
            </div>
            <div className="mr-8 flex items-start gap-7 ">
              <div className="lg:h-36 lg:w-64  xl:h-44 xl:w-80">
                <Image
                  src={kta}
                  alt="KTA"
                  className="h-full w-full rounded-lg border-2 object-cover"
                />
              </div>
              <div className="lg:h-48 lg:w-44 xl:h-56 xl:w-52">
                <Image
                  src={dofustouch}
                  alt="Dofus Touch"
                  className="h-full w-full rounded-lg border-2 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
