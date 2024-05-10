import React from "react";
import { QuestionForm } from "./question-form";

const CreateQuestion = ({ params }) => {
  return <QuestionForm id={params.id} />;
};

export default CreateQuestion;
