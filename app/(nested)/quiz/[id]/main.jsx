"use client";
import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { BackHeader } from "../../backHeader";
import { Wheel } from "react-custom-roulette";
import {
  createUserAnswer,
  getAnswersByQuestionId,
  hasUserAnsweredQuestion,
} from "@/actions/redeem";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Ban, Check } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

const Main = ({ ques, id, inc, dec }) => {
  const [answers, setAnswers] = useState({});
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleClick = (questionId, answer) => {
    if (answeredQuestions.includes(questionId)) {
      return;
    }
    setAnsweredQuestions([...answeredQuestions, questionId]);
    createUserAnswer(id, answer.questionId);
    answer.isCorrect ? inc() : dec();
  };
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const data = [
    {
      option: "Amazon",
    },
    { option: "Zomato" },
    { option: "Flipkart" },
    { option: "GoIbibo" },
    { option: "Samsung" },
    { option: "Myntra" },
  ];

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
      console.log(newPrizeNumber);
    }
  };

  useEffect(() => {
    const fetchAnswers = async () => {
      try {
        const answersMap = {};
        for (const question of ques) {
          const fetchedAnswers = await getAnswersByQuestionId(question.id);
          answersMap[question.id] = fetchedAnswers;
        }
        setAnswers(answersMap);

        const answeredQues = await Promise.all(
          ques.map(async (question) => {
            const answered = await hasUserAnsweredQuestion(id, question.id);
            return answered ? question.id : null;
          })
        );
        setAnsweredQuestions(answeredQues.filter((ques) => ques !== null));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching answers:", error);
      }
    };

    fetchAnswers();
  }, [ques, id]);
  return (
    <div className="flex gap-[48px] lg:px-6 px-0.5">
      <FeedWrapper>
        <BackHeader title={"Quiz"} />
        <div className="flex justify-center items-center flex-col">
          <div className="flex items-start flex-col m-2 max-w-[720px] justify-start">
            <div className="flex items-start flex-col justify-start">
              {ques.map((question) => (
                <div key={question.id} className="w-full lg:pr-6">
                  <h2 className="font-semibold lg:text-2xl text-sky-800 mt-2 lg:mt-3.5 ml-5">
                    {question.text}
                  </h2>
                  <ul className="mb-5">
                    {answers[question.id] ? (
                      <>
                        {answers[question.id].map((answer) => (
                          <li key={answer.id} className="ml-5">
                            <div className="flex justify-start items-center">
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button
                                    onClick={() =>
                                      handleClick(question.id, answer)
                                    }
                                    disabled={
                                      answeredQuestions.includes(question.id) ||
                                      loading
                                    }
                                    className="my-1 text-xs lg:text-sm  min-w-[300px]"
                                  >
                                    {answer.text}
                                  </Button>
                                </DialogTrigger>
                                <DialogContent className="shadow-inner w-[300px] py-8 rounded- px-4 lg:px-12 z-50">
                                  <div className="flex items-center justify-center flex-col space-y-4">
                                    {answer.isCorrect ? (
                                      <div className="flex items-center justify-center">
                                        <Check className="text-green-600 stroke-[4] mr-2 h-6 w-6" />
                                        <h3 className="font-semibold text-green-600">
                                          You got it right!
                                        </h3>
                                      </div>
                                    ) : (
                                      <div className="flex items-center justify-center">
                                        <Ban className="text-red-600 mr-2 stroke-[4] h-4 w-4" />
                                        <h3 className="font-semibold text-red-600">
                                          Oops! Not correct.
                                        </h3>
                                      </div>
                                    )}
                                  </div>
                                </DialogContent>
                              </Dialog>
                            </div>
                          </li>
                        ))}
                        {answeredQuestions.includes(question.id) && (
                          <p className="text-sm text-muted-foreground ml-4">
                            <span className="text-red-600 text-lg">*</span> This
                            question has been answered by you.
                          </p>
                        )}
                      </>
                    ) : (
                      <>
                        <Skeleton className="h-[38px] ml-6 bg-sky-100 rounded-lg my-2 w-[300px]" />
                        <Skeleton className="h-[38px] ml-6 bg-sky-100 rounded-lg my-2 w-[300px]" />
                        <Skeleton className="h-[38px] ml-6 bg-sky-100 rounded-lg my-2 w-[300px]" />
                        <Skeleton className="h-[38px] ml-6 bg-sky-100 rounded-lg my-2 w-[300px]" />
                      </>
                    )}
                  </ul>
                </div>
              ))}
            </div>
            <div className="p-5 w-full min-h-[50vh] lg:hidden flex justify-center items-center flex-col bg-gray-100 rounded-lg shadow-lg">
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="super"
                    disabled={ques.length !== answeredQuestions.length}
                  >
                    Try Your Luck
                  </Button>
                </DialogTrigger>
                <DialogContent className="shadow-inner w-full py-8 rounded- px-4 lg:px-12 z-50">
                  <div className="flex items-center w-full justify-center flex-col space-y-4">
                    <Wheel
                      mustStartSpinning={mustSpin}
                      prizeNumber={prizeNumber}
                      data={data}
                      onStopSpinning={() => {
                        setMustSpin(false);
                      }}
                      backgroundColors={[
                        "#5a67d8",
                        "#4299e1",
                        "#48bb78",
                        "#f56565",
                        "#ecc94b",
                        "#9f7aea",
                      ]}
                      outerBorderColor="black"
                      innerBorderColor="white"
                      radiusLineColor="white"
                      textColors={["#ffffff"]}
                    />
                    <Button
                      variant="primary"
                      className="px-8"
                      onClick={handleSpinClick}
                    >
                      SPIN
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
              <p className="text-sm text-center text-gray-500 py-5">
                {ques.length !== answeredQuestions.length
                  ? "Answer all questions to unlock this quiz"
                  : "Congratulations you can now take part in this Quiz!!"}
              </p>
            </div>
          </div>
        </div>
      </FeedWrapper>
      <StickyWrapper>
        <div className="p-5 mt-8 min-h-[50vh] hidden lg:flex justify-center items-center flex-col bg-gray-100 rounded-lg shadow-lg">
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="super"
                disabled={ques.length !== answeredQuestions.length}
              >
                Try Your Luck
              </Button>
            </DialogTrigger>
            <DialogContent className="shadow-inner w-full py-8 rounded- px-4 lg:px-12 z-50">
              <div className="flex items-center w-full justify-center flex-col space-y-4">
                <Wheel
                  mustStartSpinning={mustSpin}
                  prizeNumber={prizeNumber}
                  data={data}
                  onStopSpinning={() => {
                    setMustSpin(false);
                  }}
                  backgroundColors={[
                    "#5a67d8",
                    "#4299e1",
                    "#48bb78",
                    "#f56565",
                    "#ecc94b",
                    "#9f7aea",
                  ]}
                  outerBorderColor="black"
                  innerBorderColor="white"
                  radiusLineColor="white"
                  textColors={["#ffffff"]}
                />
                <Button
                  variant="primary"
                  className="px-8"
                  onClick={handleSpinClick}
                >
                  SPIN
                </Button>
              </div>
            </DialogContent>
          </Dialog>
          <p className="text-sm text-center text-gray-500 py-5">
            {ques.length !== answeredQuestions.length
              ? "Answer all questions to unlock this quiz"
              : "Congratulations you can now take part in this Quiz!!"}
          </p>
        </div>
      </StickyWrapper>
    </div>
  );
};

export default Main;
