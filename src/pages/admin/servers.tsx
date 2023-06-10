import { getServerAuthSession } from "@/server/auth";
import type { GetServerSidePropsContext, NextPage } from "next";
import AdminSideBar from "@/components/Auth/Admin/AdminSideBar";
import { useForm, SubmitHandler } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { TextInput } from "flowbite-react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Link from "next/link";

type Inputs = {
  name: string;
  startDate: Date | null;
  finishDate: Date | null;
  gameCategory: string;
  linkImage?: string;
};

interface MyPageProps {
  userId: string;
}

const AdminServers: NextPage<MyPageProps> = ({ userId }) => {
  const queryClient = useQueryClient();
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [finishDate, setFinishDate] = useState<Date | null>(null);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Inputs>();

  const newServerMutation = useMutation(
    async (data: Inputs) => {
      try {
        if (startDate !== null) {
          data.startDate = new Date(startDate);
        }

        if (finishDate !== null) {
          data.finishDate = new Date(finishDate);
        }

        const dataToPost = { ...data, userId };

        const response = await fetch("/api/admin/servers/create-new-server", {
          method: "POST",
          body: JSON.stringify(dataToPost),
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          console.log("Failed to create server data");
        }
        const result = await response.json();
        return result;
      } catch (error) {
        console.error(error);
      }
    },
    {
      onSuccess: () => {
        // queryClient.invalidateQueries("profileUserData");
        console.log("server created");
      },
    }
  );

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      console.log(data);
      const response = await newServerMutation.mutateAsync(data);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-neutral-200 ">
      <div className="container mx-auto">
        <div className="flex h-screen w-full flex-col justify-between py-10 lg:flex-row">
          <AdminSideBar />
          <div className="mt-10 flex h-full w-full items-center justify-center rounded bg-white text-neutral-800 lg:ml-12 lg:mt-0">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full max-w-4xl px-8 py-10"
            >
              <span className="font-medium uppercase">Create New Server</span>
              <div className="mt-4 h-[1px] w-full bg-neutral-200" />
              <div className=" mt-8 flex w-full items-center justify-between">
                <label htmlFor="name" className="text-sm font-medium">
                  Server Name
                </label>
                <TextInput
                  id="name"
                  placeholder="Orukam IV"
                  shadow
                  type="text"
                  className="w-3/4"
                  {...register("name")}
                />
              </div>
              {errors.name && (
                <p className="mt-1.5 text-xs text-orange-700">
                  servername is required
                </p>
              )}
              <div className=" mt-8 flex w-full items-center justify-between">
                <label htmlFor="startDate" className="text-sm font-medium">
                  Start Date
                </label>
                <div className="w-3/4">
                  <DatePicker
                    id="startDate"
                    placeholderText="Start Date"
                    selected={startDate}
                    onChange={(date: any) => setStartDate(date)}
                    dateFormat="dd/MM/yyyy"
                    className="w-full rounded-lg border-gray-300 bg-gray-50 shadow-sm"
                  />
                </div>
              </div>
              {errors.startDate && (
                <p className=" mt-1.5 text-xs text-orange-700">
                  startDate is required
                </p>
              )}

              <div className=" mt-8 flex w-full items-center justify-between">
                <label htmlFor="finishDate" className="text-sm font-medium">
                  Finish Date
                </label>
                <div className="w-3/4">
                  <DatePicker
                    id="finishDate"
                    placeholderText="Finish Date"
                    selected={finishDate}
                    onChange={(date: any) => setFinishDate(date)}
                    dateFormat="dd/MM/yyyy"
                    className="w-full rounded-lg border-gray-300 bg-gray-50 shadow-sm"
                  />
                </div>
              </div>
              {errors.finishDate && (
                <p className=" mt-1.5 text-xs text-orange-700">
                  finishDate is required
                </p>
              )}

              <div className="mt-8 flex w-full items-center justify-between">
                <label htmlFor="gameCategory" className="text-sm font-medium">
                  Server Name
                </label>
                <TextInput
                  id="gameCategory"
                  placeholder="Dofus"
                  shadow
                  type="text"
                  className="w-3/4"
                  {...register("gameCategory", { required: true })}
                />
              </div>
              {errors.gameCategory && (
                <p className="mt-1.5 text-xs text-orange-700">
                  gameCategory is required
                </p>
              )}
              <div className=" my-8 flex w-full items-center justify-between">
                <label htmlFor="linkImage" className="text-sm font-medium">
                  Link image Server
                </label>
                <TextInput
                  id="linkImage"
                  placeholder="llink here"
                  shadow
                  type="text"
                  className="w-3/4"
                  {...register("linkImage")}
                />
              </div>
              <Link
                href="https://imgur.com/upload"
                className="rounded bg-neutral-700 px-1.5 py-1 text-white"
              >
                {" "}
                UPLOAD IMAGE LINK HERE{" "}
              </Link>
              <div className="mt-4 h-[1px] w-full bg-neutral-200" />
              <button
                type="submit"
                disabled={newServerMutation.isLoading}
                className="mt-8 flex w-40 items-center justify-center rounded-lg bg-orange-700 py-3.5 text-sm font-medium text-white"
              >
                {newServerMutation.isLoading ? "Loading..." : "Create Server"}
              </button>
            </form>
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
    props: {
      userId: session.user.id,
    },
  };
};

export default AdminServers;
