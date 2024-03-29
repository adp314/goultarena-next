import { ServerCard } from "./ServerCard";
import { ServerData } from "@/types";
import { useState, useEffect } from "react";
import { LoadingPage } from "../LoadingPage";

export const ServerList = ({ gameSelected }: { gameSelected: string }) => {
  const [gameServers, setGameServers] = useState<ServerData[]>([]);
  const [game, setGame] = useState<string>("");
  useEffect(() => {
    const fetchGameServers = async () => {
      try {
        const response = await fetch(
          `/api/game-servers/get-servers-byGame?gameCategory=${gameSelected}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const responseJSON = await response.json();
        console.log(responseJSON);
        setGameServers(responseJSON);
        return responseJSON;
      } catch (error) {
        console.error(error);
      }
    };
    fetchGameServers();
  }, [gameSelected]);

  return (
    <div className="mx-auto h-screen w-full max-w-6xl">
      {gameServers && (
        <div className="flex w-full max-w-6xl flex-wrap items-center justify-center gap-8 pt-20">
          {gameServers.map((server: ServerData) => (
            <ServerCard
              key={server.id}
              image={server.linkImage as string}
              title={server.name}
              players={0}
              date={server.finishDate}
              totalGames={0}
              serverId={server.id}
              game={gameSelected}
            />
          ))}
        </div>
      )}
    </div>
  );
};
