import Image from "next/image";

import { cn } from "@/lib/utils";
import { SidebarItem } from "./sidebar-item";
import { Button } from "./ui/button";
import { signOut } from "@/auth";
import SignOutButton from "./auth/signout-button";

export const Sidebar = ({ className }) => {
  return (
    <div
      className={cn(
        "flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col",
        className
      )}
    >
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Image src="/logo.svg" priority height={70} width={70} alt="logo" />
          <h1 className="text-2xl font-extrabold text-sky-600 tracking-wide">
            Buzz
          </h1>
        </div>
      <div className="flex flex-col gap-y-2 flex-1">
        <SidebarItem label="Home" href="/home" iconSrc="/feed.svg" />
        {/* <SidebarItem label="Quiz" href="/quiz" iconSrc="/quiz.svg" /> */}
        <SidebarItem
          label="Leaderboard"
          href="/leaderboard"
          iconSrc="/leaderboard.svg"
        />
        <SidebarItem label="Redeem" href="/redeem" iconSrc="/redeem.svg" />
        <SidebarItem label="Support" href="/support" iconSrc="/support.svg" />
        <SidebarItem label="T&C" href="/termsConditions" iconSrc="/terms.svg" />
      </div>
      <div className="lg:hidden px-4 py-8">
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <Button
            variant="dangerOutline"
            className=" bg-slate-100"
            type="submit"
          >
            Sign Out
          </Button>
        </form>
      </div>
      <div className="hidden lg:block px-4 py-8">
        <SignOutButton />
      </div>
    </div>
  );
};
