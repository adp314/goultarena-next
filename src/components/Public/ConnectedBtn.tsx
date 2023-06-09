import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";

export const ConnectedBtn = () => {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <>
      {session && (
        <div
          className="relative flex h-11 w-max cursor-pointer items-center justify-end gap-3 rounded-full bg-orange-800 px-4 font-Poppins shadow-md"
          onClick={() => router.push(`/dashboard`)}
        >
          <p className="text-lg ">{session.user.username}</p>
          <Image
            src={session.user.image as string}
            alt="test"
            height={32}
            width={32}
            className="rounded-full"
          />
        </div>
      )}
    </>
  );
};
