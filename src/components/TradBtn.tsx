import flagFrance from "@/assets/images/countries/france.png";
import flagUK from "@/assets/images/countries/United_Kingdom.png";
import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";

export const TradBtn = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleLocaleChange = (selectedLocale: string) => {
    void router.push(router.pathname, router.asPath, {
      locale: selectedLocale,
    });
  };

  return (
    <div
      className="relative ml-1 mt-2 flex h-6 w-8 cursor-pointer "
      onClick={() => setIsOpen(!isOpen)}
    >
      {router.locale === "fr" ? (
        <Image
          src={flagFrance}
          alt="flagFR"
          className="h-full w-full rounded opacity-70 hover:opacity-90"
        />
      ) : (
        <Image
          src={flagUK}
          alt="flagUK"
          className="h-full w-full rounded opacity-70 hover:opacity-90"
        />
      )}
      {isOpen && (
        <ul className="absolute -left-0.5 top-12 flex h-14 w-max flex-col items-center justify-center rounded bg-neutral-100 text-neutral-800 shadow">
          <li>
            <a
              className="px-2 font-medium hover:text-orange-800"
              onClick={() => handleLocaleChange("en")}
            >
              EN
            </a>
          </li>
          <span className=" h-0.5 w-3/4 rounded-full bg-neutral-800 bg-opacity-20" />
          <li>
            <a
              className="px-2 font-medium hover:text-orange-800"
              onClick={() => handleLocaleChange("fr")}
            >
              FR
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};
