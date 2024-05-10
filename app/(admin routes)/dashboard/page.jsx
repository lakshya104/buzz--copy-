import { getAllFeedItems } from "@/actions/redeem";
import PostCard from "./post-card";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { ProgressBarLink } from "@/components/progress-bar";

const AdminPanel = async () => {
  const feedItems = await getAllFeedItems();

  return (
    <>
      <div className="flex flex-col lg:flex-row space-y-2 items-center justify-center lg:space-x-4">
        <h2 className="text-2xl font-semibold text-gray-700">Manage Posts</h2>
        <ProgressBarLink href='/create-post'>
          <Button variant="primaryOutline" className="font-semibold text-xs border border-sky-800 border-b-4 rounded-md">
            <PlusIcon className="mr-2 text-sky-700 h-5 w-5 stroke-[4]" /> Add
            more post
          </Button>
        </ProgressBarLink>
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
