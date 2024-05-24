import { FeedWrapper } from "@/components/feed-wrapper";
import { Skeleton } from "@/components/ui/skeleton";
import { StickyWrapper } from "@/components/sticky-wrapper";

export default function Loading() {
  return (
    <div className="flex gap-[48px] lg:px-6 px-0.5">
      <FeedWrapper>
        <div className="flex justify-center items-center flex-col space-y-2">
        <Skeleton className="h-[50px] w-[70%] lg:w-[500px] bg-slate-200" />
          <Skeleton className="h-[300px] w-[70%] lg:w-[600px] bg-slate-300 rounded-xl" />
          <div className="space-y-5 w-full flex justify-center items-center flex-col">
            <Skeleton className="h-[100px] w-[70%] lg:w-[600px] bg-slate-200" />
          </div>
        </div>
        <div className="flex justify-center items-center flex-col space-y-2 mt-10">
        <Skeleton className="h-[50px] w-[70%] lg:w-[500px] bg-slate-200" />
          <Skeleton className="h-[300px] w-[70%] lg:w-[600px] bg-slate-300 rounded-xl" />
          <div className="space-y-5 w-full flex justify-center items-center flex-col">
            <Skeleton className="h-[100px] w-[70%] lg:w-[600px] bg-slate-200" />
          </div>
        </div>
      </FeedWrapper>
      <StickyWrapper>
        <Skeleton className="h-[200px] w-full bg-slate-200" />
      </StickyWrapper>
    </div>
  );
}
