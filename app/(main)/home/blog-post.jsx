import { ProgressBarLink } from "@/components/progress-bar";
import { Button } from "@/components/ui/button";

const BlogPost = ({ title, description, id }) => (
  <div className="max-w-[95%] my-6 xs:w-full lg:w-full rounded overflow-hidden shadow-lg">
    <div className="px-4 py-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl lg:text-3xl text-center font-bold text-gray-800 mb-6">
        {title}
      </h2>
      <p className="text-gray-600 text-base lg:text-lg px-4 mb-6 text-justify">
        {description}
      </p>
      <ProgressBarLink href={`blog/${id}`} className="w-full">
        <Button
          variant="super"
          className="block text-white font-bold py-2 px-4 rounded mb-4 mx-auto w-[50%] text-center"
        >
          {" "}
          Read More
        </Button>
      </ProgressBarLink>
    </div>
  </div>
);

export default BlogPost;
