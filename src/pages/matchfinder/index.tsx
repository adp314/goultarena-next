import { type NextPage } from "next";
import { UpperNav } from "@/layouts/UpperNav";
import { useRouter } from "next/router";
import { Footer } from "@/layouts/Footer";
import goultarenalogo from "public/assets/images/banner.jpg";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Nav } from "@/layouts/Nav";
import { useState } from "react";
import { ServerList } from "@/components/Public/Matchfinder/ServerList";
import { ServerSelection } from "@/components/Public/Matchfinder/ServerSelection";

const Matchfinder: NextPage = () => {
  const [gameSelected, setGameSelected] = useState<number>(1);
  const handleGameSelection = (selected: number) => {
    setGameSelected(selected);
  };

  console.log(gameSelected);
  return (
    <>
      <UpperNav />
      <Nav
        height="h-96"
        imageName={goultarenalogo}
        title="Matchfinder"
        imageOpacity="bg-opacity-40"
        imageObjectPosition="object-top"
      />
      <div className="relative">
        <ServerSelection
          gameSelected={gameSelected}
          onGameSelected={handleGameSelection}
        />
        <ServerList gameSelected={gameSelected} />
      </div>
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

export default Matchfinder;
