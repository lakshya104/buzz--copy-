import { ProgressBarLink } from "@/components/progress-bar";
import { Button } from "@/components/ui/button";

const PostCard = ({ title, type, id, questionCount }) => {
  return (
    <div className="max-w-sm mx-auto rounded-lg overflow-hidden border border shadow-lg my-5">
      <div className="p-5">
        <h2 className="text-lg md:text-xl font-semibold text-sky-600">
          <span className="mr-1 text-black">Title:</span> {title}
        </h2>

        <div className="flex flex-col mt-4">
          <span className="px-3 py-1 bg-sky-50 text-sky-700 text-sm font-medium rounded-full mt-2">
            <span className="text-black mr-1">Type:</span> {type}
          </span>
          <span className="px-3 py-1 bg-sky-50 text-sky-700 text-sm font-medium rounded-full mt-2">
            <span className="text-black mr-1">Currently Active:</span> True
          </span>
          <span className="px-3 py-1 bg-sky-50 text-sky-700 text-sm font-medium rounded-full mt-2">
            <span className="text-black mr-1">Total Questions:</span>{" "}
            {questionCount}
          </span>
        </div>

        <div className="flex flex-col space-y-2 items-center mt-4">
          <ProgressBarLink
            href={`manage-posts/edit-post/${id}?title=${title}`}
            className="w-full"
          >
            <Button
              variant="default"
              className="w-full text-black hover:bg-sky-600 hover:text-white border border-black hover:border-sky-600"
            >
              Edit Post
            </Button>
          </ProgressBarLink>
          <ProgressBarLink
            href={`manage-posts/manage-question/${id}?title=${title}`}
            className="w-full"
          >
            <Button
              variant="default"
              className="w-full text-black hover:bg-sky-600 hover:text-white border border-black border-b-4 hover:border-sky-800"
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
