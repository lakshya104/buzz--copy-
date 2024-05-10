"use client";
import { ProgressBarLink } from "@/components/progress-bar";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { useSearchParams } from "next/navigation";
import React from "react";

const UpdateFormHeading = ({ feedId }) => {
  const searchParams = useSearchParams();
  const title = searchParams.get("title");

  return (
    <div className="flex flex-col justify-center items-center space-y-1 mb-4">
      <h1 className="text-3xl text-center font-bold text-gray-800 mb-3">
        Manage Questions: <span className="text-sky-700 text-xl">{title}</span>
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
  );
};

export default UpdateFormHeading;
