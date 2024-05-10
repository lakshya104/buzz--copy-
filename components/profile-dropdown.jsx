import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { auth, signOut } from "@/auth";
import { Button } from "./ui/button";
import { ProgressBarLink } from "./progress-bar";

const ProfileDropdown = async () => {
  const session = await auth();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-[44px] rounded-full h-[44px] flex justify-center items-center">
        <Image
          src={"/profile.svg"}
          alt="Profile"
          className="w-12"
          width={100}
          height={100}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="lg:p-5 p-1 min-w-[250px]">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <p className="text-sm">
            Name: <span className="font-semibold">{session.user.name}</span>
          </p>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <p className="text-sm">
            Email: <span className="font-semibold">{session.user.email}</span>
          </p>
        </DropdownMenuItem>
        <DropdownMenuItem className="justify-center flex items-center w-full">
          <ProgressBarLink href={"/profile"} className="w-full">
            <Button variant="superOutline" className="w-full bg-slate-100">
              User Profile
            </Button>
          </ProgressBarLink>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <form
            className="w-full"
            action={async () => {
              "use server";
              await signOut({
                redirectTo: "/",
              });
            }}
          >
            <Button
              variant="dangerOutline"
              className="w-full bg-slate-100"
              type="submit"
            >
              Sign Out
            </Button>
          </form>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileDropdown;
