import vs4 from "@/assets/images/versusModes/4vs4.png";
import vs3 from "@/assets/images/versusModes/3vs3.png";
import vs2 from "@/assets/images/versusModes/2vs2.png";
import vs1 from "@/assets/images/versusModes/1vs1.png";
import Image from "next/image";

export const VersusModes = () => {
  return (
    <section className="bg-neutral-100">
      <div className="homeSection h-max ">
        <div className="mt-14 text-center font-bold">
          <h2 className=" mb-4 text-lg uppercase text-orange-800">
            What versus we offer
          </h2>
          <h1 className="  text-4xl text-neutral-800">
            Versus Modes Availables
          </h1>
        </div>
        <div className="mb-14 flex w-full flex-col items-center justify-center lg:flex-row">
          <div className="mt-10 lg:mr-4">
            <div className=" rounded-lg border border-gray-300 bg-white shadow-lg lg:mt-0 lg:h-40 lg:w-56 xl:h-48 xl:w-72 ">
              <div className="flex items-center justify-center p-2">
                <Image src={vs4} alt="" className="pb-1" />
              </div>
            </div>
            <p className="mt-3 text-center text-xl font-bold text-neutral-800">
              4 VS 4
            </p>
          </div>
          <div className="mt-10 lg:mr-4">
            <div className=" rounded-lg border border-gray-300 bg-white shadow-lg lg:mt-0 lg:h-40 lg:w-56 xl:h-48 xl:w-72 ">
              <div className="flex items-center justify-center">
                <Image src={vs3} alt="" className="pb-1" />
              </div>
            </div>
            <p className="mt-3 text-center text-xl font-bold text-neutral-800">
              3 VS 3
            </p>
          </div>
          <div className=" mt-10 lg:mr-4">
            <div className=" rounded-lg border border-gray-300 bg-white shadow-lg lg:mt-0 lg:h-40 lg:w-56 xl:h-48 xl:w-72 ">
              <div className="flex items-center justify-center ">
                <Image src={vs2} alt="" className="pb-1" />
              </div>
            </div>
            <p className="mt-3 text-center text-xl font-bold text-neutral-800">
              2 VS 2
            </p>
          </div>
          <div className=" mt-10 ">
            <div className=" rounded-lg border border-gray-300 bg-white shadow-lg lg:mt-0 lg:h-40 lg:w-56 xl:h-48 xl:w-72 ">
              <div className="flex items-center justify-center ">
                <Image src={vs1} alt="" className="pb-1" />
              </div>
            </div>
            <p className="mt-3 text-center text-xl font-bold text-neutral-800">
              1 VS 1
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
