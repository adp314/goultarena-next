import { RiMessage3Fill } from "react-icons/ri";
import { BsMegaphoneFill } from "react-icons/bs";

export const UpperNav = () => {
  return (
    <div className="h-12 w-full bg-orange-800">
      <div className="flex h-full w-full items-center justify-between px-80 font-KoHo text-white">
        <div className="flex items-center justify-start gap-3">
          <BsMegaphoneFill className="text-lg" />
          <p className="text-lg">
            Use code START23 for 10% off on your first depot
          </p>
        </div>
        <div className="flex items-center justify-start gap-3">
          <RiMessage3Fill className="text-lg" />
          <p className="text-lg">Contact support</p>
        </div>
      </div>
    </div>
  );
};
