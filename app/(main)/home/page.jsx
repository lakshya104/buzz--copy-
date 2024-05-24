import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { Header } from "./header";
import VideoPlayer from "@/components/video-player";
import { getAllFeedItems } from "@/actions/server-utils";
import UserCard from "@/components/user-card";
import BlogPost from "./blog-post";
import ImagePost from "./image-post";

const Home = async () => {
  const feedItems = await getAllFeedItems();

  const componentMap = {
    VIDEO: VideoPlayer,
    IMAGE: ImagePost,
    BLOG_POST: BlogPost,
  };

  return (
    <div className="flex gap-[48px] lg:px-6 px-0.5">
      <FeedWrapper>
        <Header title={"Home"} />
        <div className="flex justify-center items-center flex-col">
          {feedItems.map((item) => {
            const Component = componentMap[item.type];
            return (
              <Component
                key={item.id}
                title={item.title}
                url={item.url}
                description={item.description}
                subTitle={item.subTitle}
                id={item.id}
              />
            );
          })}
        </div>
      </FeedWrapper>
      <StickyWrapper>
        <UserCard />
      </StickyWrapper>
    </div>
  );
};

export default Home;
