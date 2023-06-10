import { useQuery } from "react-query";

export const useGetServerById = (id: string) => {
  return useQuery(
    ["getServerById"],
    async () => {
      const response = await fetch(
        `/api/game-servers/get-server-byid?id=${id}`
      );
      const responseJSON = await response.json();

      return responseJSON;
    },
    {
      enabled: !!id,
    }
  );
};
