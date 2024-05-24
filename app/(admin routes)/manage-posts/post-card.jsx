import { ProgressBarLink } from "@/components/progress-bar";
import { Button } from "@/components/ui/button";

const PostCard = ({ title, type, id }) => {
  return (
    <div className="lg:max-w-[98%] mx-auto bg-white rounded-lg overflow-hidden">
        <div className="flex flex-col lg:flex-row space-y-2 justify-between items-center my-3 border-2 p-5">
          <h2 className="text-lg md:text-xl font-semibold text-sky-800 mb-2 w-full lg:max-w-[35%]">
            <span className="text-slate-800 mr-1"> Title:</span> {title}
          </h2>
          <div className="lg:w-[55%] w-full flex justify-between items-center">
            <span className="px-3 py-1 bg-sky-100 text-sky-800 text-xs font-bold rounded-full">
              {type}
            </span>
           <div className="flex justify-center lg:flex-row flex-col space-y-5 lg:space-y-0 items-center lg:space-x-5">
           <ProgressBarLink href={`manage-posts/edit-post/${id}?title=${title}`}>
              <Button variant="primary" className="w-[190px]">
               Edit Post
              </Button>
            </ProgressBarLink>
            <ProgressBarLink href={`manage-posts/manage-question/${id}?title=${title}`}>
              <Button variant="superOutline" className="w-[190px] border border-indigo-500 border-b-4">
                Manage Questions
              </Button>
            </ProgressBarLink>
           </div>
          </div>
        </div>
    </div>
  );
};

export default PostCard;
