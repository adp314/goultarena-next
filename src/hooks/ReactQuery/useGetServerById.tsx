import { useQuery } from "react-query";
import { UserData } from "@/types";

export const useGetServerById = (id: string) => {
  return useQuery(
    ["getServerById"],
    async () => {
      const response = await fetch(`/api/servers/get-server-byid?id=${id}`);
      const responseJSON = await response.json();

      return responseJSON;
    },
    {
      enabled: !!id,
    }
  );
};
