import { type NextPage } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import navweb from "@/assets/images/bg-iop-mob.jpg";
import { Arcade, Community, Calendar } from "iconoir-react";
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

  const formattedDate = new Date(serverData?.finishDate).toLocaleDateString(
    "fr",
    {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }
  );

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
      <div className="w-1/2">
        {serverData && (
          <div className="rounded-lg border-2  border-black ">
            <div className="relative h-28 w-80">
              <div className="h-full w-full bg-black bg-opacity-40">
                {serverData ? (
                  <Image
                    src={serverData?.image as string}
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
              <div className="flex w-full items-start justify-between">
                <div className="flex items-center text-neutral-100">
                  <span className="mr-2 text-sm">
                    {serverData.totalRegistred}
                  </span>
                  <Community className="w-5" />
                </div>
                <div className="flex items-center text-neutral-100">
                  <span className="mr-2 text-sm">{formattedDate}</span>
                  <Calendar strokeWidth={2} className="w-4" />
                </div>
                <div className="flex items-center text-neutral-100">
                  <span className="mr-2 text-sm">{serverData.totalGames}</span>
                  <Arcade strokeWidth={2} className="w-4" />
                </div>
              </div>
              <button
                className="mt-4 w-full rounded-lg bg-orange-700 bg-opacity-70 px-4 py-1 text-lg text-neutral-100 hover:bg-opacity-90"
                onClick={() => router.push(`matchfinder/${serverId}`)}
              >
                open
              </button>
            </div>
          </div>
        )}
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
