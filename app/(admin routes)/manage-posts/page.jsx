import { Button } from "@/components/ui/button";
import { ArrowLeft, PlusIcon } from "lucide-react";
import { ProgressBarLink } from "@/components/progress-bar";
import { NavTooltip } from "@/components/nav-tooltip";
import CardContainer from "./card-container";

const AdminPanel = async () => {
  return (
    <div className="flex flex-col space-y-6 items-center justify-center p-1 lg:p-4 m-1 lg:m-2">
      <div className="flex flex-col lg:flex-row justify-between lg:justify-evenly w-full items-center space-y-3 lg:space-y-0">
        <div className="bg-white flex items-center justify-between lg:w-[40%]">
          <ProgressBarLink href="/home">
            <NavTooltip content={"Go back to Home page"}>
              <Button
                variant="ghost"
                className="border border-neutral-300"
                size="sm"
              >
                <ArrowLeft className="h-5 w-5 stroke-2 text-neutral-400" />
              </Button>
            </NavTooltip>
          </ProgressBarLink>
        </div>
        <div className="flex lg:w-[60%] justify-center lg:justify-start flex-col lg:flex-row items-center space-y-3 lg:space-y-0 lg:space-x-3">
          <h2 className="text-xl lg:text-2xl font-semibold text-gray-700 text-center lg:text-left">
            Manage Posts
          </h2>
          <ProgressBarLink href="/manage-posts/create-post">
            <Button
              variant="primaryOutline"
              className="font-semibold text-xs border border-sky-800 border-b-4 rounded-md"
            >
              <PlusIcon className="mr-2 text-sky-700 h-5 w-5 stroke-[4]" />
              Add more post
            </Button>
          </ProgressBarLink>
        </div>
      </div>
      <div className="py-6 grid grid-cols-1 px-6 lg:grid-cols-3 gap-4">
        <CardContainer />
      </div>
    </div>
  );
};

export default AdminPanel;
