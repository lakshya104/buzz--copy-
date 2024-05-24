import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center w-full space-y-3">
      <Skeleton className="h-[300px] w-[70%] lg:w-[600px] bg-slate-300 rounded-xl" />
      <div className="space-y-2 w-full flex justify-center items-center flex-col">
        <Skeleton className="h-[50px] w-[70%] lg:w-[600px] bg-slate-200" />
        <Skeleton className="h-[50px] w-[70%] lg:w-[600px] bg-slate-200" />
        <Skeleton className="h-[50px] w-[70%] lg:w-[600px] bg-slate-200" />
      </div>
    </div>
  );
}
