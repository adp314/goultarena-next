import goultarenalogo from "@/assets/images/goultarenalogo.png";
import navweb from "@/assets/images/navwalapp.png";
import { LoginBtn } from "@/components/LoginBtn";
import { ConnectedBtn } from "@/components/ConnectedBtn";
import { TradBtn } from "@/components/TradBtn";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { NavArrowRight } from "iconoir-react";

import { useState } from "react";

export const NavHome = () => {
  const { data: session } = useSession();
  const [isSubNavOpen, setIsSubNavOpen] = useState<boolean>(false);
  return (
    <div className={`relative h-[700px] w-full shadow-md`}>
      <Image
        src={navweb}
        alt="Socialenga logo"
        className="absolute -z-10 h-full w-full object-cover object-center"
      />
      <div className="h-full w-full bg-black bg-opacity-70 ">
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 pt-6">
          <div className="flex items-center justify-start gap-3 text-white">
            <div className="h-auto w-20">
              <Image src={goultarenalogo} alt="Socialenga logo" />
            </div>
            <TradBtn />
          </div>
          <div className="flex items-center gap-8 font-KoHo text-white">
            <ul className="flex items-center justify-start gap-6 font-Poppins text-xl ">
              <li className="cursor-pointer">Matchfinder</li>
              <li className="cursor-pointer">Shop</li>
              <li
                className="relative flex cursor-pointer items-center gap-0.5"
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
        </nav>
      </div>
    </div>
  );
};
