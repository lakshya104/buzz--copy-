import { ProgressBarLink } from "@/components/progress-bar";
import { Button } from "@/components/ui/button";
import { getUser } from "@/data/queries";
import Image from "next/image";
import { FcRight } from "react-icons/fc";

const Profile = async () => {
  const user = await getUser();
  return (
    <div className="mx-auto px-8 py-3 bg-white shadow-lg rounded-lg font-inter">
      <div className="text-center">
        <div className="mx-auto mb-4 mt-6 w-32 h-32 md:w-48 md:h-48 relative border-4 border-white rounded-full">
          <Image
            className="rounded-full"
            src="/profile2.svg"
            alt="Profile"
            fill
            sizes="190px"
          />
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold mt-2 font-poppins text-slate-900">
          {user.name}
        </h1>
        <p className="text-lg text-sky-800 font-semibold">{user.role}</p>
        {user.role !== "USER" && (
          <ProgressBarLink href={"/dashboard"}>
            <Button
              className="mt-2 border border-b-4 border-indigo-500"
              variant="superOutline"
            >
              Go to Admin Panel <FcRight className="stroke-[4] ml-2 w-5 h-5" />
            </Button>
          </ProgressBarLink>
        )}
      </div>

      <div className="mt-8 border-t pt-6">
        <div className="grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          <div className="sm:col-span-1">
            <p className="text-lg font-semibold text-sky-700">Email</p>
            <p className="mt-2 text-lg text-gray-900">{user.email}</p>
          </div>
          <div className="sm:col-span-1">
            <p className="text-lg font-semibold text-sky-700">Total Points</p>
            <p className="mt-2 text-lg text-gray-900">{user.points}</p>
          </div>
          <div className="sm:col-span-1">
            <p className="text-lg font-semibold text-sky-700">
              Answered Questions
            </p>
            <p className="mt-2 text-lg text-gray-900">
              {user.answeredQuestions.length}
            </p>
          </div>
          <div className="sm:col-span-1 lg:col-span-2">
            <p className="text-lg font-semibold text-sky-700">
              Redeemed Rewards
            </p>
            <p className="mt-2 text-lg text-gray-900">
              {user.redeemedRewards.length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
