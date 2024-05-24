import { fetchFeedItemById } from "@/actions/server-utils";
import ImageComponent from "./image-component";
import VideoComponent from "./video-component";
import BlogComponent from "./blog-component";

export default async function Page({ params }) {
  const { id } = params;

  try {
    const data = await fetchFeedItemById(id);

    let content;
    switch (data.type) {
      case "IMAGE":
        content = <ImageComponent data={data} />;
        break;
      case "VIDEO":
        content = <VideoComponent data={data} />;
        break;
      case "BLOG_POST":
        content = <BlogComponent data={data} />;
        break;
      default:
        content = <div>No component found for this type</div>;
        break;
    }

    return <div className="max-w-4xl mx-auto p-4">{content}</div>;
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error fetching data</div>;
  }
}
