import Link from "next/link";
import {
  FolderOpenIcon,
  LibraryIcon,
  LibrarySquareIcon,
  PlusIcon,
  SettingsIcon,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/app/_components/ui/sidebar";
import BrandLogo from "@/app/_components/brand-logo";

const menuItems = [
  {
    title: "All bookmarks",
    url: "/d/bookmarks",
    icon: LibraryIcon,
  },
  {
    title: "Uncategorized",
    url: "/d/bookmarks/uncategorized",
    icon: FolderOpenIcon,
  },
];

const collectionItems = [
  {
    title: "Health",
    url: "/d/collections/health",
    icon: LibrarySquareIcon,
  },
  {
    title: "Entertainment",
    url: "/d/collections/entertainment",
    icon: LibrarySquareIcon,
  },
  {
    title: "Tech",
    url: "/d/collections/tech",
    icon: LibrarySquareIcon,
  },
];

export default function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center justify-between pl-2">
          <BrandLogo />
          <div className="flex">
            <Link
              href="/d/settings"
              className="hover:bg-sidebar-accent rounded-md p-1"
            >
              <SettingsIcon size={16} />
            </Link>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => {
                const key = `sidebar-menu-item-${item.title}`;
                const SidebarMenuIcon = item.icon;

                return (
                  <SidebarMenuItem key={key}>
                    <SidebarMenuButton asChild>
                      <Link href={item.url}>
                        <SidebarMenuIcon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                    <SidebarMenuBadge>2</SidebarMenuBadge>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Collections</SidebarGroupLabel>
          <SidebarGroupAction title="Add Collection">
            <PlusIcon />
            <span className="sr-only">Add Collection</span>
          </SidebarGroupAction>
          <SidebarGroupContent>
            <SidebarMenu>
              {collectionItems.map((item) => {
                const key = `sidebar-menu-collection-item-${item.title}`;
                const SidebarMenuCollectionIcon = item.icon;

                return (
                  <SidebarMenuItem key={key}>
                    <SidebarMenuButton asChild>
                      <Link href={item.url}>
                        <SidebarMenuCollectionIcon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                    <SidebarMenuBadge>3</SidebarMenuBadge>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
