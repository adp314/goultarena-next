
import { Megaphone } from "iconoir-react";
import { ChatBubble } from "iconoir-react";

export const UpperNav = () => {
  return (
    <div className="h-12 w-full bg-orange-800">
      <div className="flex h-full w-full items-center justify-between px-80 font-KoHo text-white">
        <div className=" flex items-center justify-start gap-2">
          <Megaphone strokeWidth="1.5" className=" text-lg" />
          <p className="mb-0.5 text-lg">
            Use code <span className="cursor-pointer underline">START23</span>{" "}
            for 10% off on your first order
          </p>
        </div>
        <div className="flex items-center justify-start gap-3">
          <ChatBubble strokeWidth="1.5" className="text-lg" />
          <p className="text-lg">Contact support</p>
        </div>
      </div>
    </div>
  );
};
