import { ProgressBarLink } from "@/components/progress-bar";
import { Button } from "@/components/ui/button";

const PostCard = ({ title, type, id, questionCount }) => {
  return (
    <div className="max-w-sm mx-auto bg-slate-50 rounded-lg overflow-hidden border border-slate-300 shadow-lg my-5">
      <div className="p-5">
        <h2 className="text-lg md:text-xl font-semibold text-black">
          <span className=" mr-1">Title:</span> {title}
        </h2>

        <div className="flex flex-col mt-4">
          <span className="px-3 py-1 bg-slate-200 text-black text-sm font-medium rounded-full mt-2">
            <span className="text-black mr-1">Type:</span> {type}
          </span>
          <span className="px-3 py-1 bg-slate-200 text-black text-sm font-medium rounded-full mt-2">
            <span className="text-black mr-1">Currently Active:</span> True
          </span>
          <span className="px-3 py-1 bg-slate-200 text-black text-sm font-medium rounded-full mt-2">
            <span className="text-black mr-1">Total Questions:</span> {questionCount}
          </span>
        </div>

        <div className="flex flex-col space-y-2 items-center mt-4">
          <ProgressBarLink
            href={`manage-posts/edit-post/${id}?title=${title}`}
            className="w-full"
          >
            <Button variant="default" className="w-full text-black">
              Edit Post
            </Button>
          </ProgressBarLink>
          <ProgressBarLink
            href={`manage-posts/manage-question/${id}?title=${title}`}
            className="w-full"
          >
            <Button
              variant="default"
              className="w-full border text-black border-black border-b-4"
            >
              Manage Questions
            </Button>
          </ProgressBarLink>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
