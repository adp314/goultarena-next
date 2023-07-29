import { type NextPage } from "next";
import { UpperNav } from "@/layouts/UpperNav";
import { useRouter } from "next/router";
import { Footer } from "@/layouts/Footer";
import navweb from "@/assets/images/bg-iop-mob.jpg";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Nav } from "@/layouts/Nav";
import { ServerList } from "@/components/Public/Ladders/ServerList";

const LaddersDofus: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <UpperNav />
      <Nav
        height="h-[28rem]"
        imageName={navweb}
        title="Ladders"
        imageOpacity="bg-opacity-50"
        imageObjectPosition="object-top"
      />
      <div className="relative">
        <div className="absolute -top-10 left-0 right-0 mx-auto w-full max-w-6xl">
          <div className="flex h-20 justify-evenly rounded-md bg-gradient-to-br from-neutral-300 via-neutral-200 to-neutral-100 px-6 py-4 text-neutral-800 shadow-lg">
            <div
              className="my-auto flex cursor-pointer flex-col text-center"
              onClick={() => router.push("/ladders/dofus")}
            >
              <span className={`text-xl font-semibold text-orange-700`}>
                Dofus
              </span>
            </div>
            <div className="h-full w-[1px] bg-neutral-800" />
            <div
              className="my-auto flex cursor-pointer flex-col text-center"
              onClick={() => router.push("/ladders/dofus-retro")}
            >
              <span className={`text-xl font-semibold text-neutral-800 `}>
                Dofus Retro
              </span>
            </div>
            <div className="h-full w-[1px] bg-neutral-800" />
            <div
              className="my-auto flex cursor-pointer flex-col text-center"
              onClick={() => router.push("/ladders/dofus-touch")}
            >
              <span className={`text-xl font-semibold text-neutral-800 `}>
                Dofus Touch
              </span>
            </div>
          </div>
        </div>
        <ServerList gameSelected={"dofus"} />
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

export default LaddersDofus;
