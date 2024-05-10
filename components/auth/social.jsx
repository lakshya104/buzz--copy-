"use client";

import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { Button } from "../ui/button";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { useToast } from "../ui/use-toast";

export const Social = () => {
  const { toast } = useToast();
  const onClick = (provider) => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    });
    toast({
      title: "Signing In",
      description: `Trying signing in with ${provider}`,
    });
  };

  return (
    <div className="flex items-center w-full gap-x-2">
      <Button className="w-full" size="lg" onClick={() => onClick("google")}>
        <FcGoogle className="h-5 w-5" />
        <p className="text-muted-foreground text-xs font-semibold pl-2">
          Sign in with Google
        </p>
      </Button>
      {/* <Button className="w-full" size="lg" onClick={() => onClick("github")}>
        <FaGithub className="h-5 w-5" />
      </Button> */}
    </div>
  );
};
