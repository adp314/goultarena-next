import { signIn } from "next-auth/react";
import { useTranslation } from "next-i18next";

export const LoginBtn = () => {
  const { t } = useTranslation(["nav"]);
  return (
    <div
      className="flex h-11 w-44 cursor-pointer items-center justify-center rounded-full bg-orange-800 shadow-md"
      onClick={() => void signIn()}
    >
      <p className="text-lg uppercase">{t("nav_login")}</p>
    </div>
  );
};
