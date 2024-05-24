import { auth } from "@/auth";
import { AdminMobileHeader } from "@/components/admin-mobile-header";
import { AdminSidebar } from "@/components/admin-sidebar";
import { redirect } from "next/navigation";

const AdminLayout = async ({ children }) => {
  const session = await auth();
  if (session?.user.role === "USER") {
    redirect("/home");
  }

  return (
    <>
      <AdminMobileHeader />
      <AdminSidebar className="hidden lg:flex" />
      <main className="lg:pl-[256px] h-full pt-[50px]">
        <div className="max-w-screen-xl mx-auto pt-6 h-full">
          {children}
        </div>
      </main>
    </>
  );
};

export default AdminLayout;
