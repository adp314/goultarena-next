import { useQuery } from "react-query";
import { UserData } from "@/types";
import { FaDiscord, FaTwitter, FaYoutube, FaTiktok } from "react-icons/Fa";
import Image from "next/image";
import coins from "@/assets/images/icons8-coins-94.png";
import { LoadingPage } from "@/components/LoadingPage";

type SkinImage = {
  src: string;
  image: string;
};

const getProfileUserData = () => {
  return useQuery(["profileUserData"], async () => {
    const response: Response = await fetch("/api/user/get-profile-infos");
    const data: UserData = await response.json();
    return data;
  });
};

const getCharacter = (profileUserData: UserData | undefined) => {
  return useQuery(
    ["characterData"],
    async () => {
      if (profileUserData) {
        const nibApiRes = await fetch(
          "https://dofuspp.nib.gg/api/skin?url=" + profileUserData.characterLink
        );
        const nibApiResJSON = (await nibApiRes.json()) as SkinImage;
        return nibApiResJSON;
      }
    },
    {
      enabled: Boolean(profileUserData),
    }
  );
};

export const ProfileOverview = () => {
  const { data: profileUserData } = getProfileUserData();
  const { data: character } = getCharacter(profileUserData);

  return (
    <>
      {profileUserData && character ? (
        <div className="h-max w-80 rounded-lg bg-white shadow-md">
          <div className="px-6">
            <div className="flex items-center justify-center p-6">
              <img
                alt="character skin"
                src={"data:image/png;base64," + character.image}
              />
            </div>
            <span className=" flex justify-center text-lg font-semibold uppercase">
              {profileUserData.username}
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
