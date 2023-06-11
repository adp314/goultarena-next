import { type NextPage } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import navweb from "@/assets/images/bg-iop-mob.jpg";
import {
  Arcade,
  Community,
  Calendar,
  Settings,
  Leaderboard,
} from "iconoir-react";
import defaultimage from "@/assets/images/servBanners/serveurs.png";
import { useGetServerById } from "@/hooks/ReactQuery/useGetServerById";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Nav } from "@/layouts/Nav";
import { UpperNav } from "@/layouts/UpperNav";

const DofusServer: NextPage = () => {
  const router = useRouter();
  const { serverId } = router.query;
  const { data: serverData } = useGetServerById(serverId as string);
  console.log(serverData);

  const formattedStartDate = new Date(serverData?.startDate).toLocaleDateString(
    "fr",
    {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }
  );

  const formattedFinishDate = new Date(
    serverData?.finishDate
  ).toLocaleDateString("fr", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <>
      <UpperNav />
      <Nav
        height="h-[28rem]"
        imageName={serverData?.linkImage as string}
        title={`${serverData?.name}`}
        imageOpacity="bg-opacity-50"
        imageObjectPosition="object-top"
      />
      <div className="w-full bg-neutral-200 shadow-md">
        <div className="container mx-auto flex max-w-7xl items-center justify-between py-4">
          <div className="flex">
            <div className="flex h-8 w-24 cursor-pointer justify-center border-b-2 border-orange-800 pt-1">
              <span className="text-sm font-semibold uppercase text-orange-800">
                All
              </span>
            </div>
            <div className="flex h-8 w-24 cursor-pointer justify-center border-b border-neutral-400 pt-1">
              <span className="text-sm font-semibold uppercase text-neutral-700">
                Solo
              </span>
            </div>
            <div className="flex h-8 w-24 cursor-pointer justify-center border-b border-neutral-400 pt-1">
              <span className="text-sm  font-semibold uppercase text-neutral-700">
                Duo
              </span>
            </div>
            <div className="flex h-8 w-24 cursor-pointer justify-center border-b border-neutral-400 pt-1">
              <span className="text-sm font-semibold uppercase text-neutral-700">
                Trio
              </span>
            </div>
            <div className="flex h-8 w-24 cursor-pointer justify-center border-b border-neutral-400 pt-1">
              <span className="text-sm font-semibold uppercase text-neutral-700">
                Quatuor
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="flex items-center">
              <Settings
                strokeWidth={2}
                className="mr-2 h-7 w-7 rounded bg-neutral-700 p-1 text-neutral-200"
              />
              <span className="text-sm uppercase text-neutral-700">
                Parameters & Rules
              </span>
            </div>
            <div className="ml-4 flex items-center">
              <Leaderboard
                strokeWidth={1.9}
                className="mr-2 h-7 w-7 rounded bg-neutral-700 p-1 text-neutral-200"
              />
              <span className="text-sm uppercase text-neutral-700">
                Server Leaderboard
              </span>
            </div>
            <button className="ml-6 flex items-center rounded-lg bg-orange-800 px-5 py-3 hover:bg-orange-700 ">
              <span className="text-sm uppercase text-neutral-200">
                Create match
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-20 flex max-w-7xl justify-between">
        {serverData && (
          <div className=" w-max rounded-lg border-2 border-black ">
            <div className="relative h-28 w-96">
              <div className="h-full w-full bg-black bg-opacity-40">
                {serverData.linkImage ? (
                  <Image
                    src={serverData.linkImage}
                    alt="server image"
                    className="absolute -z-10 h-full w-full object-cover object-top"
                    width={300}
                    height={200}
                  />
                ) : (
                  <Image
                    src={defaultimage}
                    alt="server image"
                    className="absolute -z-10 h-full w-full object-cover object-top"
                    width={300}
                    height={200}
                  />
                )}
              </div>
              <span className="absolute inset-0 flex items-center justify-center text-2xl font-medium text-neutral-100">
                {serverData.name}
              </span>
            </div>
            <div className="h-[1px] w-full bg-black shadow-lg" />
            <div className="bg-neutral-800 p-4">
              <div className="flex w-full items-start justify-between px-3">
                <div className="flex items-center text-green-300">
                  <span className="mr-2 text-sm">{formattedStartDate}</span>
                  <Calendar strokeWidth={2} className="w-4" />
                </div>
                <div className="flex items-center text-neutral-100">
                  <span className="mr-2 text-sm">
                    {serverData.serverMatchs
                      ? serverData.serverMatchs.length
                      : 0}
                  </span>
                  <Arcade strokeWidth={2} className="w-4" />
                </div>
              </div>
              <div className="mt-1 flex w-full items-start justify-between px-3">
                <div className="flex items-center text-red-300">
                  <span className="mr-2 text-sm">{formattedFinishDate}</span>
                  <Calendar strokeWidth={2} className="w-4" />
                </div>
                <div className="flex items-center text-neutral-100">
                  <span className="mr-2 text-sm">
                    {serverData.totalRegistered
                      ? serverData.totalRegistered
                      : 0}
                  </span>
                  <Community className="w-5" />
                </div>
              </div>
              <button
                className="mt-4 w-full rounded-lg bg-orange-700 bg-opacity-70 px-4 py-1 text-lg text-neutral-100 hover:bg-opacity-90"
                onClick={() => router.push(`matchfinder/${serverId}`)}
              >
                Register
              </button>
            </div>
          </div>
        )}
        <div className="ml-20 w-full border-2"></div>
      </div>
      <div>{serverData ? serverData.id : "no server id"}</div>
    </>
  );
};

export const getServerSideProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "nav"])),
    },
  };
};

export default DofusServer;
