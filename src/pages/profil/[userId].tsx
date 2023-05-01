import { type NextPage } from "next";
import { useRouter } from "next/router";
import { UpperNav } from "@/layouts/UpperNav";
import { Nav } from "@/layouts/Nav";
import { Footer } from "@/layouts/Footer";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Profil: NextPage = () => {
  const router = useRouter();

  const { userId } = router.query;
  return (
    <div>
      <UpperNav />
      <Nav />
      <main className="h-screen w-full">
        <div> board page = {userId}</div>
      </main>
      <Footer />
    </div>
  );
};

// export const getStaticProps = async ({ locale }: { locale: string }) => {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, ["common", "nav"])),
//     },
//   };
// };

export default Profil;
