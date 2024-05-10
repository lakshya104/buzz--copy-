import { getQuestionAndAnswersWithQuestionId } from "@/actions/redeem";
import React from "react";
import UpdateQuestionForm from "./update-question-form";

const page = async ({ params }) => {
  const quesWithAns = await getQuestionAndAnswersWithQuestionId(params.id);
  return (
    <UpdateQuestionForm
      text={quesWithAns.text}
      feedId={quesWithAns.feedItemId}
      id={params.id}
      answers={quesWithAns.answers}
    />
  );
};

export default page;
