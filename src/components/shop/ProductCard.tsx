import Image from "next/image";

interface ComponentProps {
  src: any;
  alt: string;

  packName: string;
  packPrice: string;
  packDescription: string;
}

export const ProductCard: React.FC<ComponentProps> = ({
  src,
  alt,

  packName,
  packPrice,
  packDescription,
}) => {
  return (
    <div className=" flex h-max w-72 flex-col items-center justify-center rounded-md bg-neutral-100 px-8 py-6  shadow-md">
      <div className={`mt-4 h-auto w-24`}>
        <Image src={src} alt={alt} className="h-full w-full" />
      </div>
      <span className="mt-6 text-xl font-bold">{packName}</span>
      <span className="mt-2 text-3xl font-bold">{packPrice}</span>
      <p className="mt-6 text-center">{packDescription}</p>
      <button className="mt-6 w-full rounded-lg bg-orange-800 py-4 text-white hover:bg-orange-700">
        Buy Now
      </button>
    </div>
  );
};
