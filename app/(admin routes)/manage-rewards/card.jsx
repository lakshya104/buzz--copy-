import Image from "next/image";
import UpdateRewardBtn from "./update-reward-btn";

const Card = ({ name, image, description, text, active, code, id }) => {
  return (
    <div className="flex flex-col justify-between items-start bg-white h-full border border-gray-300 rounded-lg shadow-lg cursor-pointer p-4 min-h-[390px] min-w-[170px] hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <div className="w-full">
        <h2 className="font-semibold text-lg text-neutral-700 mb-2">
          Name: <span className="text-sky-700">{name}</span>
        </h2>
        <Image
          src={image}
          width={200}
          height={200}
          alt={name}
          className="object-fit w-full rounded-lg max-h-36 mb-2"
        />
      </div>
      <div className="space-y-3 flex-grow">
        <p className="text-neutral-800">
          <span className="font-semibold">Text:</span> {text}
        </p>
        <p className="text-neutral-800">
          <span className="font-semibold">Active:</span> {String(active)}
        </p>
        <p className="text-neutral-800">
          <span className="font-semibold">Code:</span> {code}
        </p>
        <p className="text-neutral-800">
          <span className="font-semibold">Description:</span> {description}
        </p>
      </div>
      <div className="w-full mt-4">
        <UpdateRewardBtn id={id} name={name} />
      </div>
    </div>
  );
};

export default Card;
