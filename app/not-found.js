import { ProgressBarLink } from "@/components/progress-bar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-gray-900 flex items-center justify-center min-h-screen">
      <div className="text-center">
        <Image
          src="https://images.unsplash.com/photo-1602984338060-bfddce132ebc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={500}
          height={500}
          alt="Not Found"
          className="mx-auto mb-6 rounded w-[90%]"
          priority
        />
        <h1 className="text-5xl font-bold text-sky-100 mb-4">404!</h1>
        <p className="text-xl text-gray-100 mb-8">
          Oops! The page you are looking for is not here.
        </p>
        <ProgressBarLink
          href="/home"
        >
          <Button variant="primary" className="px-8 font-black">Go Home</Button>
        </ProgressBarLink>
      </div>
    </div>
  );
}
