"use client";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Skeleton } from "@/components/ui/skeleton";
import { ProgressBarLink } from "@/components/progress-bar";
import { Button } from "@/components/ui/button";
import { BackHeader } from "../../backHeader";

const VideoPlayer = ({ data }) => {
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  return (
    <div className="flex justify-center items-center flex-col my-8 lg:p-5 lg:w-[600px] w-[320px] mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
     <div className=" w-full"> <BackHeader title={"Post"} /></div>
      {!hasWindow ? (
        <Skeleton className="h-64 lg:h-96 bg-slate-300 rounded-none w-full" />
      ) : (
        <ReactPlayer
          width="100%"
          height="100%"
          url={data.url}
          playing={true}
          controls={true}
          light="https://buzz-navy.vercel.app/watch.svg"
          pip={true}
          muted={true}
          stopOnUnmount={false}
          className="w-full h-auto p-1 lg:p-2 shadow-lg rounded-md"
          style={{ aspectRatio: "16 / 9" }} // Maintain aspect ratio
        />
      )}
      <h2 className="text-2xl lg:text-3xl mt-4 font-bold text-sky-800 mb-4">
        {data.title}
      </h2>
      <p className="w-full lg:px-12 lg:py-4 p-2 px-3 my-2 text-justify text-gray-600 text-base">
        {data.description}
      </p>
      <div className="p-4 flex justify-center items-center">
        <ProgressBarLink href={`/quiz/${data.id}`}>
          <Button variant="super">Answer and win</Button>
        </ProgressBarLink>
      </div>
    </div>
  );
};

export default VideoPlayer;
