import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTrigger
} from "@/components/ui/sheet";
import { AdminSidebar } from "./admin-sidebar";

export const AdminMobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-sky-700" />
      </SheetTrigger>
      <SheetContent className="p-0 z-[100]" side="left">
        <AdminSidebar />
      </SheetContent>
    </Sheet>
  );
};