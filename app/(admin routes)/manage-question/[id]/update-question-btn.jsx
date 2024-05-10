"use client";
import { Button } from "@/components/ui/button";
import { FilePenLine } from "lucide-react";
import { ProgressBarLink } from "@/components/progress-bar";
import { useSearchParams } from "next/navigation";

const UpdateQuestionBtn = ({ id }) => {
  const searchParams = useSearchParams();
  const title = searchParams.get("title");
 
  return (
    <ProgressBarLink href={`/update-question-form/${id}?title=${title}`} className="w-full">
      <Button
        variant="superOutline"
        className="my-2 w-full border-indigo-600 border-2 border-b-4"
      >
        <FilePenLine />
        <span className="ml-1 font-semibold">Edit</span>
      </Button>
      </ProgressBarLink>
  );
};

export default UpdateQuestionBtn;
