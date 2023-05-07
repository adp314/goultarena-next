import { Megaphone } from "iconoir-react";
import { ChatBubble } from "iconoir-react";

export const UpperNav = () => {
  return (
    <div className="h-12 w-full bg-orange-800">
      <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between px-6 font-Poppins text-white">
        <div className=" flex items-center justify-start">
          <Megaphone strokeWidth="1.5" />
          <p className="mb-0.5 ml-2 text-xs sm:text-base">
            Use code <span className="cursor-pointer underline">START23</span>{" "}
            for 10% off on your first order
          </p>
        </div>
        <div className="flex items-center justify-start">
          <ChatBubble strokeWidth="1.5" />
          <p className="ml-3 hidden sm:block">Contact support</p>
        </div>
      </div>
    </div>
  );
};
