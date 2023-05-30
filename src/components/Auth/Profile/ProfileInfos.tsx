import { useForm, SubmitHandler } from "react-hook-form";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { TextInput } from "flowbite-react";
import { UserData } from "@/types";

type Inputs = {
  characterLink: string;
  username: string;
  discord: string;
  twitter: string;
  youtube: string;
};

const getProfileUserData = () => {
  return useQuery(["profileUserData"], async () => {
    const response: Response = await fetch("/api/user/get-profile-infos", {
      method: "GET",
    });
    const data: UserData = await response.json();
    return data;
  });
};

export const ProfileInfos = () => {
  const { data: profileUserData } = getProfileUserData();
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const updateProfileUserMutation = useMutation(
    async (data: Inputs) => {
      const response = await fetch("/api/user/update-profile-infos", {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to update profile data");
      }

      const result = await response.json();
      return result;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("profileUserData");
      },
    }
  );

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const response = await updateProfileUserMutation.mutateAsync(data);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="ml-14 w-full max-w-3xl">
      {profileUserData && (
        <>
          <ul className="flex text-lg font-medium text-orange-700">
            <li>
              <p>Infos</p>
              <div className="mt-1 h-0.5 w-full bg-orange-700" />
            </li>

            <li className="ml-6 text-neutral-400">Stats</li>
          </ul>

          <div className="mt-8  w-full rounded-lg bg-white shadow-md">
            <div className="flex items-center p-6">
              <h2 className="font-medium">Edit Account Settings</h2>
            </div>

            <div className="h-[1px] w-full bg-neutral-200"></div>
            <form onSubmit={handleSubmit(onSubmit)} className="px-8 py-10">
              <div className=" flex w-full items-center justify-between">
                <label htmlFor="character" className="text-sm font-medium">
                  Character
                </label>
                <TextInput
                  id="character"
                  placeholder="Character page link"
                  shadow
                  type="text"
                  className="w-3/4"
                  defaultValue={profileUserData.characterLink}
                  {...register("characterLink")}
                />
              </div>
              <div className=" mt-8 flex w-full items-center justify-between">
                <label htmlFor="username" className="text-sm font-medium">
                  Username
                </label>
                <TextInput
                  id="username"
                  placeholder="Username#1234"
                  shadow
                  type="text"
                  className="w-3/4"
                  defaultValue={profileUserData.username}
                  {...register("username", { required: true })}
                />
              </div>
              {errors.username && (
                <p className="ml-[26%] mt-1.5 text-xs text-orange-700">
                  username is required
                </p>
              )}
              <div className="mt-8 h-[1px] w-full bg-neutral-200" />
              <div className=" mt-8 flex w-full items-center justify-between">
                <label htmlFor="discord" className="text-sm font-medium">
                  Discord
                </label>
                <TextInput
                  id="discord"
                  placeholder="Username#1234"
                  shadow
                  type="text"
                  className="w-3/4"
                  defaultValue={profileUserData.discord}
                  {...register("discord")}
                />
              </div>
              <div className=" mt-8 flex w-full items-center justify-between">
                <label htmlFor="twitter" className="text-sm font-medium">
                  Twitter
                </label>
                <TextInput
                  id="twitter"
                  placeholder="@Username"
                  shadow
                  type="text"
                  className="w-3/4"
                  defaultValue={profileUserData.twitter}
                  {...register("twitter")}
                />
              </div>
              <div className=" my-8 flex w-full items-center justify-between">
                <label htmlFor="youtube" className="text-sm font-medium">
                  Youtube
                </label>
                <TextInput
                  id="youtube"
                  placeholder="@MyChannel"
                  shadow
                  type="text"
                  className="w-3/4"
                  defaultValue={profileUserData.youtube}
                  {...register("youtube")}
                />
              </div>
              <div className="h-[1px] w-full bg-neutral-200" />
              <button
                type="submit"
                disabled={updateProfileUserMutation.isLoading}
                className="mt-8 flex w-40 items-center justify-center rounded-lg bg-orange-700 py-3.5 text-sm font-medium text-white"
              >
                {updateProfileUserMutation.isLoading
                  ? "Loading..."
                  : " Save Changes"}
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
};
