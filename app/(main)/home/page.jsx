import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { Header } from "./header";
import { auth } from "@/auth";
import VideoPlayer from "@/components/video-player";
import { getAllFeedItems } from "@/actions/redeem";
import UserCard from "@/components/user-card";
import BlogPost from "./blog-post";
import ImagePost from "./image-post";

const Home = async () => {
  const session = await auth();
  const feedItems = await getAllFeedItems();
  console.log(session);
  return (
    <div className="flex gap-[48px] lg:px-6 px-0.5">
      <FeedWrapper>
        <Header title={"Home"} />
        <div className="flex justify-center items-center flex-col">
          {feedItems.map((item) => (
            <>
              {item.type === "VIDEO" && (
                <VideoPlayer
                  key={item.id}
                  title={item.title}
                  videosrc={item.url}
                  description={item.description}
                  id={item.id}
                />
              )}
              {item.type === "IMAGE" && <ImagePost item={item} key={item.id} />}
              {item.type === "BLOG_POST" && (
                <BlogPost
                  title={item.title}
                  content={item.description}
                  id={item.id}
                  key={item.id}
                />
              )}
            </>
          ))}
        </div>
      </FeedWrapper>
      <StickyWrapper>
        <UserCard />
      </StickyWrapper>
    </div>
  );
};

export default Home;
