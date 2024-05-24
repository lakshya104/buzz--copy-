import { getAllFeedItems } from "@/actions/server-utils";
import React from "react";
import PostCard from "./post-card";

const CardContainer = async () => {
  const feedItems = await getAllFeedItems();
  console.log(feedItems, "sdsdsds");
  return feedItems.map((item) => (
    <PostCard key={item.id} type={item.type} title={item.title} questionCount={item.questions.length} id={item.id} />
  ));
};

export default CardContainer;
