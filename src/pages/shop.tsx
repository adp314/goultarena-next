import { type NextPage } from "next";
import { UpperNav } from "@/layouts/UpperNav";

import { Footer } from "@/layouts/Footer";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { HomeFaq } from "@/components/HomeComponents/HomeFaq";
import { PaymentProviders } from "@/components/HomeComponents/PaymentProviders";
import { Reminder } from "@/components/HomeComponents/Reminder";
import { Nav } from "@/layouts/Nav";
import { ProductsChoice } from "@/components/shop/ProductsChoice";
import navweb from "@/assets/images/bg-iop-mob.jpg";

const Home: NextPage = () => {
  return (
    <>
      <UpperNav />
      <Nav
        height="h-[30rem]"
        imageName={navweb}
        title="Shop"
        imageOpacity="bg-opacity-60"
        imageObjectPosition="object-top"
      />
      <div className="relative h-[40rem] bg-white">
        <ProductsChoice />
      </div>
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
