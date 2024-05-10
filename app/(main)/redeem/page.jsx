import { getRewards } from "@/data/queries";
import List from "./list";
import { auth } from "@/auth";
import { getUserPoints } from "@/actions/redeem";
import RefreshBtn from "@/components/server-refresh-btn";

const Redeem = async () => {
  const session = await auth();
  const rewards = await getRewards();
  const points = await getUserPoints(session.user.email);
  return (
    <div className="h-full max-w-[912px] px-3 mx-auto">
      <div className="flex justify-center items-center space-x-3">
        <h1 className="text-xl font-bold text-sky-800">Choose Your Reward</h1>
        <RefreshBtn title="Rewards Refreshed"
          subTitle="Rewards were refreshed successfully!" />
      </div>
      <List rewards={rewards} userEmail={session.user.email} points={points} />
    </div>
  );
};

export default Redeem;
