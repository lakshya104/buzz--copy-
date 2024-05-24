import {
  getTotalFeedItemsCreated,
  getTotalQuestionsAnsweredForFeedItemsCreated,
  getTotalQuestionsForFeedItemsCreated,
  getTotalRewardsCreated,
  getTotalRewardsRedeemed,
  getTotalUsersEngaged,
  getUserId,
} from "@/data/queries";
import DashboardItemContainer from "./dashboard-item-container";

const DashboardItems = async () => {
  const userId = await getUserId();
  const [
    totalUsersEngaged,
    totalFeedItemsCreated,
    totalRewardsCreated,
    totalRewardsRedeemed,
    totalQuestionsForFeedItemsCreated,
    totalQuestionsAnsweredForFeedItemsCreated,
  ] = await Promise.all([
    getTotalUsersEngaged(userId),
    getTotalFeedItemsCreated(userId),
    getTotalRewardsCreated(userId),
    getTotalRewardsRedeemed(userId),
    getTotalQuestionsForFeedItemsCreated(userId),
    getTotalQuestionsAnsweredForFeedItemsCreated(userId),
  ]);

  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
      <DashboardItemContainer
        title={"Total Feed Items"}
        content={totalFeedItemsCreated}
      />
      <DashboardItemContainer
        title={"Total Questions Answered"}
        content={` ${totalQuestionsAnsweredForFeedItemsCreated} by ${totalUsersEngaged} Users`}
      />
      <DashboardItemContainer
        title={"Total Questions Created"}
        content={totalQuestionsForFeedItemsCreated}
      />
      <DashboardItemContainer
        title={"Total Rewards Created"}
        content={totalRewardsCreated}
      />
      <DashboardItemContainer
        title={"Total Rewards Redeemed"}
        content={totalRewardsRedeemed}
      />
      <DashboardItemContainer
        title={"Total Users Engaged"}
        content={totalUsersEngaged}
      />
    </div>
  );
};

export default DashboardItems;
