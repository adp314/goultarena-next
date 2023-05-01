import { useSession, signOut } from "next-auth/react";
import { useState } from "react";
import { useTranslation } from "next-i18next";
import { Coin } from "iconoir-react";
import Image from "next/image";
import { useRouter } from "next/router";

export const ConnectedBtn = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { t } = useTranslation(["nav"]);
  const userId = session?.user?.id;

  return (
    <>
      {session && (
        <div
          className="relative flex h-11 w-max cursor-pointer items-center justify-end gap-3 rounded-full bg-orange-800 px-3 font-Poppins shadow-md"
          onClick={() => setIsOpen(!isOpen)}
        >
          <p className="text-lg uppercase">{session.user.name}</p>
          <Image
            src={session.user.image as string}
            alt="test"
            height={32}
            width={32}
            className="rounded-full"
          />

          <ul
            className={` absolute top-14 ${
              isOpen ? "visible" : "invisible"
            } flex h-max w-24 flex-col items-center justify-center rounded-xl bg-gray-400 bg-opacity-20 text-white`}
          >
            <li className="flex h-full w-full items-center justify-center rounded-t-xl bg-black bg-opacity-40 py-2 ">
              <span className="flex  h-full w-full items-center justify-center gap-2">
                <Coin /> <p className="text-lg"> 777</p>
              </span>
            </li>
            <span className="h-[1px] w-full bg-white bg-opacity-10" />
            <li className="py-2" onClick={() => void signOut()}>
              Account
            </li>
            <span className="h-[1px] w-full bg-white bg-opacity-10" />
            <li
              className="py-2"
              onClick={() => router.push(`/profile/${userId}`)}
            >
              Profil
            </li>
            <span className="h-[1px] w-full bg-white bg-opacity-10" />
            <li className="py-2" onClick={() => void signOut()}>
              Logout
            </li>
          </ul>
        </div>
      )}
    </>
  );
};
