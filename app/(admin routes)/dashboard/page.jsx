import { getAllFeedItems } from "@/actions/redeem";
import PostCard from "./post-card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, PlusIcon } from "lucide-react";
import { ProgressBarLink } from "@/components/progress-bar";

const AdminPanel = async () => {
  const feedItems = await getAllFeedItems();

  return (
    <>
      <div className="flex flex-col lg:flex-row space-y-2 items-center justify-center lg:space-x-4 mt-2">
       <div className="flex justify-evenly w-full items-center">
       <div className="bg-white flex items-center justify-between lg:ml-4 lg:z-40 lg:w-[40%]">
          <ProgressBarLink href="/home">
            <Button variant="ghost" className="border border-neutral-300" size="sm">
              <ArrowLeft className="h-5 w-5 stroke-2 text-neutral-400" />
            </Button>
          </ProgressBarLink>
        </div>
        <div className="lg:w-[60%] flex justify-start lg:flex-row flex-col items-center space-y-3 lg:space-y-0 lg:space-x-3">
          <h2 className="text-2xl font-semibold text-gray-700">Manage Posts</h2>
          <ProgressBarLink href="/create-post">
            <Button
              variant="primaryOutline"
              className="font-semibold text-xs border border-sky-800 border-b-4 rounded-md"
            >
              <PlusIcon className="mr-2 text-sky-700 h-5 w-5 stroke-[4]" /> Add
              more post
            </Button>
          </ProgressBarLink>
        </div>
       </div>
      </div>
      {feedItems.map((item) => (
        <PostCard
          key={item.id}
          type={item.type}
          title={item.title}
          id={item.id}
        />
      ))}
    </>
  );
};

export default AdminPanel;
