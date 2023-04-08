import goultarenalogo from "@/assets/images/goultarenalogo.png";
import Image from "next/image";
import { MdTranslate } from "react-icons/md";

export const Nav = () => {
  return (
    <div className="h-80 w-full bg-[url('/assets/images/banner.jpg')] bg-cover bg-no-repeat shadow-md">
      <div className="h-full w-full bg-black bg-opacity-60 ">
        <nav className="flex w-full items-center justify-between px-80 pt-6">
          <div className="flex items-center justify-start gap-5 text-white">
            <div className="w-20">
              <Image src={goultarenalogo} alt="Socialenga logo" />
            </div>
            <div className="flex h-8 w-10 cursor-pointer items-center justify-center rounded-lg bg-gray-500 bg-opacity-30 shadow-md">
              <MdTranslate className="text-xl text-gray-100 text-opacity-30" />
            </div>
          </div>
          <div className="flex items-center gap-6 font-KoHo text-white">
            <ul className="flex items-center justify-start gap-4 text-xl">
              <li>Matchfinder</li>
              <li>Shop</li>
              <li>More</li>
            </ul>
            <div className="flex h-11 w-44 items-center justify-center rounded-full bg-orange-800 shadow-md">
              <p className="text-lg uppercase">SignIn / Login</p>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
