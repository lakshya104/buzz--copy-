import { db } from "@/lib/db";
import { cache } from "react";

export const getRewards = cache(async () => {
  const rewards = await db.reward.findMany();
  return rewards;
});
