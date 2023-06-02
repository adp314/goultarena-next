import { useQuery } from "react-query";
import { UserData } from "@/types";

export const useGetUserById = (id: string) => {
  return useQuery(["getUserById"], async () => {
    const response = await fetch(`/api/user/get-user-byid?id=${id}`);
    const responseJSON = await response.json();

    return responseJSON as UserData;
  });
};
