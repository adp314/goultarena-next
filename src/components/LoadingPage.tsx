import goultarenalogo from "@/assets/images/goultarenalogo.png";
import Image from "next/image";

export const LoadingPage = () => {
  return (
    <div className="absolute left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-gradient-to-b from-neutral-100 via-neutral-200 to-neutral-200">
      <Image
        src={goultarenalogo}
        alt="goultarenalogo"
        className="h-32 w-auto"
      />
    </div>
  );
};
