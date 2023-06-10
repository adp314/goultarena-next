import goultarenalogo from "@/assets/images/goultarenalogo.png";
import { useRouter } from "next/router";
import { LoginBtn } from "@/components/Public/LoginBtn";
import { ConnectedBtn } from "@/components/Public/ConnectedBtn";
import { TradBtn } from "@/components/Public/TradBtn";
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
import { useWindowSize } from "@/hooks/useWindowSize";
import { useState } from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";

interface Size {
  width: number;
  height: number;
}

interface NavProps {
  height: string;
  imageName: any;
  imageObjectPosition: string;
  imageOpacity: string;
  title: string;
}

export const Nav: React.FC<NavProps> = ({
  height,
  imageName,
  imageOpacity,
  title,
  imageObjectPosition,
}) => {
  const { data: session } = useSession();
  const { t } = useTranslation(["nav"]);
  const router = useRouter();
  const size: Size = useWindowSize();
  const [isSubNavOpen, setIsSubNavOpen] = useState<boolean>(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false);
  return (
    <div className={`relative ${height} w-full shadow-lg`}>
      <Image
        src={imageName}
        alt="Banner"
        width={1920}
        height={1080}
        className={`absolute -z-10 h-full w-full object-cover ${imageObjectPosition}`}
      />
      <div className={`h-full w-full bg-black ${imageOpacity} `}>
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 pt-8">
          <div className="flex items-center justify-start text-white">
            <div
              className="h-auto w-20 cursor-pointer hover:opacity-80"
              onClick={() => router.push("/home")}
            >
              <Image src={goultarenalogo} alt="GoultarenaLogo" />
            </div>
            <div className="ml-1">
              <TradBtn />
            </div>
          </div>
          {size.width >= 1024 && (
            <div className="flex items-center gap-8 text-white">
              <ul className="flex items-center justify-start gap-6 font-Poppins text-xl ">
                <Link
                  href={"/matchfinder"}
                  className="cursor-pointer font-medium hover:text-gray-200"
                >
                  {t("nav_matchfinder")}
                </Link>
                <li className="cursor-pointer font-medium hover:text-gray-200">
                  {t("nav_tournaments")}
                </li>
                <Link
                  href={"/shop"}
                  className="cursor-pointer font-medium hover:text-gray-200"
                >
                  {t("nav_shop")}
                </Link>
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
              <div className="mt-0.5 hover:opacity-90">
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
        <div className=" mx-auto flex h-full w-full max-w-7xl items-center justify-center text-white">
          <h1 className="mb-8 text-5xl font-bold tracking-wide">{title}</h1>
        </div>
      </div>
    </div>
  );
};
