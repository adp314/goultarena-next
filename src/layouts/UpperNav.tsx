import { Megaphone } from "iconoir-react";
import { ChatBubble } from "iconoir-react";
import { useTranslation } from "next-i18next";

export const UpperNav = () => {
  const { t } = useTranslation(["nav"]);
  return (
    <div className="h-12 w-full bg-orange-800">
      <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between px-6 font-Poppins text-white">
        <div className=" flex items-center justify-start">
          <Megaphone strokeWidth="1.5" />
          <p className=" ml-2 text-xs sm:text-base">
            {t("upperNav_text_a")}
            <span className="ml-1 cursor-pointer underline">
              {t("upperNav_span")}
            </span>
            {t("upperNav_text_b")}
          </p>
        </div>
        <div className="flex items-center justify-start">
          <ChatBubble strokeWidth="1.5" />
          <p className="ml-2 hidden sm:block">Support</p>
        </div>
      </div>
    </div>
  );
};
