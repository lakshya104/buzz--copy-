import { auth } from "@/auth";
import { db } from "@/lib/db";
import { cache } from "react";
import { getUserByEmail } from "./user";

export const getRewards = cache(async () => {
  const rewards = await db.reward.findMany();
  return rewards;
});

export const getUserId = cache(async () => {
  const session = await auth();
  const userEmail = session.user.email;
  const user = await getUserByEmail(userEmail);
  return user.id;
});

export const getRewardById = async (id) => {
  try {
    const reward = await db.reward.findUnique({
      where: { id },
    });
    return reward;
  } catch (error) {
    console.error('Error fetching reward by ID:', error);
    throw error;
  }
};