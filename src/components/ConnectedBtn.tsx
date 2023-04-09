import { useSession, signOut } from "next-auth/react";
import { useState } from "react";
import { useTranslation } from "next-i18next";
import { Coin } from "iconoir-react";
import Image from "next/image";

export const ConnectedBtn = () => {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation(["nav"]);

  return (
    <>
      {session && (
        <div>
          <div
            className="relative flex h-11 w-44 cursor-pointer items-center justify-end gap-3 rounded-full bg-orange-800 pr-2 shadow-md"
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
            {isOpen && (
              <ul className="absolute top-20 flex h-max w-24 flex-col items-center justify-center gap-2 rounded-xl bg-white py-3">
                <li className="flex items-center justify-center gap-2 text-black">
                  {" "}
                  <Coin /> 777
                </li>
                <span className="h-0.5 w-[50%] rounded-full bg-black bg-opacity-20"></span>
                <li className="text-black" onClick={() => void signOut()}>
                  Logout
                </li>
              </ul>
            )}
          </div>
        </div>
      )}
    </>
  );
};
