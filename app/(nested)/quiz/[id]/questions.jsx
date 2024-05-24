import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Ban, Check } from "lucide-react";

export const Question = ({ question, answers, handleClick, answeredQuestions, loading }) => (
  <div key={question.id} className="w-full lg:pr-6">
    <h2 className="font-semibold lg:text-2xl text-sky-800 mt-2 lg:mt-3.5 ml-5">
      {question.text}
    </h2>
    <ul className="mb-5">
      {answers ? (
        answers.map((answer) => (
          <li key={answer.id} className="ml-5">
            <div className="flex justify-start items-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    onClick={() => handleClick(question.id, answer)}
                    disabled={answeredQuestions.includes(question.id) || loading}
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
                        <h3 className="font-semibold text-green-600">You got it right!</h3>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <Ban className="text-red-600 mr-2 stroke-[4] h-4 w-4" />
                        <h3 className="font-semibold text-red-600">Oops! Not correct.</h3>
                      </div>
                    )}
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </li>
        ))
      ) : (
        Array(4).fill().map((_, index) => (
          <Skeleton key={index} className="h-[38px] ml-6 bg-sky-100 rounded-lg my-2 w-[300px]" />
        ))
      )}
      {answeredQuestions.includes(question.id) && (
        <p className="text-sm text-muted-foreground ml-4">
          <span className="text-red-600 text-lg">*</span> This question has been answered by you.
        </p>
      )}
    </ul>
  </div>
);