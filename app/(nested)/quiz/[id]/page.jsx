import { getUserId } from "@/data/queries";
import Main from "./main";
import {
  fetchFeedItemByIdWithQuestions,
} from "@/actions/server-utils";

export default async function Page({ params }) {
  const { id } = params;
  const [data, userId] = await Promise.all([
    fetchFeedItemByIdWithQuestions(id),
    getUserId(),
  ]);

 
  return (
    <Main id={userId} ques={data.questions} />
  );
}
