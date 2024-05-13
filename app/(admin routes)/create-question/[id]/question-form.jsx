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
import { createQuestionWithAnswers } from "@/actions/redeem";
import { useState } from "react";
import { questionFormSchema } from "@/schemas";
import { ArrowLeft } from "lucide-react";
import { ProgressBarLink } from "@/components/progress-bar";
import { NavTooltip } from "@/components/nav-tooltip";

export const QuestionForm = ({ id }) => {
  const router = useRouter();
  const { toast } = useToast();
  const [disable, setDisable] = useState(false);
  const searchParams = useSearchParams();
  const title = searchParams.get("title");

  const form = useForm({
    resolver: zodResolver(questionFormSchema),
    defaultValues: {
      question: "",
      option1: { text: "", isCorrect: false },
      option2: { text: "", isCorrect: false },
      option3: { text: "", isCorrect: false },
      option4: { text: "", isCorrect: false },
    },
  });

  function onSubmit(values) {
    console.log(values);

    createQuestionWithAnswers(
      id,
      values.question,
      values.option1,
      values.option2,
      values.option3,
      values.option4
    );
    setDisable(true);
    router.push("/dashboard");
    router.refresh();
    toast({
      title: "Question Created ",
      description: "Question with answers created successfully!",
    });
  }

  return (
    <div className="mx-auto my-4 p-1 lg:p-3 w-full">
      <div className="flex justify-start items-center mb-6">
        <ProgressBarLink href={`/manage-question/${id}?title=${title}`} className="w-[30%] ml-2">
         <NavTooltip content={"Go back to Manage questions page"}>
          <Button
            variant="ghost"
            className="border border-neutral-300"
            size="sm"
          >
            <ArrowLeft className="h-5 w-5 stroke-2 text-neutral-400" />
          </Button>
          </NavTooltip>
        </ProgressBarLink>
        <h1 className="text-2xl text-center font-bold text-gray-800">
          Create New Question for :{" "}
          <span className="text-lg text-sky-700">{title}</span>
        </h1>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="lg:px-4 py-4 mb-4 flex w-full flex-col items-center justify-center"
        >
          <FormField
            control={form.control}
            name="question"
            render={({ field }) => (
              <FormItem className="lg:w-[70%] w-[90%] mb-2">
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
              <FormItem className="lg:w-[70%] w-[90%]">
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
              <FormItem className="lg:w-[70%] w-[90%] flex flex-row items-center justify-start space-x-3 space-y-0 p-4">
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
              <FormItem className="lg:w-[70%] w-[90%]">
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
              <FormItem className="lg:w-[70%] w-[90%] flex flex-row items-center justify-start space-x-3 space-y-0 p-4">
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
              <FormItem className="lg:w-[70%] w-[90%]">
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
              <FormItem className="lg:w-[70%] w-[90%] flex flex-row items-center justify-start space-x-3 space-y-0 p-4">
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
              <FormItem className="lg:w-[70%] w-[90%]">
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
              <FormItem className="lg:w-[70%] w-[90%] flex flex-row items-center justify-start space-x-3 space-y-0 p-4">
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
            Create Question
          </Button>
        </form>
      </Form>
    </div>
  );
};
