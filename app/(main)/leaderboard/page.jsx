import { Suspense } from "react";
import RefreshBtn from "@/components/server-refresh-btn";
import Loader from "./loader";
import TableData from "./table-data";

const Leaderboard = async () => {
  return (
    <div className="h-full max-w-[912px] px-3 mx-auto">
      <div className="flex items-center justify-center space-x-4">
        <h1 className="text-xl font-bold text-sky-800">Leader Board</h1>
        <RefreshBtn
          title="Table Refreshed"
          subTitle="Leaderboard table was refreshed successfully!"
        />
      </div>
      <Suspense fallback={<Loader />}>
        <TableData />
      </Suspense>
    </div>
  );
};

export default Leaderboard;
