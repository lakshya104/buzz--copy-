"use server";

import { AuthError } from "next-auth";

import { LoginSchema } from "@/schemas";
import { signIn } from "@/auth";

export const login = async (values) => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid Fields!" };
  }

  const { email, password } = validatedFields.data;

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: "/home",
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid Credentials" };
        default:
          return { error: "Something went wrong" };
      }
    }
    throw error;
  }
};
