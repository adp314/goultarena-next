import vs4 from "@/assets/images/versusModes/4vs4.png";
import vs3 from "@/assets/images/versusModes/3vs3.png";
import vs2 from "@/assets/images/versusModes/2vs2.png";
import vs1 from "@/assets/images/versusModes/1vs1.png";
import Image from "next/image";

export const VersusModes = () => {
  return (
    <section className=" bg-neutral-100 font-Poppins">
      <div className=" mx-auto flex h-[30rem] w-full max-w-7xl flex-col items-center justify-start px-4 pt-6 font-Poppins">
        <div className="mb-6 flex flex-col items-center justify-center text-black">
          <h2 className="mb-4 mt-8 text-lg font-bold uppercase text-orange-800">
            What we offer
          </h2>
          <h1 className="mb-8 text-4xl font-bold text-neutral-800">
            Versus Modes Availables
          </h1>
        </div>
        <div className="flex items-center gap-6">
          <div className="h-48 w-72 rounded-lg border border-gray-300 bg-white shadow-lg">
            <div className="flex items-center justify-center ">
              <Image src={vs4} alt="" className="mt-1 h-auto w-3/4" />
            </div>
            <p className="mt-1.5 text-center text-xl font-bold text-neutral-800">
              4 VS 4
            </p>
          </div>
          <div className="h-48 w-72 rounded-lg border border-gray-300 bg-white shadow-lg">
            <div className="flex items-center justify-center ">
              <Image src={vs3} alt="" className="mt-1 h-auto w-3/4" />
            </div>
            <p className="mt-1.5 text-center text-xl font-bold text-neutral-800">
              3 VS 3
            </p>
          </div>
          <div className="h-48 w-72 rounded-lg border border-gray-300 bg-white shadow-lg">
            <div className="flex items-center justify-center ">
              <Image src={vs2} alt="" className="mt-1 h-auto w-3/4" />
            </div>
            <p className="mt-1.5 text-center text-xl font-bold text-neutral-800">
              2 VS 2
            </p>
          </div>
          <div className="h-48 w-72 rounded-lg border border-gray-300 bg-white shadow-lg">
            <div className="flex items-center justify-center ">
              <Image src={vs1} alt="" className="mt-1 h-auto w-3/4" />
            </div>
            <p className="mt-1.5 text-center text-xl font-bold text-neutral-800">
              1 VS 1
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
