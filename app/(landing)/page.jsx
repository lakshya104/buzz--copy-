import Image from "next/image";
import { Button } from "@/components/ui/button";
import { auth } from "@/auth";
import { ProgressBarLink } from "@/components/progress-bar";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();

  if (session) {
    redirect("/home");
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 w-full">
      <div className="max-w-[988px] mx-auto w-full flex flex-col-reverse lg:flex-row items-center justify-around p-6 gap-8 bg-gradient-to-r from-cyan-50 to-sky-200 rounded-lg shadow-xl my-8 lg:my-12">
        <div className="flex-1 flex flex-col items-center lg:items-start gap-y-4 p-4">
          <h2 className="text-xl lg:text-3xl font-bold text-sky-700 max-w-md text-center lg:text-left hover:text-sky-800 transition-colors duration-300">
            Discover How It Works
          </h2>
          <p className="text-neutral-600 text-base md:text-lg lg:text-xl text-center lg:text-left">
            Dive into our world where
            <span className="font-semibold text-sky-600 m-1 decoration-sky-300 decoration-4 underline-offset-4">
              watching content
            </span>
            ,
            <span className="font-semibold text-sky-600 m-1 decoration-sky-300 decoration-4 underline-offset-4">
              answering quizzes
            </span>
            , and
            <span className="font-semibold text-sky-600 m-1 decoration-sky-300 decoration-4 underline-offset-4">
              earning points
            </span>
            becomes a
            <span className="font-semibold text-yellow-600 m-1 decoration-yellow-300 decoration-4 underline-offset-4">
              thrilling adventure!
            </span>
            Redeem your points for amazing gifts and vouchers. Join us on this
            exciting journey now.
          </p>
        </div>
        <div className="relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] bg-sky-100 rounded-full flex items-center justify-center overflow-hidden shadow-inner">
          <Image
            src="/ai2.jpg"
            fill
            alt="Hero"
            className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-500"
          />
        </div>
      </div>
      <div className="max-w-[988px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-6 gap-4 bg-gradient-to-r from-sky-200 to-cyan-50 rounded-lg shadow-lg my-8 lg:my-12">
        <div className="relative w-[240px] h-[240px] lg:w-[424px] lg:h-[424px] mb-8 lg:mb-0">
          <Image src="/hero2.svg" fill alt="Hero" />
        </div>
        <div className="flex flex-col items-center gap-y-6">
          <h1 className="text-2xl lg:text-4xl font-extrabold text-slate-600 max-w-2xl text-center">
            Watch, answer, and win with Buzz.
          </h1>
          <div className="flex flex-col items-center gap-y-4 max-w-sm w-full">
            <Button variant="primary" className="w-full">
              <ProgressBarLink
                href="/auth/register"
                className="flex justify-center items-center"
              >
                Get Started
              </ProgressBarLink>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
