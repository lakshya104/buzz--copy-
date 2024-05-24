import React from "react";
import PointsTable from "./points-table";
import { getLeaderboard } from "@/actions/server-utils";
import { auth } from "@/auth";

const TableData = async () => {
  const [pointBoardResult, session] = await Promise.allSettled([
    getLeaderboard(),
    auth(),
  ]);
  return (
    <PointsTable
      pointBoard={pointBoardResult.value}
      email={session.value.user.email}
    />
  );
};

export default TableData;
