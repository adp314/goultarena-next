import { type NextPage } from "next";
import { UpperNav } from "@/layouts/UpperNav";

import { Footer } from "@/layouts/Footer";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { HomeFaq } from "@/components/Public/HomeComponents/HomeFaq";
import { PaymentProviders } from "@/components/Public/HomeComponents/PaymentProviders";
import { Reminder } from "@/components/Public/HomeComponents/Reminder";
import { Nav } from "@/layouts/Nav";
import { ProductsChoice } from "@/components/Public/shop/ProductsChoice";
import navweb from "@/assets/images/bg-iop-mob.jpg";

const Shop: NextPage = () => {
  return (
    <>
      <UpperNav />
      <Nav
        height="h-[28rem]"
        imageName={navweb}
        title="Shop"
        imageOpacity="bg-opacity-50"
        imageObjectPosition="object-top"
      />
      <div className="relative h-[30rem] bg-white">
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

export default Shop;
