"use client";

import { FolderOpenIcon, LibraryIcon, LibrarySquareIcon } from "lucide-react";

import type { NavItem } from "@/app/_lib/definitions";

export default function useSidebarIcon(icon: Pick<NavItem, "icon">["icon"]) {
  switch (icon) {
    case "FolderOpenIcon":
      return FolderOpenIcon;

    case "LibraryIcon":
      return LibraryIcon;

    case "LibrarySquareIcon":
      return LibrarySquareIcon;
  }
}
