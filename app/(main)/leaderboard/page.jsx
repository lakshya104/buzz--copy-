import { getLeaderboard } from "@/actions/redeem";
import React from "react";
import PointsTable from "./points-table";
import RefreshBtn from "@/components/server-refresh-btn";
import { auth } from "@/auth";

const Leaderboard = async () => {
  const [pointBoardResult, session] = await Promise.allSettled([
    getLeaderboard(),
    auth(),
  ]);
  return (
    <div className="h-full max-w-[912px] px-3 mx-auto">
      <div className="flex items-center justify-center space-x-4">
        <h1 className="text-xl font-bold text-sky-800">Leader Board</h1>
        <RefreshBtn
          title="Table Refreshed"
          subTitle="Leaderboard table was refreshed successfully!"
        />
      </div>
      <PointsTable
        pointBoard={pointBoardResult.value}
        email={session.value.user.email}
      />
    </div>
  );
};

export default Leaderboard;
