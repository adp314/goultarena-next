import { type NextPage } from "next";
import { useRouter } from "next/router";
import { useGetServerById } from "@/hooks/ReactQuery/useGetServerById";

const DofusServer: NextPage = () => {
  const router = useRouter();
  const { serverId } = router.query;
  const { data: serverData } = useGetServerById(serverId as string);

  return <div>{serverData ? serverData.id : "no server id"}</div>;
};
export default DofusServer;
