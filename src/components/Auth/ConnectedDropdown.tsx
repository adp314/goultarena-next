import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";

export const ConnectedDropdown = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const userId = session?.user?.id;

  return (
    <>
      {session && (
        <ul
          className={`absolute -left-14 top-14 flex h-max w-24 flex-col items-center justify-center rounded-xl bg-gray-400 text-white`}
        >
          <li
            className="py-2"
            onClick={() => router.push(`/profile/${userId}`)}
          >
            My Profile
          </li>
          <span className="h-[1px] w-full bg-white bg-opacity-10" />
          <li className="py-2" onClick={() => router.push(`/dashboard`)}>
            Billing
          </li>
          <span className="h-[1px] w-full bg-white bg-opacity-10" />
          <li className="py-2" onClick={() => void signOut()}>
            Logout
          </li>
        </ul>
      )}
    </>
  );
};
