import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import coins from "@/assets/images/icons8-coins-94.png";
import { LoadingPage } from "../LoadingPage";
import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";
import { ConnectedDropdown } from "./ConnectedDropdown";

export const AuthNav = () => {
  const router = useRouter();
  const pathName = router.pathname;
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const userId = session?.user?.id;

  const getPageName = () => {
    const parts = pathName.split("/");
    const pageName = parts[parts.length - 1];
    if (pageName) {
      return pageName.charAt(0).toUpperCase() + pageName.slice(1);
    }
  };

  return (
    <div>
      {session ? (
        <div className="flex h-16 w-full items-center justify-between border-b-[1px] border-neutral-300 bg-neutral-100 px-8 text-neutral-800">
          <span className="mt-0.5 text-lg font-semibold">{getPageName()}</span>

          <div className="flex items-center">
            <div className="flex items-end">
              <Image src={coins} alt="CoinsIcon" className="h-6 w-6" />
              <span className="text-md ml-1 font-medium">34</span>
            </div>
            <span className="text-md ml-2 font-medium">-</span>
            <span className="text-md ml-2 font-medium">
              {session?.user.username}
            </span>
            <div className="relative ml-3">
              <Image
                src={session?.user.image as string}
                alt="test"
                height={40}
                width={40}
                className="rounded-md border-[1px] border-neutral-400 shadow-md"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              />
              {isOpen ? <ConnectedDropdown /> : <></>}
            </div>
          </div>
        </div>
      ) : (
        <LoadingPage />
      )}
    </div>
  );
};
