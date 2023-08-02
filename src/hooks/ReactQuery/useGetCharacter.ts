import { UserData } from "@/types";
import { useQuery } from "react-query";

type SkinImage = {
  src: string;
  image: string;
};

export const useGetCharacter = (profileUserData: UserData | undefined) => {
  return useQuery(
    ["characterData"],
    async () => {
      if (profileUserData) {
        const nibApiRes = await fetch(
          "https://dofuspp.vercel.app/api/skin?url=" +
            profileUserData.characterLink,
          {
            headers: {
              "Content-Type": "application/json",
            },
            method: "GET",
          }
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
