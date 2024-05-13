"use client";
import { ProgressBarLink } from "@/components/progress-bar";
import { Button } from "@/components/ui/button";
import { ArrowLeft, PlusIcon } from "lucide-react";
import { useSearchParams } from "next/navigation";
import React from "react";

const UpdateFormHeading = ({ feedId }) => {
  const searchParams = useSearchParams();
  const title = searchParams.get("title");

  return (
    <div className="bg-white flex items-center justify-start lg:ml-4 lg:z-40 w-full">
      <ProgressBarLink href="/dashboard" className="lg:w-[40%] w-[20%] ml-2">
        <Button variant="ghost" className="border border-neutral-300" size="sm">
          <ArrowLeft className="h-5 w-5 stroke-2 text-neutral-400" />
        </Button>
      </ProgressBarLink>
      <div>
        <div className="lg:w-[60%] py-2 my-2 flex justify-center flex-col items-center space-y-3">
          <h1 className="text-2xl font-semibold text-center text-gray-700">
            Manage Questions:{" "}
            <span className="text-sky-700 text-xl">{title}</span>
          </h1>
          <ProgressBarLink href={`/create-question/${feedId}?title=${title}`}>
            <Button
              variant="primaryOutline"
              className="font-semibold text-xs border border-sky-800 border-b-4 rounded-md"
            >
              <PlusIcon className="mr-2 text-sky-700 h-5 w-5 stroke-[4]" />
              Add more questions
            </Button>
          </ProgressBarLink>
        </div>
      </div>
    </div>
  );
};

export default UpdateFormHeading;
