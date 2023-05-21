import Image from "next/image";
import goultarenalogo from "@/assets/images/goultarenalogo.png";
import Link from "next/link";
import {
  ViewGrid,
  GoogleDocs,
  ProfileCircle,
  PrivacyPolicy,
  StatUp,
  HandCash,
  CoinsSwap,
} from "iconoir-react";
import { FaDiscord, FaTwitter, FaYoutube, FaTiktok } from "react-icons/Fa";

export const DashboardMenu = () => {
  return (
    <div className="relative left-0 top-0 h-screen bg-white px-4">
      <div className="flex h-16 w-full items-center justify-start border-b-[1px] border-neutral-300">
        <div className="flex items-center">
          <Image
            src={goultarenalogo}
            alt="GoultarenaLogo"
            className="h-auto w-10"
          />
          <span className="ml-2 mt-1 font-bold uppercase">Goultarena.gg</span>
        </div>
      </div>
      <div className="mt-8 flex h-full w-full flex-col items-start">
        <div className="flex w-full cursor-pointer items-center rounded-md py-2 pl-2 text-neutral-500 hover:bg-neutral-100 hover:text-neutral-700">
          <ViewGrid strokeWidth={1} className="text-sm" />
          <span className="ml-1 text-sm font-medium">Dashboard</span>
        </div>
        <div className="mt-6 w-full">
          <span className="pl-2 text-xs font-semibold uppercase text-neutral-400">
            Orders
          </span>
          <ul className="mt-2 w-full ">
            <li className="flex w-full cursor-pointer items-center justify-start rounded-md py-2 pl-2 text-neutral-600 hover:bg-neutral-100 hover:text-neutral-800">
              <GoogleDocs strokeWidth={1} className="text-sm" />
              <span className="ml-2 text-sm ">My Orders</span>
            </li>
          </ul>
        </div>
        <div className="mt-8 w-full">
          <span className="pl-2 text-xs font-semibold uppercase text-neutral-400">
            Account
          </span>
          <ul className="mt-2 w-full ">
            <li className="flex w-full cursor-pointer items-center justify-start rounded-md py-2 pl-2 text-neutral-600 hover:bg-neutral-100 hover:text-neutral-800">
              <ProfileCircle strokeWidth={1} className="text-sm" />
              <span className="ml-2 text-sm ">Profile Settings</span>
            </li>
            <li className="mt-1 flex w-full cursor-pointer items-center justify-start rounded-md py-2 pl-2 text-neutral-600 hover:bg-neutral-100 hover:text-neutral-800">
              <PrivacyPolicy strokeWidth={1} className="text-sm" />
              <span className="ml-2 text-sm ">Billing Infos</span>
            </li>
            <li className="mt-1 flex w-full cursor-pointer items-center justify-start rounded-md py-2 pl-2 text-neutral-600 hover:bg-neutral-100 hover:text-neutral-800">
              <StatUp strokeWidth={1} className="text-sm" />
              <span className="ml-2 text-sm ">Statistics</span>
            </li>
          </ul>
        </div>
        <div className="mt-6 w-full">
          <span className="pl-2 text-xs font-semibold uppercase text-neutral-400">
            Cash Out
          </span>
          <ul className="mt-2 w-full ">
            <li className="flex w-full cursor-pointer items-center justify-start rounded-md py-2 pl-2 text-neutral-600 hover:bg-neutral-100 hover:text-neutral-800">
              <HandCash strokeWidth={1} className="text-sm" />
              <span className="ml-2 text-sm ">Cashouts</span>
            </li>
            <li className="flex w-full cursor-pointer items-center justify-start rounded-md py-2 pl-2 text-neutral-600 hover:bg-neutral-100 hover:text-neutral-800">
              <CoinsSwap strokeWidth={1} className="text-sm" />
              <span className="ml-2 text-sm ">Pending Demands</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="absolute bottom-8 flex w-full items-center justify-start gap-3.5 pl-2 ">
        <Link
          href=""
          className="rounded-md bg-neutral-200 px-2.5 py-2 text-center text-xl text-neutral-400 hover:bg-neutral-100 hover:text-neutral-500"
        >
          <FaTiktok />
        </Link>
        <Link
          href=""
          className="rounded-md bg-neutral-200 px-2.5 py-2 text-center text-xl text-neutral-400 hover:bg-neutral-100 hover:text-neutral-500"
        >
          <FaYoutube />
        </Link>
        <Link
          href=""
          className="rounded-md bg-neutral-200 px-2.5 py-2 text-center text-xl text-neutral-400 hover:bg-neutral-100 hover:text-neutral-500"
        >
          <FaTwitter />
        </Link>
        <Link
          href=""
          className="rounded-md bg-neutral-200 px-2.5 py-2 text-center text-xl text-neutral-400 hover:bg-neutral-100 hover:text-neutral-500"
        >
          <FaDiscord />
        </Link>
      </div>
    </div>
  );
};
