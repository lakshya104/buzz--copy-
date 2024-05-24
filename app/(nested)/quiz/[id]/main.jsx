"use client";

import { useEffect, useState, useCallback, useMemo, Suspense } from "react";
import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { BackHeader } from "../../backHeader";
import {
  createUserAnswer,
  getAnswersByQuestionId,
  hasUserAnsweredQuestion,
  pointDecrease,
  pointIncrease,
} from "@/actions/server-utils";
import Roulette from "./roulette";
import { Question } from "./questions";



const getWeightedRandomIndex = (data) => {
  const totalWeight = data.reduce((sum, item) => sum + item.weight, 0);
  let random = Math.random() * totalWeight;
  for (let i = 0; i < data.length; i++) {
    random -= data[i].weight;
    if (random < 0) {
      return i;
    }
  }
  return 0;
};

const Main = ({ ques, id }) => {
  const [answers, setAnswers] = useState(null);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [mustSpin, setMustSpin] = useState(false);
  const [disable, setDisable] = useState(false);

  const handleClick = async (questionId, answer) => {
    if (answeredQuestions.includes(questionId)) {
      return;
    }
    setAnsweredQuestions((prev) => [...prev, questionId]);
    await createUserAnswer(id, answer.questionId);
    answer.isCorrect ? await pointIncrease() : await pointDecrease();
  };

  const data = useMemo(() => [
    {
      option: "Zomato",
      image: { uri: "/zomato.svg", landscape: true },
      result: "win",
      style: { backgroundColor: "white" },
      text: "You won Zomato coupon",
      subText: "Get 10% extra off on your next order",
      weight: 1,
    },
    {
      option: "Hard Luck",
      result: "lost",
      style: { backgroundColor: "#2a7bad", textColor: "white" },
      text: "Better luck next time!",
      weight: 5,
    },
    {
      option: "Flipkart",
      image: { uri: "/flipkart.svg", landscape: true },
      style: { backgroundColor: "white"},
      result: "win",
      text: "You won a Flipkart coupon",
      subText: "Get 15% off on your next Flipkart purchase",
      weight: 1,
    },
    {
      option: "Oops!",
      result: "lost",
      style: { backgroundColor: "#2a7bad", textColor: "white" },
      text: "Better luck next time",
      weight: 5,
    },
    {
      option: "Amazon",
      image: { uri: "/amazon.svg", landscape: true },
      style: { backgroundColor: "white"},
      result: "win",
      text: "You won an Amazon coupon",
      subText: "Get ₹500 off on your next purchase on Amazon",
      weight: 1,
    },
    {
      option: "Hard Luck",
      result: "lost",
      style: { backgroundColor: "#2a7bad", textColor: "white" },
      text: "Better luck next time",
      weight: 5,
    },
    {
      option: "Amazon",
      image: { uri: "/amazon.svg", landscape: true },
      style: { backgroundColor: "white" },
      result: "win",
      text: "You won an Amazon coupon",
      subText: "Get ₹500 off on your next purchase on Amazon",
      weight: 1,
    },
    {
      option: "Oops!",
      result: "lost",
      style: { backgroundColor: "#2a7bad", textColor: "white" },
      text: "Better luck next time",
      weight: 5,
    },
  ], []);

  const handleSpinClick = useCallback(() => {
    if (!mustSpin) {
      const newPrizeNumber = getWeightedRandomIndex(data);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
      setDisable(true);
    }
  }, [mustSpin, data]);

  useEffect(() => {
    const fetchAnswers = async () => {
      try {
        const answersMap = {};
        const answeredQues = [];

        for (const question of ques) {
          const fetchedAnswers = await getAnswersByQuestionId(question.id);
          answersMap[question.id] = fetchedAnswers;

          const answered = await hasUserAnsweredQuestion(id, question.id);
          if (answered) {
            answeredQues.push(question.id);
          }
        }
        setAnswers(answersMap);
        setAnsweredQuestions(answeredQues);
      } catch (error) {
        console.error("Error fetching answers:", error);
      }
    };

    fetchAnswers();
  }, [ques, id]);

  const quizDisabled = ques.length !== answeredQuestions.length;

  return (
    <div className="flex gap-[48px] lg:px-6 px-0.5">
      <FeedWrapper>
        <BackHeader title="Quiz" />
        <div className="flex justify-center items-center flex-col">
          <div className="flex items-start flex-col m-2 max-w-[720px] justify-start">
            <div className="flex items-start flex-col justify-start">
              {ques.map((question) => (
               <Question
                  key={question.id}
                  question={question}
                  answers={answers ? answers[question.id] : null}
                  handleClick={handleClick}
                  answeredQuestions={answeredQuestions}
                  loading={answers === null}
                />
              ))}
            </div>
            <div className="p-5 w-full min-h-[50vh] lg:hidden flex justify-center items-center flex-col bg-gray-100 rounded-lg shadow-lg">
              <Roulette
                mustSpin={mustSpin}
                quizDisabled={quizDisabled}
                prizeNumber={prizeNumber}
                data={data}
                setMustSpin={setMustSpin}
                handleSpinClick={handleSpinClick}
                disable={disable}
                pointerProps={{ src: "/pointer.svg" }}
              />
            </div>
          </div>
        </div>
      </FeedWrapper>
      <StickyWrapper>
        <div className="p-5 mt-8 min-h-[50vh] hidden lg:flex justify-center items-center flex-col bg-gray-100 rounded-lg shadow-lg">
          <Roulette
            mustSpin={mustSpin}
            quizDisabled={quizDisabled}
            prizeNumber={prizeNumber}
            data={data}
            setMustSpin={setMustSpin}
            handleSpinClick={handleSpinClick}
            disable={disable}
            pointerProps={{ src: "/pointer.svg" }}
          />
        </div>
      </StickyWrapper>
    </div>
  );
};

export default Main;
