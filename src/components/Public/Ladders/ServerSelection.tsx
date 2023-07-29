import { useQueryClient } from "react-query";

interface ServerSelectionProps {
  gameSelected: number;
  onGameSelected: (selected: number) => void;
}

export const ServerSelection = ({
  gameSelected,
  onGameSelected,
}: ServerSelectionProps) => {
  const handleClick = (selected: number) => {
    onGameSelected(selected);
  };

  const queryClient = useQueryClient();

  return (
    <div className="absolute -top-10 left-0 right-0 mx-auto w-full max-w-6xl">
      <div className="flex h-20 justify-evenly rounded-md bg-gradient-to-br from-neutral-300 via-neutral-200 to-neutral-100 px-6 py-4 text-neutral-800 shadow-lg">
        <div
          className="my-auto flex cursor-pointer flex-col text-center"
          onClick={() => {
            handleClick(1);
          }}
        >
          <span
            className={`text-xl font-semibold ${
              gameSelected === 1 ? "text-orange-700" : "text-neutral-800"
            }`}
          >
            Dofus
          </span>
        </div>
        <div className="h-full w-[1px] bg-neutral-800" />
        <div
          className="my-auto flex cursor-pointer flex-col text-center"
          onClick={() => handleClick(2)}
        >
          <span
            className={`text-xl font-semibold ${
              gameSelected === 2 ? "text-orange-700" : "text-neutral-800"
            }`}
          >
            Dofus Retro
          </span>
        </div>
        <div className="h-full w-[1px] bg-neutral-800" />
        <div
          className="my-auto flex cursor-pointer flex-col text-center"
          onClick={() => handleClick(3)}
        >
          <span
            className={`text-xl font-semibold ${
              gameSelected === 3 ? "text-orange-700" : "text-neutral-800"
            }`}
          >
            Dofus Touch
          </span>
        </div>
      </div>
    </div>
  );
};
