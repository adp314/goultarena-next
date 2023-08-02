import { useForm, SubmitHandler } from "react-hook-form";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { TextInput, Select } from "flowbite-react";
import { UserData } from "@/types";
import { useState, useEffect } from "react";
import { countries } from "countries-list";

type Inputs = {
  firstName: string;
  lastName: string;
  country: string | null;
  zipCode: string;
  street: string;
  number: string;
};

const getProfileUserData = () => {
  return useQuery(["profileUserData"], async () => {
    const response: Response = await fetch("/api/user/get-profile-infos", {
      method: "GET",
    });
    const data = await response.json();
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
    formState: { errors },
  } = useForm<Inputs>();

  useEffect(() => {
    if (profileUserData) {
      setValue("firstName", profileUserData.firstName);
      setValue("lastName", profileUserData.lastName);
      setValue("country", profileUserData.country);
      setValue("zipCode", profileUserData.zipCode);
      setValue("street", profileUserData.street);
      setValue("number", profileUserData.number);
    }
  }, [profileUserData, setValue]);

  const countryOptions = Object.entries(countries).map(([code, country]) => ({
    value: code,
    label: country.name,
  }));

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setValue("country", event.target.value);
  };

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
    console.log(data);
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
                  shadow
                  type="text"
                  className="w-3/4"
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
                  shadow
                  type="text"
                  className="w-3/4"
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
                  className="w-3/4"
                  defaultValue={profileUserData.country}
                  {...register("country")}
                  onChange={handleCountryChange}
                >
                  <option value="" disabled>
                    Select a country
                  </option>
                  {countryOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Select>
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
                  shadow
                  type="text"
                  className="w-3/4"
                  {...register("street", { required: true })}
                />
              </div>
              {errors.street && (
                <p className="ml-[26%] mt-1.5 text-xs text-orange-700">
                  street address is required
                </p>
              )}
              <div className=" mt-8 flex w-full items-center justify-between">
                <label htmlFor="zipcode" className="text-sm font-medium">
                  Zip Code
                </label>
                <TextInput
                  id="number"
                  shadow
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  className="w-3/4"
                  {...register("zipCode", { required: true })}
                />
              </div>
              {errors.lastName && (
                <p className="ml-[26%] mt-1.5 text-xs text-orange-700">
                  last name is required
                </p>
              )}
              <div className=" mt-8 flex w-full items-center justify-between ">
                <label htmlFor="number" className="text-sm font-medium">
                  Street number
                </label>
                <TextInput
                  id="number"
                  shadow
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  className="w-3/4"
                  {...register("number", { required: true })}
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
