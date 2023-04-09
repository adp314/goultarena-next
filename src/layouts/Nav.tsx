import goultarenalogo from "@/assets/images/goultarenalogo.png";
import { LoginBtn } from "@/components/LoginBtn";
import { ConnectedBtn } from "@/components/ConnectedBtn";
import { TradBtn } from "@/components/TradBtn";
import { useSession } from "next-auth/react";
import Image from "next/image";

export const Nav = () => {
  const { data: session } = useSession();
  return (
    <div className="h-80 w-full bg-[url('/assets/images/banner.jpg')] bg-cover bg-no-repeat shadow-md">
      <div className="h-full w-full bg-black bg-opacity-60 ">
        <nav className="flex w-full items-center justify-between px-80 pt-6">
          <div className="flex items-end justify-start gap-3 text-white">
            <div className="w-20">
              <Image src={goultarenalogo} alt="Socialenga logo" />
            </div>
            <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg bg-gray-500 bg-opacity-30 shadow-md">
              <TradBtn />
            </div>
          </div>
          <div className="flex items-center gap-6 font-KoHo text-white">
            <ul className="flex items-center justify-start gap-4 text-xl">
              <li>Matchfinder</li>
              <li>Shop</li>
              <li>More</li>
            </ul>
            {session ? <ConnectedBtn /> : <LoginBtn />}
          </div>
        </nav>
      </div>
    </div>
  );
};
