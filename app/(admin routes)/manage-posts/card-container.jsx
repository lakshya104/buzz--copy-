import { getAllFeedItems } from "@/data/queries";
import PostCard from "./post-card";

const CardContainer = async () => {
  const feedItems = await getAllFeedItems();
  
  return feedItems.map((item) => (
    <PostCard key={item.id} type={item.type} title={item.title} questionCount={item.questions.length} id={item.id} />
  ));
};

export default CardContainer;
