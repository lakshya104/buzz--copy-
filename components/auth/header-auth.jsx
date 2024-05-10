import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export const Header = ({ label, heading }) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <h1 className={cn("text-3xl font-semibold", font.className)}> 🔐 {heading}</h1>
      <p className="text-slate-600 font-medium text-md">
        {label}
      </p>
    </div>
  );
} 