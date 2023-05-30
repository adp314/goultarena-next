import goultarenalogo from "@/assets/images/goultarenalogo.png";
import Image from "next/image";

export const LoadingPage = () => {
  return (
    <div className="absolute left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-gradient-to-b from-neutral-100 via-neutral-300 to-neutral-300">
      <Image
        src={goultarenalogo}
        alt="goultarenalogo"
        className="mb-10 h-40 w-auto"
      />
    </div>
  );
};
