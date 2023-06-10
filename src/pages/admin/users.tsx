import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { prisma } from "@/server/db";
import { getServerAuthSession } from "@/server/auth";
import type { GetServerSidePropsContext, NextPage } from "next";
import AdminSideBar from "@/components/Auth/Admin/AdminSideBar";

const AdminUsers: NextPage = () => {
  return (
    <div className="bg-neutral-200 ">
      <div className="container mx-auto">
        <div className="flex h-screen w-full flex-col justify-between py-10 lg:flex-row">
          <AdminSideBar />
          <div className="mt-10 flex h-full w-full items-center justify-center rounded bg-white text-neutral-800 lg:ml-12 lg:mt-0">
            DASHBOARD USERS PAGE
          </div>
        </div>
      </div>
    </div>
  );
};

// secure route
export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const session = await getServerAuthSession({
    req: context.req,
    res: context.res,
  });

  if (!session || session.user.role !== "ADMIN") {
    return {
      redirect: {
        destination: "/home",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
};

export default AdminUsers;
