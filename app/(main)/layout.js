import { Sidebar } from "@/components/sidebar";
import { MobileHeader } from "@/components/mobile-header";

const MainLayout = ({ children }) => {
  return (
    <>
      <MobileHeader />
      <Sidebar className="hidden lg:flex" />
      <main className="lg:pl-[256px] h-full pt-[50px] lg:pt-0">
        <div className="max-w-screen-xl mx-auto pt-6 h-full">{children}</div>
      </main>
    </>
  );
};

export default MainLayout;
