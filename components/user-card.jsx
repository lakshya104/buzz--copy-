import { ProgressBarLink } from "./progress-bar";
import { auth } from "@/auth";
import { Button } from "./ui/button";

const UserCard = async () => {
  const session = await auth();

  return (
    <div className="flex justify-center items-center p-4 shadow-2xl w-auto">
      <div className="space-y-1">
        <h4 className="text-sm text-sky-700 font-semibold">Welcome to Buzz</h4>
        <p className="text-sm">
          Name: <span className="font-semibold">{session.user.name}</span>
        </p>
        <p className="text-sm">
          Email: <span className="font-semibold">{session.user.email}</span>
        </p>
        <div className="flex justify-center items-center py-2">
        <ProgressBarLink href={"/profile"} className="w-full">
            <Button variant="superOutline" className="w-full bg-slate-100">
              User Profile
            </Button>
          </ProgressBarLink>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
