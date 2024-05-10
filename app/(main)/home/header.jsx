import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ProgressBarLink } from "@/components/progress-bar";

export const Header = ({ title }) => {
  return (
    <div className="sticky top-0 bg-white pb-3 lg:pt-[28px] lg:mt-[-28px] flex items-center justify-center border-b-2 mb-5 text-neutral-400 lg:z-40">
      {/* <ProgressBarLink href="/">
        <Button variant="ghost" size="sm">
          <ArrowLeft className="h-5 w-5 stroke-2 text-neutral-400" />
        </Button>
      </ProgressBarLink> */}
      <h1 className="font-bold text-lg">{title}</h1>
      <div />
    </div>
  );
};
