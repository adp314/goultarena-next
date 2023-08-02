import { type NextPage } from "next";
import { useRouter } from "next/router";
import { UpperNav } from "@/layouts/UpperNav";
import { Nav } from "@/layouts/Nav";

import { Footer } from "@/layouts/Footer";
import { useGetUserById } from "@/hooks/ReactQuery/useGetUserById";
import { useGetCharacter } from "@/hooks/ReactQuery/useGetCharacter";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { LoadingPage } from "@/components/Public/LoadingPage";
import navweb from "@/assets/images/bg-iop-mob.jpg";
import goultarenalogo from "public/assets/images/banner.jpg";
import { FaDiscord, FaTwitter, FaYoutube } from "react-icons/Fa";
import Image from "next/image";
import perso from "@/assets/images/perso.png";

const TeamProfile: NextPage = () => {
  const router = useRouter();
  const { userId } = router.query;
  const { data: userData } = useGetUserById(userId as string);
  const { data: character } = useGetCharacter(userData);

  return (
    <>
      {userData ? (
        <>
          <UpperNav />
          <Nav
            height="h-[28rem]"
            imageName={navweb}
            title="Profile"
            imageOpacity="bg-opacity-50"
            imageObjectPosition="object-top"
          />
          <div className="relative">
            <div className="absolute -top-12 left-0 right-0 mx-auto w-full max-w-5xl  ">
              <div className="flex h-32 justify-evenly rounded-md bg-gradient-to-br from-neutral-300 via-neutral-200 to-neutral-100 px-6 py-4 text-neutral-800 shadow-lg">
                <div className="my-auto flex flex-col text-center">
                  <span className="text-2xl font-semibold text-orange-700">
                    Rank
                  </span>
                  <span className="mt-2 text-2xl font-bold "># 0</span>
                </div>
                <div className="h-full w-[1px] bg-neutral-800" />
                <div className="my-auto flex flex-col text-center">
                  <span className="text-2xl font-semibold text-orange-700">
                    Earnings
                  </span>
                  <span className="mt-2 text-2xl font-bold">
                    {userData.userWallet.totalEarnings} €
                  </span>
                </div>
                <div className="h-full w-[1px] bg-neutral-800" />
                <div className="my-auto flex flex-col text-center">
                  <span className="text-2xl font-semibold text-orange-700">
                    Count Stats
                  </span>
                  <span className="mt-2 text-2xl font-bold">
                    {userData.gameInfos.totalWins} <span>W</span> -{" "}
                    {userData.gameInfos.totalDraws} D -{" "}
                    {userData.gameInfos.totalLooses} L
                  </span>
                </div>
                <div className="h-full w-[1px] bg-neutral-800" />

                <div className="my-auto flex flex-col text-center">
                  <span className="text-2xl font-semibold text-orange-700">
                    Recent matchs
                  </span>
                  <span className="mt-2 text-2xl font-bold">No match</span>
                </div>
              </div>
            </div>
            <div className="mx-auto mb-24 w-full max-w-5xl pt-24">
              <div className="my-12 flex items-center justify-between">
                <div>
                  <Image
                    src={userData.image}
                    alt="user_image"
                    height={144}
                    width={144}
                    className="rounded-md border border-neutral-300 shadow-md"
                  />
                </div>
                <div className="mb-2 mr-2 mt-4 text-center text-neutral-800">
                  <h2 className="text-4xl font-semibold uppercase italic tracking-wider">
                    {userData.username}
                  </h2>
                  <div className="mt-2 flex justify-center text-base">
                    <div className="flex items-center">
                      <FaDiscord className="mr-1 text-xl text-blue-800" />
                      <span>{userData.discord}</span>
                    </div>
                    <div className="flex items-center">
                      <FaTwitter className="ml-6 mr-1 text-lg text-blue-500" />
                      <span>{userData.twitter}</span>
                    </div>
                  </div>
                </div>
                <div className="flex h-36 w-36 items-center justify-center rounded-md border border-neutral-300 shadow-md">
                  <p className="uppercase italic text-neutral-400">unranked</p>
                </div>
              </div>
              <div className="mx-auto mb-10 mt-6 flex w-full max-w-3xl items-center justify-center">
                <div className="flex items-center justify-center ">
                  {character ? (
                    <img
                      alt="character skin"
                      src={"data:image/png;base64," + character.image}
                    />
                  ) : (
                    <Image src={perso} alt="default_perso" />
                  )}
                </div>
              </div>
              <div className="mx-auto w-full max-w-2xl ">
                <div className="flex w-full items-center justify-center rounded-md border border-neutral-300 py-16 shadow-md">
                  <p className=" text-neutral-600">
                    {userData.description
                      ? userData.description
                      : "no description..."}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </>
      ) : (
        <LoadingPage />
      )}
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

export default TeamProfile;
