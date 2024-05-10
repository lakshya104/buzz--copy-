import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(6, {
    message: "Password is required",
  }),
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(6, {
    message: "Minimum password length must be 6 characters",
  }),
  name: z.string().min(1, {
    message: "Name is required",
  }),
});

export const QuestionSchema = z.object({
  question: z.string().min(10, {
    message: "Minimum question length must be 10 characters",
  }),
  options: z
    .array(
      z.object({
        text: z.string().min(1, {
          message: "Minimum option length must be 1 character",
        }),
        isCorrect: z.boolean(),
      })
    )
    .length(4, {
      message: "There must be exactly 4 options",
    }),
});

export const postFormSchema = z
  .object({
    type: z.enum(["IMAGE", "BLOG_POST", "VIDEO"], {
      message: "Type must be one of: IMAGE, BLOG_POST, VIDEO.",
    }),
    title: z.string().min(20, {
      message: "title must be at least 20 characters.",
    }),
    description: z.string().min(20, {
      message: "description must be at least 200 characters.",
    }),
    subTitle: z.string().min(15, {
      message: "subtitle must be at least 15 characters.",
    }),
    url: z.string(),
    link: z.string(),
  })
  .refine(
    (data) => {
      const { type, url } = data;
      if ((type === "VIDEO" || type === "IMAGE") && url === "") {
        return false;
      }
      return true;
    },
    {
      message: "Url can not be empty in case of VIDEO or IMAGE",
      path: ["url"],
    }
  );

  export const questionFormSchema = z
  .object({
    question: z.string().min(25, {
      message: "Question must contain minimum 25 characters.",
    }),
    option1: z.object({
      text: z.string().min(3, {
        message: "Option text is required.",
      }),
      isCorrect: z.boolean(),
    }),
    option2: z.object({
      text: z.string().min(3, {
        message: "Option text is required.",
      }),
      isCorrect: z.boolean(),
    }),
    option3: z.object({
      text: z.string().min(3, {
        message: "Option text is required.",
      }),
      isCorrect: z.boolean(),
    }),
    option4: z.object({
      text: z.string().min(3, {
        message: "Option text is required.",
      }),
      isCorrect: z.boolean(),
    }),
  })
  .refine(
    (data) => {
      const correctOptions = [
        "option1",
        "option2",
        "option3",
        "option4",
      ].filter((option) => data[option]?.isCorrect);
      return correctOptions.length === 1;
    },
    {
      message: "You must choose one option as correct.",
      path: ["question"],
    }
  );