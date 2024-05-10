import DeleteQuestionBtn from "./delete-question-btn";
import UpdateQuestionBtn from "./update-question-btn";

const UpdateFormCard = ({ data }) => {
  const { id, text, feedItemId, answers } = data;

  return (
    <div className="max-w-md flex flex-col justify-between items-center min-h-[600px] mx-auto bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 p-5">
      <div>
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
          {text}
        </h2>
        <p className="text-gray-500 mt-1">Question ID: {id}</p>
        <p className="text-gray-500">Feed Item ID: {feedItemId}</p>
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mt-4 mb-2">
          Answers:
        </h3>
        <ul>
          {answers.map((answer) => (
            <li
              key={answer.id}
              className="bg-gray-100 dark:bg-gray-700 rounded-md p-2 mt-2"
            >
              <p className="text-gray-800 dark:text-gray-200">{answer.text}</p>
              <p
                className={
                  "font-semibold " +
                  (answer.isCorrect ? "text-green-500" : "text-red-500")
                }
              >
                Is Correct: {String(answer.isCorrect)}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex w-full space-x-3">
        <UpdateQuestionBtn id={id} text={text} answers={answers}/>
        <DeleteQuestionBtn id={id} />
      </div>
    </div>
  );
};

export default UpdateFormCard;
