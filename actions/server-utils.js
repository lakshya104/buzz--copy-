"use server";

import { auth } from "@/auth";
import { getUserByEmail } from "@/data/user";
import { db } from "@/lib/db";
import { rewardFormSchema } from "@/schemas";
import { revalidatePath } from "next/cache";

export const redeemRewardForUser = async (rewardId) => {
  const session = await auth();
  const userEmail = session.user.email;
  const user = await getUserByEmail(userEmail);
  try {
    const redeemedReward = await db.redeemedReward.create({
      data: {
        userId: user.id,
        rewardId: rewardId,
      },
    });
    console.log("RedeemedReward created:", redeemedReward);
    return redeemedReward;
  } catch (error) {
    console.error("Error creating RedeemedReward:", error);
    throw error;
  }
};

export const getUserByEmailAction = async (email) => {
  const session = await auth();
  const userEmail = session.user.email;
  try {
    const user = await db.user.findUnique({
      where: {
        email: userEmail,
      },
      include: {
        redeemedRewards: true,
        answeredQuestions: true,
      },
    });
    return user;
  } catch {
    null;
  }
};

export const pointIncrease = async () => {
  const session = await auth();
  const email = session.user.email;
  try {
    const user = await db.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      throw new Error("User not found");
    }
    const updatedUser = await db.user.update({
      where: {
        email,
      },
      data: {
        points: user.points + 5,
      },
    });

    return updatedUser;
  } catch (error) {
    console.error("Error increasing points:", error);
    return null;
  }
};

export const pointDecrease = async () => {
  const session = await auth();
  const email = session.user.email;
  try {
    const user = await db.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      throw new Error("User not found");
    }

    const newPoints = Math.max(user.points - 1, 0);
    const updatedUser = await db.user.update({
      where: {
        email,
      },
      data: {
        points: newPoints,
      },
    });

    return updatedUser;
  } catch (error) {
    console.error("Error increasing points:", error);
    return null;
  }
};

export const getUserPoints = async (email) => {
  try {
    const user = await db.user.findUnique({
      where: {
        email,
      },
    });
    if (user) {
      return user.points;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching user points:", error);
  }
};

export const getLeaderboard = async () => {
  try {
    const leaderboard = await db.user.findMany({
      orderBy: {
        points: "desc",
      },
      select: {
        id: true,
        email: true,
        name: true,
        points: true,
      },
    });
    return leaderboard;
  } catch (error) {
    console.error("Error fetching leaderboard:", error);
    throw error;
  }
};

export const createQuestionWithAnswers = async (id, question, a, b, c, d) => {
  try {
    await db.question.create({
      data: {
        text: question,
        feedItemId: id,
        answers: {
          createMany: {
            data: [
              { text: a.text, isCorrect: a.isCorrect },
              { text: b.text, isCorrect: b.isCorrect },
              { text: c.text, isCorrect: c.isCorrect },
              { text: d.text, isCorrect: d.isCorrect },
            ],
          },
        },
      },
      include: {
        answers: true,
      },
    });

    console.log("Questions and answers created successfully.");
  } catch (error) {
    console.error("Error creating questions:", error);
  }
};

export const getAllQuestionsWithAnswers = async () => {
  try {
    const questionsWithAnswers = await db.question.findMany({
      include: {
        answers: true,
      },
    });

    // console.log("Questions with answers:", questionsWithAnswers);

    return questionsWithAnswers;
  } catch (error) {
    console.error("Error fetching questions with answers:", error);
    throw error;
  }
};

export const getAnswersByQuestionId = async (questionId) => {
  try {
    const answers = await db.answer.findMany({
      where: {
        questionId: questionId,
      },
    });

    return answers;
  } catch (error) {
    console.error("Error fetching answers by question ID:", error);
    throw error;
  }
};

export const createUserAnswer = async (userId, questionId) => {
  try {
    const userAnswer = await db.userAnswer.create({
      data: {
        userId: userId,
        questionId: questionId,
      },
    });
    return userAnswer;
  } catch (error) {
    console.error("Error creating user answer:", error);
    throw error;
  }
};

export const hasUserAnsweredQuestion = async (userId, questionId) => {
  try {
    const userAnswer = await db.userAnswer.findUnique({
      where: {
        unique_user_question_answer: {
          userId: userId,
          questionId: questionId,
        },
      },
    });

    return !!userAnswer;
  } catch (error) {
    console.error("Error checking user answer:", error);
    throw error;
  }
};

export const getAllFeedItems = async () => {
  try {
    const feedItems = await db.feedItem.findMany({
      include:{
        questions:true
      }
    });
    return feedItems;
  } catch (error) {
    console.error("Error fetching feed items:", error);
    throw error;
  }
};

export const fetchFeedItemByIdWithQuestions = async (itemId) => {
  try {
    const feedItem = await db.feedItem.findUnique({
      where: {
        id: itemId,
      },
      include: {
        questions: true,
      },
    });

    return feedItem;
  } catch (error) {
    console.error("Error fetching feed item:", error);
    throw error;
  }
};

export const createFeedItem = async (
  userId,
  title,
  description,
  url,
  subTitle,
  link,
  type
) => {
  try {
    const data = {
      createdBy: userId,
      title,
      type,
      description,
    };

    if (subTitle) data.subTitle = subTitle;
    if (url) data.url = url;
    if (link) data.link = link;

    const feedItem = await db.feedItem.create({
      data,
    });
    console.log("Feed item created successfully");
    return feedItem;
  } catch (error) {
    console.error("Error creating feed item:", error);
    throw error;
  }
};

export const getQuestionsWithAnswersByFeedItemId = async (id) => {
  try {
    const questionsWithAnswers = await db.question.findMany({
      where: {
        feedItemId: id,
      },
      include: {
        answers: true,
      },
    });

    return questionsWithAnswers;
  } catch (error) {
    console.error("Error retrieving questions with answers:", error);
    throw error;
  }
};

export const deleteQuestionWithAnswers = async (questionId) => {
  try {
    await db.question.delete({
      where: {
        id: questionId,
      },
    });
    console.log(
      `Question with ID ${questionId} and its answers deleted successfully.`
    );
  } catch (error) {
    console.error(`Error deleting question with ID ${questionId}:`, error);
  }
};

export const getQuestionAndAnswersWithQuestionId = async (questionId) => {
  try {
    const questionWithAnswers = await db.question.findUnique({
      where: { id: questionId },
      include: { answers: true },
    });
    return questionWithAnswers;
  } catch (error) {
    console.error("Error fetching question and answers:", error);
    throw error;
  }
};

export const updateQuestionAndAnswers = async (
  questionId,
  questionText,
  answerData
) => {
  try {
    const updatedQuestion = await db.question.update({
      where: { id: questionId },
      data: {
        text: questionText,
      },
    });

    for (const answer of answerData) {
      await db.answer.upsert({
        where: { id: answer.id },
        update: { text: answer.text, isCorrect: answer.isCorrect },
        create: { text: answer.text, isCorrect: answer.isCorrect, questionId },
      });
    }
    console.log("Successfylly updated question and answers");
    return updatedQuestion;
  } catch (error) {
    console.error("Error updating question and answers:", error);
    throw error;
  }
};

export const fetchFeedItemById = async (itemId) => {
  try {
    const feedItem = await db.feedItem.findUnique({
      where: {
        id: itemId,
      },
    });

    return feedItem;
  } catch (error) {
    console.error("Error fetching feed item:", error);
    throw error;
  }
};

export const updateFeedItem = async (id, newData) => {
  try {
    const updatedFeedItem = await db.feedItem.update({
      where: {
        id: id,
      },
      data: newData,
    });

    console.log("Post updated successfully!");
    return updatedFeedItem;
  } catch (error) {
    console.error("Error updating FeedItem:", error);
    throw error;
  }
};

export const deleteFeedItem = async (id) => {
  try {
    await db.feedItem.delete({
      where: {
        id: id,
      },
    });

    console.log(`FeedItem with ID ${id} deleted successfully.`);
  } catch (error) {
    console.error("Error deleting FeedItem:", error);
    throw error;
  }
};

export const createReward = async (
  createdBy,
  name,
  text,
  description,
  image,
  couponCode,
  isActive
) => {
  try {
    const reward = await db.reward.create({
      data: {
        name,
        description,
        image,
        text,
        couponCode,
        createdBy,
        isActive,
      },
    });
    console.log("Reward created:", reward);
    return reward;
  } catch (error) {
    console.error("Error creating reward:", error);
    throw error;
  }
};

export const deleteReward = async (rewardId) => {
  try {
    const deletedReward = await db.reward.delete({
      where: {
        id: rewardId,
      },
    });

    if (deletedReward) {
      console.log(`Reward with ID ${rewardId} has been successfully deleted.`);
      return true;
    } else {
      console.log(`Reward with ID ${rewardId} does not exist.`);
      return false;
    }
  } catch (error) {
    console.error(`Error deleting reward with ID ${rewardId}:`, error);
    throw error;
  }
};

export const updateReward = async (rewardData) => {
  try {
    // const validatedData = rewardFormSchema.parse(rewardData);
    const { id, ...updateData } = rewardData;

    const updatedReward = await db.reward.update({
      where: { id },
      data: updateData,
    });
    revalidatePath("/redeem");
    return updatedReward;
  } catch (error) {
    console.error("Unknown error:", error.message);
    throw error;
  }
};
