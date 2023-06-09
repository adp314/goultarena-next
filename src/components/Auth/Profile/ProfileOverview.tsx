import { useQuery } from "react-query";
import { UserData } from "@/types";
import { FaDiscord, FaTwitter, FaYoutube } from "react-icons/Fa";
import { Spinner } from "flowbite-react";
import Image from "next/image";
import coins from "@/assets/images/icons8-coins-94.png";
import perso from "@/assets/images/perso.png";
import { LoadingPage } from "@/components/Public/LoadingPage";
import { useGetCharacter } from "@/hooks/ReactQuery/useGetCharacter";
import { useGetUserData } from "@/hooks/ReactQuery/useGetUserData";

export const ProfileOverview = () => {
  const { data: userData } = useGetUserData();
  const { data: character } = useGetCharacter(userData);

  return (
    <>
      {userData ? (
        <div className="h-max w-80 rounded-lg bg-white shadow-md">
          <div className="px-6">
            <div className="flex items-center justify-center p-6">
              {character ? (
                <img
                  alt="character skin"
                  src={"data:image/png;base64," + character.image}
                />
              ) : (
                <Image src={perso} alt="default_perso" />
              )}
            </div>

            <span className=" flex justify-center text-lg font-semibold uppercase">
              {userData.username}
            </span>
            <div className="mt-6 h-[1px] w-full bg-neutral-200" />
          </div>

          <div className="px-6 py-6">
            <div>
              <span className="text-sm font-semibold uppercase">
                Goulta coins
              </span>
              <div className="mt-1.5 flex w-max items-end">
                <Image
                  src={coins}
                  alt="CoinsIcon"
                  className="mb-0.5 mr-1.5 h-7 w-7"
                />
                <span className="text-lg font-medium">34</span>
              </div>
            </div>
            <div className="mt-4">
              <span className="text-sm font-semibold uppercase">
                Social Networks
              </span>
              <div className="mt-1.5 flex w-max items-center">
                <FaDiscord className="text-3xl text-blue-800" />
                <FaYoutube className="ml-2 text-3xl text-orange-600" />
                <FaTwitter className=" ml-2 text-2xl text-blue-500" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <LoadingPage />
      )}
    </>
  );
};
