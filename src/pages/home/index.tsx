import { type NextPage } from "next";
import { UpperNav } from "@/layouts/UpperNav";
import { NavHome } from "@/layouts/NavHome";
import { Footer } from "@/layouts/Footer";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { VersusModes } from "@/components/Public/HomeComponents/VersusModes";
import { UseFlow } from "@/components/Public/HomeComponents/UseFlow";
import { VipPass } from "@/components/Public/HomeComponents/VipPass";
import { HomeCommunity } from "@/components/Public/HomeComponents/HomeCommunity";
import { HomeFaq } from "@/components/Public/HomeComponents/HomeFaq";
import { PaymentProviders } from "@/components/Public/HomeComponents/PaymentProviders";
import { Reminder } from "@/components/Public/HomeComponents/Reminder";

const Home: NextPage = () => {
  return (
    <>
      <UpperNav />
      <NavHome />
      <VersusModes />
      <UseFlow />
      <VipPass />
      <HomeCommunity />
      <HomeFaq />
      <PaymentProviders />
      <Reminder />
      <Footer />
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

export default Home;
