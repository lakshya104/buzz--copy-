import Main from "./main";
import {
  fetchFeedItemByIdWithQuestions,
  getUserId,
  pointDecrease,
  pointIncrease,
} from "@/actions/redeem";

export default async function Page({ params }) {
  const data = await fetchFeedItemByIdWithQuestions(params.id);
  const ques = data.questions;
  const id = await getUserId();

  const pointIncrement = async () => {
    "use server";
    await pointIncrease();
  };

  const pointDecrement = async () => {
    "use server";
    await pointDecrease();
  };

  return <Main id={id} ques={ques} inc={pointIncrement} dec={pointDecrement} />;
}
