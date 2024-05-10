import { db } from "@/lib/db";

export const getUserByEmail = async (email) => {
  try {
    const user = db.user.findUnique({
      where: {
        email,
      },
      include: {
        redeemedRewards : true,
        answeredQuestions: true
      },
    });
    return user;
  } catch {
    null;
  }
};

export const getUserById = async (id) => {
  try {
    const user = db.user.findUnique({
      where: {
        id,
      },
    });
    return user;
  } catch {
    null;
  }
};
