import Main from "./main";
import {
  fetchFeedItemByIdWithQuestions,
  getUserId,
  pointDecrease,
  pointIncrease,
} from "@/actions/redeem";

export default async function Page({ params }) {
  const { id } = params;
  const [data, userId] = await Promise.all([
    fetchFeedItemByIdWithQuestions(id),
    getUserId(),
  ]);
  const ques = data.questions;

  const pointIncrement = async () => {
    "use server";
    await pointIncrease();
  };

  const pointDecrement = async () => {
    "use server";
    await pointDecrease();
  };

  return (
    <Main id={userId} ques={ques} inc={pointIncrement} dec={pointDecrement} />
  );
}
