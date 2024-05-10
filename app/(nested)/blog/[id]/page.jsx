import { fetchFeedItemById } from "@/actions/redeem";
import ImageComponent from "./image-component";
import VideoComponent from "./video-component";
import BlogComponent from "./blog-component";

export default async function Page({ params }) {
  const data = await fetchFeedItemById(params.id);
  return (
    <div className="max-w-4xl mx-auto p-4">
     {data.type==="IMAGE" && <ImageComponent data={data} />}
     {data.type==="VIDEO" && <VideoComponent data={data}/>}
     {data.type==="BLOG_POST" && <BlogComponent data={data} />}
    </div>
  );
}
