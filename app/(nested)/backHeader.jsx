import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ProgressBarLink } from "@/components/progress-bar";

export const BackHeader = ({ title }) => {
  return (
    <div className="sticky top-0 bg-white pb-3 lg:pt-[28px] flex items-center justify-between border-b-2 mb-5 lg:z-40">
      <ProgressBarLink href="/home">
        <Button variant="ghost" size="sm">
          <ArrowLeft className="h-5 w-5 stroke-2 text-neutral-400" />
        </Button>
      </ProgressBarLink>
      <h1 className="font-bold text-sky-800 text-xl">{title}</h1>
      <div />
    </div>
  );
};
