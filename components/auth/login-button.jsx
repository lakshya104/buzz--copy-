"use client";

import { useRouter } from "next/navigation";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { LoginForm } from "@/components/auth/login-form";

export const LoginButton = ({ children, mode = "redirect", asChild }) => {
  const router = useRouter();
  const onClick = () => {
    router.push("/auth/login");
  };

  if (mode === "modal") {
    return (
      <Dialog>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent className="bg-transparent p-0 w-auto border-none">
          <LoginForm />
        </DialogContent>
      </Dialog>
    );
  }
  return (
    <span className="cursor-pointer" onClick={onClick}>
      {children}
    </span>
  );
};
