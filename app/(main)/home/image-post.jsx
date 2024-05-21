import { ProgressBarLink } from "@/components/progress-bar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const ImagePost = ({ title,url,description, subTitle, id }) => {
  return (
    <div className="max-w-[95%] my-6 xs:w-full lg:w-full rounded overflow-hidden shadow-lg">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl lg:text-2xl text-center font-bold text-gray-800 my-4">
          {title}
        </h2>
        <div className="flex justify-center items-center">
          <div className="w-full flex justify-center items-center h-auto p-1 lg:p-2 rounded-lg">
            <Image
              src={url}
              alt={description}
              width={500}
              height={500}
              className="w-[90%] h-auto rounded-lg bg-gray-200 p-1 lg:p-2"
            />
          </div>
        </div>
        <h2 className="text-lg lg:text-xl text-center font-semibold text-gray-600 my-3">
          {subTitle}
        </h2>
        <p className="text-gray-600 text-base lg:text-lg px-8 mb-6 text-justify">
          {description}
        </p>
      </div>
      <ProgressBarLink href={`blog/${id}`}>
        <Button
          variant="super"
          className="block text-white font-bold py-2 px-4 rounded mb-4 mx-auto w-[50%] text-center"
        >
          {" "}
          Read More
        </Button>
      </ProgressBarLink>
    </div>
  );
};

export default ImagePost;
