import Link from "next/link";
import { Suspense } from "react";
import { PlusIcon, SettingsIcon, UserCircle2Icon } from "lucide-react";

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
  SidebarMenuItem,
} from "@/app/_components/ui/sidebar";

import type { NavItem } from "@/app/_lib/definitions";
import BrandLogo from "@/app/_components/brand-logo";
import NavItemLink from "@/app/_components/nav-item-link";

import {
  NavCollections,
  NavCollectionsSkeleton,
} from "@/app/_features/collections";

const navItems: NavItem[] = [
  {
    title: "All bookmarks",
    href: "/d/bookmarks",
    icon: "LibraryIcon",
  },
  {
    title: "Uncategorized",
    href: "/d/bookmarks/uncategorized",
    icon: "FolderOpenIcon",
  },
];

export default function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center justify-between pl-2">
          <BrandLogo />
          <ul className="flex items-center gap-1">
            <li>
              <span className="block cursor-pointer rounded-md p-1 hover:bg-sidebar-accent">
                <UserCircle2Icon size={16} />
              </span>
            </li>
            <li>
              <Link
                href="/d/settings"
                className="block rounded-md p-1 hover:bg-sidebar-accent"
              >
                <SettingsIcon size={16} />
              </Link>
            </li>
          </ul>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => {
                const key = `sidebar-menu-item-${item.title}`;

                return (
                  <SidebarMenuItem key={key}>
                    <NavItemLink
                      title={item.title}
                      href={item.href}
                      icon={item.icon}
                    />
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
            <Suspense fallback={<NavCollectionsSkeleton />}>
              <NavCollections />
            </Suspense>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
