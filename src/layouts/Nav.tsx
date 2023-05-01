import goultarenalogo from "@/assets/images/goultarenalogo.png";
import { LoginBtn } from "@/components/LoginBtn";
import { ConnectedBtn } from "@/components/ConnectedBtn";
import { TradBtn } from "@/components/TradBtn";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { NavArrowRight } from "iconoir-react";

import { useState } from "react";

export const Nav = () => {
  const { data: session } = useSession();
  const [isSubNavOpen, setIsSubNavOpen] = useState<boolean>(false);
  return (
    <div className="h-80 w-full bg-[url('/assets/images/banner.jpg')] bg-cover bg-no-repeat shadow-md">
      <div className="h-full w-full bg-black bg-opacity-40 ">
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 pt-6">
          <div className="flex items-center justify-start gap-3 text-white">
            <div className="h-auto w-20">
              <Image src={goultarenalogo} alt="Socialenga logo" />
            </div>
            <TradBtn />
          </div>
          <div className="flex items-center gap-6 font-KoHo text-white">
            <ul className="flex items-center justify-start gap-4 text-xl">
              <li className="cursor-pointer">Matchfinder</li>
              <li className="cursor-pointer">Shop</li>
              <li
                className="relative flex cursor-pointer items-end gap-0.5"
                onClick={() => setIsSubNavOpen(!isSubNavOpen)}
              >
                <span>More</span>
                <NavArrowRight
                  strokeWidth="1.7"
                  className={
                    isSubNavOpen
                      ? `rotate-90 text-base duration-200 ease-in-out`
                      : ` text-base`
                  }
                />
                <ul
                  className={` absolute top-10 ${
                    isSubNavOpen ? "visible" : "invisible"
                  } -left-5 flex h-max w-max flex-col items-center justify-center rounded-lg bg-gray-400 bg-opacity-20 px-2 text-base text-white`}
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
