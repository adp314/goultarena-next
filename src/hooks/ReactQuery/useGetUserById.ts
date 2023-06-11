import { useQuery } from "react-query";
import { UserData } from "@/types";

export const useGetUserById = (id: string | undefined) => {
  return useQuery(
    ["getUserById"],
    async () => {
      const response = await fetch(`/api/user/get-user-byid?id=${id}`);
      const responseJSON = await response.json();

      return responseJSON as UserData;
    },
    {
      enabled: !!id, // Enable the query only when `id` has a value
    }
  );
};
