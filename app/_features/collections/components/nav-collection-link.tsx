"use client";

import Link from "next/link";

import type { NavItem } from "@/app/_lib/definitions";
import { SidebarMenuButton } from "@/app/_components/ui/sidebar";
import useSidebarIcon from "@/app/_hooks/use-sidebar-icon";

export default function NavCollectionLink({ title, href, icon }: NavItem) {
  const NavIcon = useSidebarIcon(icon);

  return (
    <SidebarMenuButton asChild>
      <Link href={href}>
        <NavIcon />
        <span>{title}</span>
      </Link>
    </SidebarMenuButton>
  );
}
