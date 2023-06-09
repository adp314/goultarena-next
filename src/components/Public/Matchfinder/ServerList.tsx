import { ServerCard } from "./ServerCard";
import orukam from "@/assets/images/servBanners/orukam.png";
import defaultservers from "@/assets/images/servBanners/serveurs.png";
import { useState } from "react";
import { useQuery } from "react-query";

const getAllServersByCategory = (gameCategory: string) => {
  return useQuery(
    ["getServerById"],
    async () => {
      const response = await fetch(
        `/api/servers/get-server-byGame?gameCategory=${gameCategory}`
      );
      const responseJSON = await response.json();

      return responseJSON;
    },
    {
      enabled: !!gameCategory,
    }
  );
};

export const ServerList = ({ gameSelected }: { gameSelected: number }) => {
  const [gameCategory, setGameCategory] = useState<string>("dofus");
  if (gameSelected === 1) {
    setGameCategory("dofus");
  } else if (gameSelected === 2) {
    setGameCategory("dofus-retro");
  } else if (gameSelected === 3) {
    setGameCategory("dofus-touch");
  }

  const { data: allGameServers } = getAllServersByCategory(gameCategory);

  return (
    <div className="mx-auto h-screen w-full max-w-6xl">
      <div className="flex w-full max-w-6xl flex-wrap items-center justify-center gap-8 pt-20">
        <ServerCard
          image={defaultservers}
          title={"test"}
          players={20}
          date={"09/06/2023"}
          totalGames={20}
        />
      </div>
    </div>
  );
};
