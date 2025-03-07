import {
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuItem,
} from "@/app/_components/ui/sidebar";

import type { NavItem } from "@/app/_lib/definitions";
import { NavCollectionLink } from "@/app/_features/collections";

const collectionItems: NavItem[] = [
  {
    title: "Health",
    href: "/d/collections/health",
    icon: "LibrarySquareIcon",
  },
  {
    title: "Entertainment",
    href: "/d/collections/entertainment",
    icon: "LibrarySquareIcon",
  },
  {
    title: "Tech",
    href: "/d/collections/tech",
    icon: "LibrarySquareIcon",
  },
];

export default async function NavCollections() {
  // Temporary collections data
  const collections = await new Promise<[]>((res, rej) => {
    setTimeout(() => {
      res([]);
    }, 1000);
  });

  return (
    <SidebarMenu>
      {collectionItems.map((item) => {
        const key = `sidebar-menu-collection-item-${item.title}`;

        return (
          <SidebarMenuItem key={key}>
            <NavCollectionLink
              title={item.title}
              href={item.href}
              icon={item.icon}
            />
            <SidebarMenuBadge>2</SidebarMenuBadge>
          </SidebarMenuItem>
        );
      })}
    </SidebarMenu>
  );
}
