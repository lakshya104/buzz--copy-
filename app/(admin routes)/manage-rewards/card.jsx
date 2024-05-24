import { Button } from "@/components/ui/button";
import UpdateRewardBtn from "./update-reward-btn";

const Card = ({ name, image, description, text, active, code, id }) => {
  return (
    <div
      className={
        "flex flex-col justify-between items-start h-full border-2 rounded-xl border-b-4 cursor-pointer p-3 pb-4 min-h-[390px] min-w-[170px]"
      }
    >
      <div className="min-h-[26px] w-full flex items-start justify-center">
        <h2 className="font-bold text-sm lg:text-base text-neutral-700">
          Name: <span className="text-sky-700">{name}</span>
        </h2>
      </div>
      <p className="text-sky-700 text-xs lg:text-sm lg:font-semibold mt-3">
        <span className="text-slate-700 border-b border-black mr-1">
          {" "}
          Text:{" "}
        </span>
        {text}
      </p>
      <p className="text-sky-700 text-xs lg:text-sm lg:font-semibold mt-3">
        <span className="text-slate-700 border-b border-black mr-1">
          {" "}
          Active:{" "}
        </span>
        {String(active)}
      </p>
      <p className="text-sky-700 text-xs lg:text-sm lg:font-semibold mt-3">
        <span className="text-slate-700 border-b border-black mr-1">
          {" "}
          Image Link:{" "}
        </span>
        {image}
      </p>
      <p className="text-sky-700 text-xs lg:text-sm lg:font-semibold mt-3">
        <span className="text-slate-700 border-b border-black mr-1">
          Code:
        </span>
        {code}
      </p>
      <p className="text-slate-900 text-xs lg:font-semibold mt-3">
        <span className="text-slate-700 border-b border-black mr-1">
          {" "}
          Description:
        </span>{" "}
        {description}
      </p>
      <UpdateRewardBtn id={id} name={name}/>
    </div>
  );
};

export default Card;
