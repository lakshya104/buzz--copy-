import { fetchFeedItemById } from "@/actions/redeem";
import ImageComponent from "./image-component";
import VideoComponent from "./video-component";
import BlogComponent from "./blog-component";

export default function Page({ params }) {

  const { id } = params;
  
  const fetchDataAndRenderComponent = async () => {
    try {
      const data = await fetchFeedItemById(id);

      switch (data.type) {
        case "IMAGE":
          return <ImageComponent data={data} />;
        case "VIDEO":
          return <VideoComponent data={data} />;
        case "BLOG_POST":
          return <BlogComponent data={data} />;
        default:
          return <div>No component found for this type</div>;
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      return <div>Error fetching data</div>;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      {fetchDataAndRenderComponent()}
    </div>
  );
}
