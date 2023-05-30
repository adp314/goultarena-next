import { AuthNav } from "@/components/Auth/AuthNav";
import { DashboardMenu } from "@/components/Auth/DashboardMenu";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { prisma } from "@/server/db";
import { getServerAuthSession } from "@/server/auth";

import type { GetServerSidePropsContext, NextPage } from "next";
import { ProfileOverview } from "@/components/Auth/Profile/ProfileOverview";
import { ProfileInfos } from "@/components/Auth/Profile/ProfileInfos";

const ProfileEdit: NextPage = () => {
  return (
    <>
      <div className="fixed left-0 top-0 w-64">
        <DashboardMenu />
      </div>
      <div className="ml-64">
        <AuthNav />
        <div className="mt-8 flex w-full justify-center">
          <ProfileOverview />
          <ProfileInfos />
        </div>
      </div>
    </>
  );
};

// secure route + translation
export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const session = await getServerAuthSession({
    req: context.req,
    res: context.res,
  });

  if (!session || !session.user) {
    return {
      redirect: {
        destination: "/home",
        permanent: false,
      },
    };
  }

  const locale = context.locale || "en";
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "nav"])),
    },
  };
};

export default ProfileEdit;
