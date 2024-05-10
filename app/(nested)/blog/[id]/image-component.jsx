import { ProgressBarLink } from "@/components/progress-bar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { BackHeader } from "../../backHeader";

const ImageComponent = ({ data }) => {
  return (
    <div className="lg:w-[700px] md:w-[500px] w-[320px] mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <BackHeader title={"Post"} />
      <Image
        className="w-full h-[320px] lg:h-[600px] object-cover object-center"
        src={data.url}
        alt={data.title}
        height={500}
        width={300}
      />
      <div className="p-4">
        <h2 className="text-2xl font-bold">{data.title}</h2>
        <h2 className="text-xl text-muted-foreground font-bold">{data.subTitle}</h2>
        <p className="mt-2 text-gray-600 text-justify">
          {data.description} 
        </p>
        <div className="mt-4 flex justify-center items-center">
          <ProgressBarLink href={`/quiz/${data.id}`}>
            <Button variant="super">Answer and win</Button>
          </ProgressBarLink>
        </div>
      </div>
    </div>
  );
};

export default ImageComponent;
