import { cn } from "@/lib/utils";
import Image from "next/image";
import RewardsBtn from "./rewards-btn";

const Card = ({ id, name, image, disabled, description }) => {
 
  return (
    <div
      className={cn(
        "flex flex-col justify-between items-center h-full border-2 rounded-xl border-b-4 hover:bg-sky-400/5 cursor-pointer active:border-b-2 p-3 pb-6 min-h-[370px] min-w-[170px]",
        disabled && "pointer-events-none opacity-50"
      )}
    >
      <div className="min-h-[24px] w-full flex items-start justify-center">
        <h2 className="font-bold text-center text-sm lg:text-base text-neutral-700">
          {name}
        </h2>
      </div>

      <Image
        src={image}
        alt={name}
        height={100}
        width={100}
        className="rounded-lg drop-shadow-md border object-cover"
      />
      <p className="text-neutral-700 text-center text-xs lg:font-semibold mt-3">
        {description}
      </p>
     <RewardsBtn disabled={disabled} id={id}/>
    </div>
  );
};

export default Card;
