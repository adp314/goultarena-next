import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { User, Group, LogOut, Community } from "iconoir-react";

export const ConnectedDropdown = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const userId = session?.user?.id;

  const DUMMY_DATA_TEAM = { name: "test", id: "testteamid" };

  return (
    <>
      {session && (
        <ul
          className={`absolute  top-14 flex h-max w-full flex-col items-center rounded bg-white text-sm text-black shadow`}
        >
          <li
            className="flex w-full cursor-pointer items-center justify-start rounded-t px-8 py-3 hover:bg-orange-500 hover:text-white"
            onClick={() => router.push(`/player/${userId}`)}
          >
            <User strokeWidth={1.5} className="mr-4 w-5" />
            <span className="font-medium uppercase">My Profile</span>
          </li>
          <span className=" h-[1px] w-full bg-black bg-opacity-10" />
          <li
            className="flex w-full cursor-pointer items-center justify-start px-8 py-3 hover:bg-orange-500 hover:text-white"
            onClick={() => router.push(`/team/${DUMMY_DATA_TEAM.id}`)}
          >
            <Community strokeWidth={1.5} className="mr-4 w-5" />
            <span className="font-medium uppercase">My Team</span>
          </li>
          <span className=" h-[1px] w-full bg-black bg-opacity-10" />
          <li
            className="flex w-full cursor-pointer items-center justify-start rounded-b px-8 py-3 hover:bg-orange-500 hover:text-white"
            onClick={() => void signOut()}
          >
            <LogOut strokeWidth={1.5} className="mr-4 w-5" />
            <span className="font-medium uppercase">Logout</span>
          </li>
        </ul>
      )}
    </>
  );
};
