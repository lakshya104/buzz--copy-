import { fetchFeedItemById } from "@/actions/redeem";
import React from "react";
import { EditPostForm } from "./edit-post-form";

const EditPost = async ({ params }) => {
  const feedItem = await fetchFeedItemById(params.id);
  return (
    <div>
      <EditPostForm feedItem={feedItem} />
    </div>
  );
};

export default EditPost;
