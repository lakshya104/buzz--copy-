import { db } from "@/lib/db";

export async function GET(Request) {
  const getUser = await db.user.findMany();

  return new Response(JSON.stringify(getUser), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
