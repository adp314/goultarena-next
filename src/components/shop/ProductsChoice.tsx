import advanced_coins from "@/assets/images/icons8-coins-94.png";
import basic_coins from "@/assets/images/icons8-dollar-coin-96.png";
import cash from "@/assets/images/icons8-cash-96.png";
import { ProductCard } from "./ProductCard";

export const ProductsChoice = () => {
  return (
    <div className="absolute -top-16 left-0 right-0 mx-auto h-80  w-full max-w-6xl ">
      <div className="flex items-center justify-evenly">
        <ProductCard
          src={basic_coins}
          alt="basic_pack_img"
          packName="Basic"
          packPrice="4,99 €"
          packDescription="Perfect for start your first experience !"
        />
        <ProductCard
          src={advanced_coins}
          alt="advanced_pack_img"
          packName="Advanced"
          packPrice="9,99 €"
          packDescription="Your are confident, take benefits !"
        />
        <ProductCard
          src={cash}
          alt="confirmed_pack_img"
          packName="Confirmed"
          packPrice="19,99 €"
          packDescription="
          This pack is for confirmed players, win 1 €."
        />
      </div>
    </div>
  );
};
