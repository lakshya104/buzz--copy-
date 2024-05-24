import { Suspense } from "react";
import List from "./list";
import RefreshBtn from "@/components/server-refresh-btn";
import Loader from "./loader";

const Redeem = async () => {

  return (
    <div className="h-full max-w-[912px] px-3 mx-auto">
      <div className="flex justify-center items-center space-x-3">
        <h1 className="text-xl font-bold text-sky-800">Choose Your Reward</h1>
        <RefreshBtn
          title="Rewards Refreshed"
          subTitle="Rewards were refreshed successfully!"
        />
      </div>
      <Suspense fallback={<Loader />}>
        <List />
      </Suspense>
    </div>  
  );
};

export default Redeem;
