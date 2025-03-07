import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuSkeleton,
} from "@/app/_components/ui/sidebar";

export default function NavCollectionsSkeleton() {
  return (
    <SidebarMenu>
      {new Array(4).fill(0).map((_, idx) => {
        const key = `nav-collection-skeleton-${idx}`;

        return (
          <SidebarMenuItem key={key}>
            <SidebarMenuSkeleton showIcon />
          </SidebarMenuItem>
        );
      })}
    </SidebarMenu>
  );
}
