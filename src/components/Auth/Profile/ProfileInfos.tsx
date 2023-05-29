import { useForm, SubmitHandler } from "react-hook-form";
import { useQuery, useMutation } from "react-query";
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
    const response: Response = await fetch("/api/user/get-profile-infos");
    const data: UserData = await response.json();
    return data;
  });
};

export const ProfileInfos = () => {
  const { data: profileUserData } = getProfileUserData();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      characterLink: profileUserData?.characterLink || "",
      discord: profileUserData?.discord || "",
      twitter: profileUserData?.twitter || "",
      youtube: profileUserData?.youtube || "",
    },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className="ml-14 w-full max-w-3xl">
      {profileUserData && (
        <>
          <ul className="flex text-lg font-medium text-neutral-500">
            <li>Infos</li>
            <li className="ml-6 text-neutral-300">Stats</li>
          </ul>

          <div className="mt-8  w-full rounded-lg bg-white shadow-md">
            <div className="flex items-center p-6">
              <h2 className="font-medium">Edit Account Settings</h2>
            </div>

            <div
              onSubmit={handleSubmit(onSubmit)}
              className="h-[1px] w-full bg-neutral-200"
            ></div>
            <form className="px-8 py-10">
              <div className=" flex w-full items-center justify-between">
                <label htmlFor="character" className="text-sm font-medium">
                  Character
                </label>
                <TextInput
                  id="character"
                  placeholder="Character page link"
                  shadow
                  type="email"
                  className="w-3/4"
                  defaultValue={profileUserData.characterLink}
                  {...register("characterLink")}
                />
              </div>
              <div className=" my-8 flex w-full items-center justify-between">
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
                  {...register("username")}
                />
              </div>
              <div className="h-[1px] w-full bg-neutral-200" />
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
                className="mt-8 flex items-center justify-center rounded-lg bg-orange-500 px-6 py-3 text-sm font-medium text-white"
              >
                Save Changes
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
};
