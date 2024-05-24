import { UpdateForm } from "./update-form";
import { getQuestionsWithAnswersByFeedItemId } from "@/actions/server-utils";

const CreateQuestion = async ({ params }) => {

  const quesData = await getQuestionsWithAnswersByFeedItemId(params.id)
  return <UpdateForm feedId={params.id} quesData={quesData}/>;
};

export default CreateQuestion;
