import { type NextPage } from "next";
import { UpperNav } from "@/layouts/UpperNav";
import { Nav } from "@/layouts/Nav";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Home: NextPage = () => {
  return (
    <div>
      <UpperNav />
      <Nav />
    </div>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};

export default Home;
