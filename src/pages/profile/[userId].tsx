import { type NextPage } from "next";
import { useRouter } from "next/router";
import { UpperNav } from "@/layouts/UpperNav";
import { Nav } from "@/layouts/Nav";
import { Footer } from "@/layouts/Footer";
import { useGetUserById } from "@/hooks/ReactQuery/useGetUserById";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { LoadingPage } from "@/components/LoadingPage";

const Profil: NextPage = () => {
  const router = useRouter();
  const { userId } = router.query;
  const { data: userData } = useGetUserById(userId as string);

  return (
    <>
      {userData ? (
        <div className="relative w-full">
          <UpperNav />
          <Nav />
          <div className="relative h-screen w-full">
            <div className="absolute -top-24 left-0 right-0 mx-auto w-full max-w-5xl  ">
              <div className="mb-2 mr-2 text-center text-4xl font-medium tracking-wider text-neutral-200 text-opacity-50">
                <h2> {userData.username}</h2>
              </div>
              <div className="flex h-32 justify-evenly rounded-md bg-gradient-to-br from-neutral-300 via-neutral-300 to-neutral-100 px-6 py-4 text-neutral-800 shadow-lg">
                <div className="my-auto flex flex-col text-center">
                  <span className="text-2xl font-semibold text-orange-700">
                    Rank
                  </span>
                  <span className="mt-2 text-2xl font-bold "># 0</span>
                </div>
                <div className="h-full w-[1px] bg-neutral-800" />
                <div className="my-auto flex flex-col text-center">
                  <span className="text-2xl font-semibold text-orange-700">
                    Earnings
                  </span>
                  <span className="mt-2 text-2xl font-bold">0 €</span>
                </div>
                <div className="h-full w-[1px] bg-neutral-800" />
                <div className="my-auto flex flex-col text-center">
                  <span className="text-2xl font-semibold text-orange-700">
                    Count Stats
                  </span>
                  <span className="mt-2 text-2xl font-bold">
                    {userData.totalWins} <span>W</span> - {userData.totalDraws}{" "}
                    D -{userData.totalLooses} L
                  </span>
                </div>
                <div className="h-full w-[1px] bg-neutral-800" />

                <div className="my-auto flex flex-col text-center">
                  <span className="text-2xl font-semibold text-orange-700">
                    Recent matchs
                  </span>
                  <span className="mt-2 text-2xl font-bold">No match</span>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      ) : (
        <LoadingPage />
      )}
    </>
  );
};

export const getServerSideProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "nav"])),
    },
  };
};

export default Profil;
