"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { updateQuestionAndAnswers } from "@/actions/redeem";
import { questionFormSchema } from "@/schemas";
import { ProgressBarLink } from "@/components/progress-bar";
import { ArrowLeft } from "lucide-react";

const UpdateQuestionForm = ({ text, answers, id, feedId }) => {
  const router = useRouter();
  const { toast } = useToast();
  const [disable, setDisable] = useState(false);
  const searchParams = useSearchParams();
  const title = searchParams.get("title");

  const form = useForm({
    resolver: zodResolver(questionFormSchema),
    defaultValues: {
      question: text,
      option1: {
        text: answers[0] ? answers[0].text : "",
        isCorrect: answers[0] ? answers[0].isCorrect : false,
      },
      option2: {
        text: answers[1] ? answers[1].text : "",
        isCorrect: answers[1] ? answers[1].isCorrect : false,
      },
      option3: {
        text: answers[2] ? answers[2].text : "",
        isCorrect: answers[2] ? answers[2].isCorrect : false,
      },
      option4: {
        text: answers[3] ? answers[3].text : "",
        isCorrect: answers[3] ? answers[3].isCorrect : false,
      },
    },
  });

  function onSubmit(values) {
    const updatedQuestionData = {
      question: values.question,
      answers: [
        {
          id: answers[0].id,
          text: values.option1.text,
          isCorrect: values.option1.isCorrect,
        },
        {
          id: answers[1].id,
          text: values.option2.text,
          isCorrect: values.option2.isCorrect,
        },
        {
          id: answers[2].id,
          text: values.option3.text,
          isCorrect: values.option3.isCorrect,
        },
        {
          id: answers[3].id,
          text: values.option4.text,
          isCorrect: values.option4.isCorrect,
        },
      ],
    };

    updateQuestionAndAnswers(
      id,
      updatedQuestionData.question,
      updatedQuestionData.answers
    );

    setDisable(true);
    router.push(`/manage-question/${feedId}?title=${title}`);
    router.refresh();
    toast({
      title: "Question Updated",
      description: "Question with answers updated successfully!",
    });
  }

  return (
    <div className="mx-auto my-1 p-1 w-full">
      {/* <h1 className="text-lg text-center font-semibold text-gray-800 mb-2">
        Update Question for :{" "}
        <span className="text-base text-sky-700">{title}</span>
      </h1> */}
       <div className="flex justify-start items-center mb-6">
        <ProgressBarLink href={`/manage-question/${feedId}?title=${title}`} className="w-[30%] ml-2">
          <Button
            variant="ghost"
            className="border border-neutral-300"
            size="sm"
          >
            <ArrowLeft className="h-5 w-5 stroke-2 text-neutral-400" />
          </Button>
        </ProgressBarLink>
        <h1 className="text-2xl text-center font-bold text-gray-800">
         Update Question for :{" "}
          <span className="text-lg text-sky-700">{title}</span>
        </h1>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full flex flex-col items-center justify-center"
        >
          <FormField
            control={form.control}
            name="question"
            render={({ field }) => (
              <FormItem className="mb-2 w-[90%]">
                <FormLabel>Question:</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Write question here"
                    className="resize-y"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="option1.text"
            render={({ field }) => (
              <FormItem className="w-[90%]">
                <FormLabel>Option 1:</FormLabel>
                <FormControl>
                  <Input
                    className="shadow font-semibold text-muted-foreground appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="option1.isCorrect"
            render={({ field }) => (
              <FormItem className="w-[90%] flex flex-row items-center justify-start space-x-3 space-y-0 p-4">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel className="cursor-pointer">
                  Is option 1 correct?
                </FormLabel>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="option2.text"
            render={({ field }) => (
              <FormItem className="w-[90%]">
                <FormLabel>Option 2:</FormLabel>
                <FormControl>
                  <Input
                    className="shadow font-semibold text-muted-foreground appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="option2.isCorrect"
            render={({ field }) => (
              <FormItem className="w-[90%] flex flex-row items-center justify-start space-x-3 space-y-0 p-4">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel className="cursor-pointer">
                  Is option 2 correct?
                </FormLabel>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="option3.text"
            render={({ field }) => (
              <FormItem className="w-[90%]">
                <FormLabel>Option 3:</FormLabel>
                <FormControl>
                  <Input
                    className="shadow font-semibold text-muted-foreground appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="option3.isCorrect"
            render={({ field }) => (
              <FormItem className="w-[90%] flex flex-row items-center justify-start space-x-3 space-y-0 p-4">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel className="cursor-pointer">
                  Is option 3 correct?
                </FormLabel>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="option4.text"
            render={({ field }) => (
              <FormItem className="w-[90%]">
                <FormLabel>Option 4:</FormLabel>
                <FormControl>
                  <Input
                    className="shadow font-semibold text-muted-foreground appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="option4.isCorrect"
            render={({ field }) => (
              <FormItem className="w-[90%] flex flex-row items-center justify-start space-x-3 space-y-0 p-4">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel className="cursor-pointer">
                  Is option 4 correct?
                </FormLabel>
              </FormItem>
            )}
          />
          <Button
            variant="superOutline"
            className="w-[250px] border border-indigo-700"
            type="submit"
            disabled={disable}
          >
            Update Question
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default UpdateQuestionForm;
