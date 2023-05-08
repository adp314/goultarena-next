import goultarenalogo from "@/assets/images/goultarenalogo.png";
import navweb from "@/assets/images/bg-iop-mob.jpg";
import { LoginBtn } from "@/components/LoginBtn";
import { ConnectedBtn } from "@/components/ConnectedBtn";
import { TradBtn } from "@/components/TradBtn";
import { useSession } from "next-auth/react";
import Image from "next/image";
import {
  NavArrowRight,
  Medal1St,
  StatUp,
  Shield,
  Menu,
  Cancel,
} from "iconoir-react";
import dofusretro from "@/assets/images/dofus-retro-cut.png";
import dofus from "@/assets/images/dofus.png";
import dofustouch from "@/assets/images/dofus_touch2.jpg";
import kta from "@/assets/images/kta.png";
import { RiDiscordFill } from "react-icons/Ri";
import { useWindowSize } from "@/hooks/useWindowSize";
import { useState } from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";

interface Size {
  width: number;
  height: number;
}

export const NavHome = () => {
  const { data: session } = useSession();
  const { t } = useTranslation(["nav"]);

  const size: Size = useWindowSize();
  const [isSubNavOpen, setIsSubNavOpen] = useState<boolean>(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false);
  return (
    <div className={`relative h-[700px] w-full shadow-lg`}>
      <Image
        src={navweb}
        alt="Banner"
        className="absolute -z-10 h-full w-full object-cover object-center"
      />
      <div className="h-full w-full bg-black bg-opacity-60 ">
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 pt-8">
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
                <li className="cursor-pointer font-medium hover:text-gray-200">
                  {t("nav_matchfinder")}
                </li>
                <li className="cursor-pointer font-medium hover:text-gray-200">
                  {t("nav_shop")}
                </li>
                <li
                  className="relative flex cursor-pointer  "
                  onClick={() => setIsSubNavOpen(!isSubNavOpen)}
                >
                  <span className="flex items-center gap-0.5 font-medium hover:text-gray-200">
                    {t("nav_more")}
                    <NavArrowRight
                      strokeWidth="3"
                      className={
                        isSubNavOpen
                          ? `mt-0.5 rotate-90 text-base duration-200 ease-in-out`
                          : `mt-0.5 text-base`
                      }
                    />
                  </span>

                  <ul
                    className={` absolute -left-full top-12 ${
                      isSubNavOpen ? "visible" : "invisible"
                    }   flex h-max w-max flex-col items-center justify-center  rounded-lg bg-neutral-100 px-5 text-base font-medium text-neutral-800  `}
                  >
                    <li className="flex items-center gap-2 py-3 text-lg  hover:text-orange-800">
                      <Medal1St className="text-base" />
                      {t("nav_d_ranking")}
                    </li>
                    <span className="h-0.5 w-full rounded-full bg-neutral-800 bg-opacity-20" />
                    <li className="flex items-center gap-2 py-3 text-lg hover:text-orange-800">
                      <StatUp className="text-base " />
                      {t("nav_d_statistics")}
                    </li>
                    <span className="h-0.5 w-full rounded-full bg-neutral-800 bg-opacity-20" />
                    <li className="flex items-center gap-2 py-3 text-lg  hover:text-orange-800">
                      <Shield className="text-base " />
                      {t("nav_d_rules")}
                    </li>
                  </ul>
                </li>
              </ul>
              <div className="mt-0.5">
                {session ? <ConnectedBtn /> : <LoginBtn />}
              </div>
            </div>
          )}
          {size.width < 1024 && (
            <div
              className="relative cursor-pointer text-white"
              onClick={() => {
                setIsMobileNavOpen(!isMobileNavOpen);
              }}
            >
              {isMobileNavOpen ? (
                <Cancel strokeWidth={2} className="text-2xl" />
              ) : (
                <Menu strokeWidth={2} className="text-2xl" />
              )}

              <div
                className={` ${
                  isMobileNavOpen ? "visible" : "hidden"
                } absolute -left-16 h-20 w-max rounded-md bg-neutral-100 px-6 text-neutral-800 `}
              >
                <div className="w-full">
                  {session ? <p>Connected</p> : <p>Login</p>}
                </div>
                <ul>
                  <li></li>
                </ul>
              </div>
            </div>
          )}
        </nav>
        <div className=" mx-auto mt-14 flex h-max w-full max-w-7xl items-center justify-between px-4">
          <div className=" mt-14 w-full font-Poppins text-white lg:mb-16 lg:mt-0 lg:w-1/2">
            <h1 className="mb-8 text-5xl font-semibold">{t("navHome_h1")}</h1>
            <p className="text-2xl">{t("navHome_p")}</p>
            <div className=" flex gap-4 ">
              <Link
                href="/"
                className="mt-8 flex h-14 w-44 items-center justify-center rounded-md bg-orange-800 text-lg duration-200 hover:-translate-y-1"
              >
                {t("navHome_startButton")}
              </Link>
              <Link
                href="/"
                className="mt-8 flex h-14 w-44 items-center justify-center rounded-md bg-orange-50 text-lg text-orange-800 duration-200 hover:-translate-y-1 "
              >
                {t("navHome_moreButton")}
              </Link>
            </div>
            <p className="mt-8 flex items-center">
              <span className=" font-semibold uppercase">
                {t("navHome_joinDiscord")}
              </span>
              <span className="mx-2 flex cursor-pointer items-center gap-0.5 rounded-lg bg-blue-900 px-1.5 py-1 text-lg font-semibold uppercase text-white">
                Discord <RiDiscordFill className="text-2xl" />
              </span>
              <span> {t("navHome_joinDiscord_text")}</span>
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
