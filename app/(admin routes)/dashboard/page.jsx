import { ProgressBarLink } from "@/components/progress-bar";
import { Button } from "@/components/ui/button";
import DashboardItems from "./dashboard-items";
import { Suspense } from "react";
import Loader from "./loader";

const page = () => {
  return (
    <div className="bg-gray-50 h-full lg:h-auto flex-1 p-6">
      <div className="flex justify-between items-center mb-12">
        <h1 className="lg:text-3xl text-xl font-bold text-gray-800">Dashboard</h1>
        <ProgressBarLink href={"profile"}>
          <Button variant="primary">Show Profile</Button>
        </ProgressBarLink>
      </div>
      <Suspense fallback={<Loader/>}>
      <DashboardItems />
      </Suspense>
    </div>
  );
};

export default page;
