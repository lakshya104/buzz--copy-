import React from "react";
import { CreatePost } from "./create-post";
import { getUserId } from "@/data/queries";

const CreatePosts = async () => {
  const userId = await getUserId();
  return <CreatePost userId={userId} />;
};

export default CreatePosts;
