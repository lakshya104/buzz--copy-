import { getRewards } from "@/data/queries";
import List from "./list";
import { auth } from "@/auth";
import RefreshBtn from "@/components/server-refresh-btn";

const Redeem = async () => {
  const [sessionResult, rewardsResult] = await Promise.allSettled([
    auth(),
    getRewards(),
  ]);
  
  return (
    <div className="h-full max-w-[912px] px-3 mx-auto">
      <div className="flex justify-center items-center space-x-3">
        <h1 className="text-xl font-bold text-sky-800">Choose Your Reward</h1>
        <RefreshBtn title="Rewards Refreshed"
          subTitle="Rewards were refreshed successfully!" />
      </div>
      <List rewards={rewardsResult.value} userEmail={sessionResult.value.user.email}/>
    </div>
  );
};

export default Redeem;
