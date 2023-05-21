import { type NextPage } from "next";
import { UpperNav } from "@/layouts/UpperNav";
import { NavHome } from "@/layouts/NavHome";
import { Footer } from "@/layouts/Footer";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { VersusModes } from "@/components/HomeComponents/VersusModes";
import { UseFlow } from "@/components/HomeComponents/UseFlow";
import { VipPass } from "@/components/HomeComponents/VipPass";
import { HomeCommunity } from "@/components/HomeComponents/HomeCommunity";
import { HomeFaq } from "@/components/HomeComponents/HomeFaq";
import { PaymentProviders } from "@/components/HomeComponents/PaymentProviders";
import { Reminder } from "@/components/HomeComponents/Reminder";

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
