import React from "react";
import { getUserId } from "@/data/queries";
import {CreateRewardForm} from "./create-reward-form";

const CreateReward = async () => {
  const userId = await getUserId();
  return <CreateRewardForm userId={userId} />;
};

export default CreateReward;
