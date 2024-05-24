"use client";
import { getLeaderboard } from "@/actions/server-utils";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const PointsTable = ({ pointBoard, email }) => {
  const [leaderBoard, setLeaderboard] = useState(pointBoard);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const pointBoard = await getLeaderboard();
        setLeaderboard(pointBoard);
      } catch (error) {
        console.error("Error fetching leaderboard:", error);
      }
    };

    fetchLeaderboard();
  }, []);

  return (
    <Table>
      <TableCaption>This is a Points Table.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">User</TableHead>
          <TableHead>Email</TableHead>
          <TableHead className="text-right">Points</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {leaderBoard.map((item) => (
          <TableRow
            key={item.id}
            className={cn("font-medium", email === item.email && "bg-slate-200")}
          >
            <TableCell
              className={cn(
                "font-medium",
                email === item.email && "text-sky-700"
              )}
            >
              {email === item.email ? item.name + " (You)" : item.name}
            </TableCell>
            <TableCell
              className={cn(
                "font-medium",
                email === item.email && "text-sky-700"
              )}
            >
              {item.email}
            </TableCell>
            <TableCell
              className={cn(
                "text-right font-bold",
                email === item.email && "text-sky-700"
              )}
            >
              {item.points}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        {/* <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow> */}
      </TableFooter>
    </Table>
  );
};

export default PointsTable;
