import { Skeleton } from "@/components/ui/skeleton";
import React from "react";
import DashboardItemContainer from "./dashboard-item-container";

const Loader = () => {
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
      <DashboardItemContainer
        title={"Total Feed Items"}
        content={<Skeleton className="h-7 w-60 bg-gray-200" />}
      />
      <DashboardItemContainer
        title={"Total Questions Answered"}
        content={<Skeleton className="h-7 w-60 bg-gray-200" />}
      />
      <DashboardItemContainer
        title={"Total Questions Created"}
        content={<Skeleton className="h-7 w-60 bg-gray-200" />}
      />
      <DashboardItemContainer
        title={"Total Rewards Created"}
        content={<Skeleton className="h-7 w-60 bg-gray-200" />}
      />
      <DashboardItemContainer
        title={"Total Rewards Redeemed"}
        content={<Skeleton className="h-7 w-60 bg-gray-200" />}
      />
      <DashboardItemContainer
        title={"Total Users Engaged"}
        content={<Skeleton className="h-7 w-60 bg-gray-200" />}
      />
    </div>
  );
};

export default Loader;
