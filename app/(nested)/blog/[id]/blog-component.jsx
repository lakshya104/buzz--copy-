import { ProgressBarLink } from "@/components/progress-bar";
import { Button } from "@/components/ui/button";
import { BackHeader } from "../../backHeader";

const BlogComponent = ({ data }) => {
  return (
    <div className="w-full max-w-4xl mx-auto my-8 overflow-hidden shadow-lg rounded-xl">
    <BackHeader title="Post" />
    <div className="bg-gradient-to-r from-blue-400 to-purple-600 py-6 px-4 shadow-inner">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-white">
        {data.title}
      </h1>
    </div>
    <div className="px-6 py-8 bg-white">
      <div className="prose max-w-none">
        <p className="text-gray-700">{data.description}</p>
        <p className="text-gray-700">{data.description}</p>
      </div>
      
      <div className="mt-10 flex justify-center items-center">
        <ProgressBarLink href={`/quiz/${data.id}`}>
          <Button variant="super" >
            Answer and win
          </Button>
        </ProgressBarLink>
      </div>
    </div>
  </div>
  );
};

export default BlogComponent;
