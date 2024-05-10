import React from "react";
import { CreatePost } from "./create-post";
import { getUserId } from "@/actions/redeem";

const CreatePosts = async () => {
  const userId = await getUserId();
  return <CreatePost userId={userId} />;
};

export default CreatePosts;
