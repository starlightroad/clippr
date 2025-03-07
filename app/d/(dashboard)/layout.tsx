import AppSidebar from "@/app/_components/sidebar";
import { FiltersBar, Navbar } from "@/app/_features/dashboard";
import { SidebarProvider } from "@/app/_components/ui/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
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
  );
}
