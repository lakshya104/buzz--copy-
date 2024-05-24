import { Skeleton } from "@/components/ui/skeleton";

export default function Loader() {
  return (
    <div className="flex mt-5 flex-col justify-center items-center w-full space-y-3">
      <div className="space-y-2 w-full flex justify-center items-center flex-col">
        <Skeleton className="h-[40px] w-[90%] lg:w-[870px] bg-slate-200" />
        <Skeleton className="h-[40px] w-[90%] lg:w-[870px] bg-slate-200" />
        <Skeleton className="h-[40px] w-[90%] lg:w-[870px] bg-slate-200" />
        <Skeleton className="h-[40px] w-[90%] lg:w-[870px] bg-slate-200" />
        <Skeleton className="h-[40px] w-[90%] lg:w-[870px] bg-slate-200" />
        <Skeleton className="h-[40px] w-[90%] lg:w-[870px] bg-slate-200" />
        <Skeleton className="h-[40px] w-[90%] lg:w-[870px] bg-slate-200" />
        <Skeleton className="h-[40px] w-[90%] lg:w-[870px] bg-slate-200" />
        <Skeleton className="h-[40px] w-[90%] lg:w-[870px] bg-slate-200" />
      </div>
    </div>
  );
}
