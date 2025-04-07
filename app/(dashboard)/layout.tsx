import { SearchProvider } from "@/app/_features/search";
import { FiltersBar, Navbar } from "@/app/_features/dashboard";

import AppSidebar from "@/app/_components/sidebar";
import { SidebarProvider } from "@/app/_components/ui/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SearchProvider>
      <SidebarProvider>
        <AppSidebar />
        <div className="w-full bg-sidebar p-2">
          <div className="h-full w-full rounded-md border bg-white">
            <Navbar />
            <FiltersBar />
            {children}
          </div>
        </div>
      </SidebarProvider>
    </SearchProvider>
  );
}
