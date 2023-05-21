import { AuthNav } from "@/components/Auth/AuthNav";
import { DashboardMenu } from "@/components/Auth/DashboardMenu";
import { type NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Dashboard: NextPage = () => {
  return (
    <>
      <div className="fixed left-0 top-0 w-64">
        <DashboardMenu />
      </div>
      <div className="ml-64">
        <AuthNav />
      </div>
    </>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "nav"])),
    },
  };
};

export default Dashboard;
