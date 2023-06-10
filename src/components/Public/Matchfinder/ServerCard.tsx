import Image from "next/image";
import defaultimage from "@/assets/images/servBanners/serveurs.png";
import { Arcade, Community, Calendar } from "iconoir-react";

import { useRouter } from "next/router";

interface ServerCardProps {
  image: string;
  title: string;
  players: number;
  date: string;
  totalGames: number;
  serverId: string;
}

export const ServerCard = ({
  image,
  title,
  players,
  date,
  totalGames,
  serverId,
}: ServerCardProps) => {
  const router = useRouter();
  const formattedDate = new Date(date).toLocaleDateString("fr", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <div className="rounded-lg border-2  border-black ">
      <div className="relative h-28 w-80">
        <div className="h-full w-full bg-black bg-opacity-40">
          {image ? (
            <Image
              src={image}
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
          {title}
        </span>
      </div>
      <div className="h-[1px] w-full bg-black shadow-lg" />
      <div className="bg-neutral-800 p-4">
        <div className="flex w-full items-start justify-between">
          <div className="flex items-center text-neutral-100">
            <span className="mr-2 text-sm">{players}</span>
            <Community className="w-5" />
          </div>
          <div className="flex items-center text-neutral-100">
            <span className="mr-2 text-sm">{formattedDate}</span>
            <Calendar strokeWidth={2} className="w-4" />
          </div>
          <div className="flex items-center text-neutral-100">
            <span className="mr-2 text-sm">{totalGames}</span>
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
  );
};
