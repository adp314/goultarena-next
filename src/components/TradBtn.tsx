import { Translate } from "iconoir-react";
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
    <div>
      <div
        className="relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-md bg-gray-500 bg-opacity-30 text-white"
        onClick={toggleMenu}
      >
        <Translate
          strokeWidth="1"
          className="text-xl text-gray-100 text-opacity-30"
        />
        {isOpen && (
          <ul className="absolute right-0 top-12 flex h-16 w-10 flex-col items-center justify-center rounded-md bg-gray-500 bg-opacity-30 p-1.5 shadow">
            <li>
              <a
                className="text-xl text-gray-100 text-opacity-30 hover:text-white"
                onClick={() => handleLanguageChange("en")}
              >
                EN
              </a>
            </li>
            <li>
              <a
                className="text-xl  text-gray-100 text-opacity-30 hover:text-white"
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
