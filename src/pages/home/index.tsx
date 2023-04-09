import { type NextPage } from "next";
import { UpperNav } from "@/layouts/UpperNav";
import { Nav } from "@/layouts/Nav";
import { Footer } from "@/layouts/Footer";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Home: NextPage = () => {
  return (
    <div>
      <UpperNav />
      <Nav />
      <main className="h-screen w-full"></main>
      <Footer />
    </div>
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
