import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import React from "react";

const loading = () => {
  return (
    <div className="mx-auto px-8 py-3 bg-white shadow-lg rounded-lg font-inter">
      <div className="text-center">
        <div className="mx-auto mb-4 mt-6 w-32 h-32 md:w-48 md:h-48 relative border-4 border-white rounded-full">
          <Image
            className="rounded-full"
            src="/profile2.svg"
            alt="Profile"
            fill
            sizes="190px"
          />
        </div>
        <div className="flex w-full space-y-3 items-center flex-col justify-center">
          <Skeleton className="w-40 h-8 bg-slate-300" />
          <Skeleton className="w-40 h-8 bg-slate-300" />
        </div>
      </div>

      <div className="mt-8 border-t pt-6">
        <div className="grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          <div className="sm:col-span-1">
            <p className="text-lg font-semibold text-sky-700">Email</p>

            <Skeleton className="w-40 mt-2 h-8 bg-slate-300" />
          </div>
          <div className="sm:col-span-1">
            <p className="text-lg font-semibold text-sky-700">Total Points</p>
            <Skeleton className="w-40 mt-2 h-8 bg-slate-300" />
          </div>
          <div className="sm:col-span-1">
            <p className="text-lg font-semibold text-sky-700">
              Answered Questions
            </p>
            <Skeleton className="w-40 mt-2 h-8 bg-slate-300" />
          </div>
          <div className="sm:col-span-1 lg:col-span-2">
            <p className="text-lg font-semibold text-sky-700">
              Redeemed Rewards
            </p>
            <Skeleton className="w-40 mt-2 h-8 bg-slate-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default loading;
