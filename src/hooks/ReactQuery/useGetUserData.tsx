import { useQuery } from "react-query";
import { UserData } from "@/types";

export const useGetUserData = () => {
  return useQuery(["UserData"], async () => {
    const response: Response = await fetch("/api/user/get-userdata", {
      method: "GET",
    });
    const data: UserData = await response.json();
    return data;
  });
};
