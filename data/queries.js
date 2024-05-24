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
    console.error("Error fetching reward by ID:", error);
    throw error;
  }
};

export const getTotalUsersEngaged = async (userId) => {
  const feedItems = await db.feedItem.findMany({
    where: {
      createdBy: userId,
    },
    select: {
      id: true,
    },
  });

  const uniqueUserIds = new Set();
  for (const feedItem of feedItems) {
    const questions = await db.question.findMany({
      where: {
        feedItemId: feedItem.id,
      },
      select: {
        answeredBy: {
          select: {
            userId: true,
          },
        },
      },
    });

    questions.forEach((question) => {
      question.answeredBy.forEach((user) => {
        uniqueUserIds.add(user.userId);
      });
    });
  }
  return uniqueUserIds.size;
};


export const getTotalFeedItemsCreated = async (userId) => {
  const totalFeedItems = await db.feedItem.count({
    where: {
      createdBy: userId,
    },
  });
  return totalFeedItems;
};

export const getTotalRewardsCreated = async (userId) => {
  const totalRewards = await db.reward.count({
    where: {
      createdBy: userId,
    },
  });
  return totalRewards;
};

export const getTotalRewardsRedeemed = async (userId) => {
  const totalRewardsRedeemed = await db.redeemedReward.count({
    where: {
      reward: {
        createdBy: userId,
      },
    },
  });
  return totalRewardsRedeemed;
};

export const getTotalQuestionsForFeedItemsCreated = async (userId) => {
  const feedItemIds = await db.feedItem.findMany({
    where: {
      createdBy: userId,
    },
    select: {
      id: true,
    },
  });

  const totalQuestions = await db.question.count({
    where: {
      feedItemId: {
        in: feedItemIds.map((feedItem) => feedItem.id),
      },
    },
  });

  return totalQuestions;
};

export const getTotalQuestionsAnsweredForFeedItemsCreated = async (userId) => {
  const totalQuestionsAnswered = await db.userAnswer.count({
    where: {
      question: {
        FeedItem: {
          createdBy: userId,
        },
      },
    },
  });
  return totalQuestionsAnswered;
};
