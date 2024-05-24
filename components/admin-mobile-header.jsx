import Image from "next/image";
import ProfileDropdown from "./profile-dropdown";
import { AdminMobileSidebar } from "./admin-mobile-sidebar";

export const AdminMobileHeader = () => {
  return (
    <nav className="lg:hidden px-6 h-[50px] flex items-center bg-white justify-between fixed top-0 w-full z-50 border-b-sky-700 border">
      <div className="flex items-center w-full">
        <AdminMobileSidebar />
        <div className="pt-8 pl-2 pb-7 flex items-center">
          <Image src="/logo.svg" priority height={50} width={50} alt="logo" />
            <h1 className="text-2xl font-extrabold text-sky-600 tracking-wide">
              Buzz
            </h1>
        </div>
      </div>
      <ProfileDropdown />
    </nav>
  );
};
