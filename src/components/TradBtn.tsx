import { Language } from "iconoir-react";
import { useRouter } from "next/router";
import { useState } from "react";

export const TradBtn = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const handleLanguageChange = (locale: string) => {
    void router.push(router.pathname, router.asPath, { locale });
  };

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="font-KoHo">
      <div
        className="relative mt-2 flex h-7 w-7 cursor-pointer text-gray-100 opacity-70 hover:text-white hover:opacity-90"
        onClick={toggleMenu}
      >
        <Language strokeWidth="1.5" className="h-full w-full " />
        {isOpen && (
          <ul className="absolute -right-1.5 top-12 flex h-14 w-10 flex-col items-center justify-center rounded-md bg-gray-500 bg-opacity-30 shadow">
            <li>
              <a
                className="text-base text-gray-300 hover:text-white"
                onClick={() => handleLanguageChange("en")}
              >
                EN
              </a>
            </li>
            <li>
              <a
                className="text-base  text-gray-300 hover:text-white"
                onClick={() => handleLanguageChange("fr")}
              >
                FR
              </a>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};
