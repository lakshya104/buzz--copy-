"use client";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Skeleton } from "@/components/ui/skeleton";
import { ProgressBarLink } from "./progress-bar";
import { Button } from "./ui/button";

const VideoPlayer = ({ title, videosrc, description, id }) => {
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);
  return (
    <div className="max-w-[95%] flex flex-col justify-center items-center my-6 xs:w-full lg:w-full rounded overflow-hidden shadow-lg">
      <h2 className="lg:text-2xl text-center text-xl font-bold text-gray-800 mb-4">
        {title}
      </h2>
      {!hasWindow ? (
        <Skeleton className="h-[370px] bg-slate-300 rounded-none w-[90%]" />
      ) : (
        <ReactPlayer
          width="90%"
          url={videosrc}
          playing={true}
          controls={true}
          light={"https://buzz-copy.vercel.app/watch.svg"}
          pip={true}
          muted={true}
          stopOnUnmount={false}
          className="bg-slate-950 p-1 lg:p-2 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] "
        />
      )}
      <source src={videosrc} type="video/mp4" />
      <p className="text-gray-600 text-base lg:text-lg p-4 mb-6 text-justify">
        {description}
      </p>
      <ProgressBarLink href={`blog/${id}`} className="w-full">
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

export default VideoPlayer;
