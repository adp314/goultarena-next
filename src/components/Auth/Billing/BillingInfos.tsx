import { useForm, SubmitHandler } from "react-hook-form";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { TextInput } from "flowbite-react";
import { UserData } from "@/types";
import Select from "react-select";
import { countries } from "countries-list";

type Inputs = {
  firstName: string;
  lastName: string;
  country: countryType | null;
  zipCode: string;
  street: string;
  number: string;
};

type countryType = {
  value: string;
  label: string;
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

export const BillingInfos = () => {
  const { data: profileUserData } = getProfileUserData();
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const selectedCountry = watch("country");
  const countryOptions = Object.entries(countries).map(([code, country]) => ({
    value: code,
    label: country.name,
  }));

  const updateBillingMutation = useMutation(
    async (data: Inputs) => {
      const response = await fetch("/api/user/update-billing-infos", {
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
      const response = await updateBillingMutation.mutateAsync(data);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="ml-14 w-full max-w-3xl">
      {profileUserData && (
        <>
          <div className="mt-8  w-full rounded-lg bg-white shadow-md">
            <div className="flex items-center p-6">
              <h2 className="font-medium">Billing Informations</h2>
            </div>

            <div className="h-[1px] w-full bg-neutral-200"></div>
            <form onSubmit={handleSubmit(onSubmit)} className="px-8 py-10">
              <div className=" flex w-full items-center justify-between">
                <label htmlFor="firstName" className="text-sm font-medium">
                  First name
                </label>
                <TextInput
                  id="firstName"
                  placeholder="Kévin"
                  shadow
                  type="text"
                  className="w-3/4"
                  defaultValue={profileUserData.firstName}
                  {...register("firstName", { required: true })}
                />
              </div>
              {errors.firstName && (
                <p className="ml-[26%] mt-1.5 text-xs text-orange-700">
                  first name is required
                </p>
              )}
              <div className=" mt-8 flex w-full items-center justify-between">
                <label htmlFor="lastName" className="text-sm font-medium">
                  Last name
                </label>
                <TextInput
                  id="lastName"
                  placeholder="Durant"
                  shadow
                  type="text"
                  className="w-3/4"
                  defaultValue={profileUserData.lastName}
                  {...register("lastName", { required: true })}
                />
              </div>
              {errors.lastName && (
                <p className="ml-[26%] mt-1.5 text-xs text-orange-700">
                  last name is required
                </p>
              )}
              <div className=" mt-8 flex w-full items-center justify-between">
                <label htmlFor="country" className="text-sm font-medium">
                  Country
                </label>
                <Select
                  id="country"
                  name="country"
                  options={countryOptions}
                  className="select-billing"
                  value={selectedCountry}
                  onChange={(selectedOption) =>
                    setValue("country", selectedOption)
                  }
                  {...(register("country"), { required: true })}
                />
              </div>
              {errors.country && (
                <p className="ml-[26%] mt-1.5 text-xs text-orange-700">
                  country is required
                </p>
              )}

              <div className=" mt-8 flex w-full items-center justify-between ">
                <label htmlFor="street" className="text-sm font-medium">
                  Street address
                </label>
                <TextInput
                  id="street"
                  placeholder="Brakmar Street"
                  shadow
                  type="text"
                  className="w-3/4"
                  defaultValue={profileUserData.street}
                  {...(register("street"), { required: true })}
                />
              </div>
              {errors.street && (
                <p className="ml-[26%] mt-1.5 text-xs text-orange-700">
                  street address is required
                </p>
              )}
              <div className=" mt-8 flex w-full items-center justify-between ">
                <label htmlFor="number" className="text-sm font-medium">
                  Street number
                </label>
                <TextInput
                  id="number"
                  placeholder="14"
                  shadow
                  type="text"
                  className="w-3/4"
                  defaultValue={profileUserData.number}
                  {...(register("number"), { required: true })}
                />
              </div>
              {errors.number && (
                <p className="ml-[26%] mt-1.5 text-xs text-orange-700">
                  street number is required
                </p>
              )}
              <div className="mt-8 flex w-full items-center justify-between">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <TextInput
                  id="email"
                  placeholder="example@example.com"
                  shadow
                  type="email"
                  className="w-3/4"
                  value={profileUserData.email}
                  disabled
                />
              </div>
              <div className="mt-10 h-[1px] w-full bg-neutral-200" />
              <button
                type="submit"
                disabled={updateBillingMutation.isLoading}
                className="mt-8 flex w-40 items-center justify-center rounded-lg bg-orange-700 py-3.5 text-sm font-medium text-white"
              >
                {updateBillingMutation.isLoading
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
