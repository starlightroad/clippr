import Link from "next/link";
import { SettingsIcon, UserCircle2Icon } from "lucide-react";

import { getUser } from "@/app/_data/user";

import { ThemeMenu } from "@/app/_features/dashboard";
import { LogoutForm } from "@/app/_features/auth";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/app/_components/ui/dropdown-menu";

export default async function UserMenu() {
  const user = await getUser();
  const [username] = user.name.split("@");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="block rounded-md">
        <span className="block cursor-pointer rounded-md p-1 hover:bg-sidebar-accent">
          <UserCircle2Icon size={16} />
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel className="flex items-center gap-2">
          <span className="rounded-md bg-secondary p-2">
            <UserCircle2Icon size={16} />
          </span>
          <div className="truncate">
            <p className="truncate font-semibold">{username}</p>
            <p className="truncate text-xs text-muted-foreground">
              {user.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <ThemeMenu />
          <DropdownMenuItem asChild>
            <Link href="/d/settings">
              <SettingsIcon />
              <span>Settings</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <LogoutForm />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
