import Image, { StaticImageData } from "next/image";
import { Arcade, Community, Calendar } from "iconoir-react";

import { useRouter } from "next/router";

interface ServerCardProps {
  image: StaticImageData;
  title: string;
  players: number;
  date: string;
  totalGames: number;
}

export const ServerCard = ({
  image,
  title,
  players,
  date,
  totalGames,
}: ServerCardProps) => {
  const router = useRouter();

  return (
    <div className="rounded-lg border-2  border-black ">
      <div className="relative h-28 w-80">
        <div className="h-full w-full bg-black bg-opacity-40">
          <Image
            src={image}
            alt="user_image"
            className="absolute -z-10 h-full w-full object-cover object-center"
          />
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
            <span className="mr-2 text-sm">{date}</span>
            <Calendar strokeWidth={2} className="w-4" />
          </div>
          <div className="flex items-center text-neutral-100">
            <span className="mr-2 text-sm">{totalGames}</span>
            <Arcade strokeWidth={2} className="w-4" />
          </div>
        </div>
        <button
          className="mt-4 w-full rounded-lg bg-orange-700 bg-opacity-70 px-4 py-1 text-lg text-neutral-100"
          onClick={() => router.push(`matchfinder/dofus/test`)}
        >
          open
        </button>
      </div>
    </div>
  );
};
