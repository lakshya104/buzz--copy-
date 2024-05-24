import { Skeleton } from "@/components/ui/skeleton";

export default function Loader() {
  return (
    <div className="pt-3 grid grid-cols-2 lg:grid-cols-4 gap-4">
      <Skeleton className="h-[250px]  w-[170px] bg-slate-200" />
      <Skeleton className="h-[250px]  w-[170px] bg-slate-200" />
      <Skeleton className="h-[250px]  w-[170px] bg-slate-200" />
      <Skeleton className="h-[250px]  w-[170px] bg-slate-200" />
    </div>
  );
}
