import { auth } from "@/auth";
import { Header } from "@/components/header";
import { redirect } from "next/navigation";

const AdminLayout = async ({ children }) => {
  const session = await auth();
  if (session?.user.role === "USER") {
    redirect("/home");
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="min-h-screen bg-gray-100 p-2 lg:p-8">
        <h1 className="lg:text-4xl text-2xl font-bold text-sky-800 mb-4">
          Admin Panel <span className="text-base">(Dashboard)</span>
        </h1>
        <div className="bg-white shadow-md rounded-lg p-1 lg:p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
