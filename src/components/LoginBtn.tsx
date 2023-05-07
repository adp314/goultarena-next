import { signIn } from "next-auth/react";
import { useTranslation } from "next-i18next";

export const LoginBtn = () => {
  const { t } = useTranslation(["nav"]);
  return (
    <div
      className="flex h-11 w-max cursor-pointer items-center justify-center rounded-full bg-orange-800 px-5 font-Poppins shadow-md duration-300 hover:bg-orange-700"
      onClick={() => void signIn()}
    >
      <p className="text-lg ">{t("nav_login")}</p>
    </div>
  );
};
