import { type NextPage } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import navweb from "@/assets/images/bg-iop-mob.jpg";
import {
  Arcade,
  Community,
  Calendar,
  Settings,
  Leaderboard,
} from "iconoir-react";
import defaultimage from "@/assets/images/servBanners/serveurs.png";
import { useGetServerById } from "@/hooks/ReactQuery/useGetServerById";
import { useSession } from "next-auth/react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Nav } from "@/layouts/Nav";
import { UpperNav } from "@/layouts/UpperNav";
import { LoadingPage } from "@/components/Public/LoadingPage";
import { useGetUserById } from "@/hooks/ReactQuery/useGetUserById";
import { useMutation } from "react-query";
import { Modal, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  characterLink: string;
  description: string;
  username: string;
  discord: string;
  twitter: string;
  youtube: string;
};

const DofusServer: NextPage = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const userId = session?.user.id;
  const { serverId } = router.query;
  const { data: serverData } = useGetServerById(serverId as string);
  const { data: userData } = useGetUserById(userId) ?? {};
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const formattedStartDate = new Date(serverData?.startDate).toLocaleDateString(
    "fr",
    {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }
  );

  const formattedFinishDate = new Date(
    serverData?.finishDate
  ).toLocaleDateString("fr", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const newRegisterMutation = useMutation(async () => {
    if (userData) {
      const userId = userData.id;
      const dataToPost = {
        serverId: serverId,
        userId: userId,
      };
      console.log(dataToPost);
      try {
        const response = await fetch("/api/game-servers/add-new-register", {
          method: "POST",
          body: JSON.stringify(dataToPost),
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          console.log("Failed to register user");
        }
        const result = await response.json();
        return result;
      } catch (error) {
        console.error(error);
      }
    }
  });

  const serverRegister = async () => {
    try {
      const response = await newRegisterMutation.mutateAsync();
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {serverData ? (
        <>
          <UpperNav />
          <Nav
            height="h-[28rem]"
            imageName={serverData?.linkImage as string}
            title={`${serverData?.name}`}
            imageOpacity="bg-opacity-50"
            imageObjectPosition="object-top"
          />
          <Modal
            show={isModalOpen}
            size="md"
            popup
            onClose={() => closeModal()}
          >
            <Modal.Header />
            <Modal.Body>
              <div className="space-y-6">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                  Create Match
                </h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="email" value="Your email" />
                    </div>
                    <TextInput
                      id="email"
                      placeholder="name@company.com"
                      required
                    />
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="password" value="Your password" />
                    </div>
                    <TextInput id="password" type="password" required />
                  </div>

                  <button
                    className=" flex w-full cursor-pointer items-center justify-center rounded-lg bg-orange-700 px-5 py-3 hover:bg-orange-800 "
                    type="submit"
                    onClick={() => openModal()}
                  >
                    <span className="text-sm uppercase text-neutral-100 hover:text-neutral-300">
                      Create
                    </span>
                  </button>
                </form>
              </div>
            </Modal.Body>
          </Modal>
          <div className="relative h-20 w-full bg-neutral-200 shadow-md">
            <div className="container absolute left-0 right-0 z-20 mx-auto flex max-w-7xl items-center justify-between py-4">
              <div className="flex ">
                <div className="flex h-8 w-24  justify-center border-b-2 border-orange-800 pt-1">
                  <span className="text-sm font-semibold uppercase text-orange-800">
                    All
                  </span>
                </div>
                <div className="flex h-8 w-24 cursor-pointer justify-center border-b border-neutral-400 pt-1">
                  <span className="text-sm font-semibold uppercase text-neutral-700">
                    Solo
                  </span>
                </div>
                <div className="flex h-8 w-24 cursor-pointer justify-center border-b border-neutral-400 pt-1">
                  <span className="text-sm  font-semibold uppercase text-neutral-700">
                    Duo
                  </span>
                </div>
                <div className="flex h-8 w-24 cursor-pointer justify-center border-b border-neutral-400 pt-1">
                  <span className="text-sm font-semibold uppercase text-neutral-700">
                    Trio
                  </span>
                </div>
                <div className="flex h-8 w-24 cursor-pointer justify-center border-b border-neutral-400 pt-1">
                  <span className="text-sm font-semibold uppercase text-neutral-700">
                    Quatuor
                  </span>
                </div>
              </div>
              <div className="flex">
                <div className="flex items-center">
                  <Settings
                    strokeWidth={2}
                    className="mr-2 h-7 w-7 rounded bg-neutral-700 p-1 text-neutral-200"
                  />
                  <span className="text-sm uppercase text-neutral-700">
                    Parameters & Rules
                  </span>
                </div>
                <div className="ml-4 flex items-center">
                  <Leaderboard
                    strokeWidth={1.9}
                    className="mr-2 h-7 w-7 rounded bg-neutral-700 p-1 text-neutral-200"
                  />
                  <span className="text-sm uppercase text-neutral-700">
                    Server Leaderboard
                  </span>
                </div>
                <button
                  className="ml-6 flex cursor-pointer items-center rounded-lg bg-orange-800 px-5 py-3 hover:bg-orange-700 "
                  onClick={() => openModal()}
                >
                  <span className="text-sm uppercase text-neutral-200">
                    Create match
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="container mx-auto mt-20 flex max-w-7xl justify-between">
            {serverData && userData ? (
              <div className=" w-max rounded-lg border-2 border-black ">
                <div className="relative h-28 w-96">
                  <div className="h-full w-full bg-black bg-opacity-40">
                    {serverData.linkImage ? (
                      <Image
                        src={serverData.linkImage}
                        alt="server image"
                        className="absolute -z-10 h-full w-full object-cover object-top"
                        width={300}
                        height={200}
                      />
                    ) : (
                      <Image
                        src={defaultimage}
                        alt="server image"
                        className="absolute -z-10 h-full w-full object-cover object-top"
                        width={300}
                        height={200}
                      />
                    )}
                  </div>
                  <span className="absolute inset-0 flex items-center justify-center text-2xl font-medium text-neutral-100">
                    {serverData.name}
                  </span>
                </div>
                <div className="h-[1px] w-full bg-black shadow-lg" />
                <div className="bg-neutral-800 p-4">
                  <div className="flex w-full items-start justify-between px-3">
                    <div className="flex items-center text-green-300">
                      <span className="mr-2 text-sm">{formattedStartDate}</span>
                      <Calendar strokeWidth={2} className="w-4" />
                    </div>
                    <div className="flex items-center text-neutral-100">
                      <span className="mr-2 text-sm">
                        {serverData.serverMatchs
                          ? serverData.serverMatchs.length
                          : 0}
                      </span>
                      <Arcade strokeWidth={2} className="w-4" />
                    </div>
                  </div>
                  <div className="mt-1 flex w-full items-start justify-between px-3">
                    <div className="flex items-center text-red-300">
                      <span className="mr-2 text-sm">
                        {formattedFinishDate}
                      </span>
                      <Calendar strokeWidth={2} className="w-4" />
                    </div>
                    <div className="flex items-center text-neutral-100">
                      <span className="mr-2 text-sm">
                        {serverData.totalPlayersRegistered}
                      </span>
                      <Community className="w-5" />
                    </div>
                  </div>
                  {!session ? (
                    <button
                      className="mt-4 w-full rounded-lg bg-orange-700 bg-opacity-70 px-4 py-1 text-lg text-neutral-100 hover:bg-opacity-90"
                      onClick={() => router.push(`ladders/${serverId}`)}
                      disabled={
                        !session ||
                        userData?.serverRegistered?.includes(serverData.id)
                      }
                    >
                      Connect you !
                    </button>
                  ) : (
                    <button
                      className={`mt-4 w-full rounded-lg bg-opacity-70 px-4 py-1 text-lg  ${
                        userData &&
                        serverData &&
                        userData.serverRegistered?.includes(serverData.id)
                          ? "bg-neutral-600 text-neutral-400"
                          : "bg-orange-700 text-neutral-100 hover:bg-opacity-90"
                      }`}
                      onClick={() => serverRegister()}
                      disabled={
                        !session ||
                        userData?.serverRegistered?.includes(serverData?.id)
                      }
                    >
                      {userData &&
                      userData.serverRegistered?.includes(serverData.id)
                        ? "Already registered"
                        : "Register"}
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <LoadingPage />
            )}

            <div className="ml-20 w-full border-2"></div>
          </div>

          <div>{serverData ? serverData.id : "no server id"}</div>
        </>
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

export default DofusServer;
