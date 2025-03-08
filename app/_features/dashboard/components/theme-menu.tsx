"use client";

import { useTheme } from "next-themes";
import { PaletteIcon } from "lucide-react";

import {
  DropdownMenuCheckboxItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@/app/_components/ui/dropdown-menu";

export default function ThemeMenu() {
  const { themes, theme, setTheme } = useTheme();

  return (
    <DropdownMenuSub>
      <DropdownMenuSubTrigger>
        <PaletteIcon />
        <span>Theme</span>
      </DropdownMenuSubTrigger>
      <DropdownMenuSubContent>
        {themes.map((themeValue) => {
          const key = `theme-value${themeValue}}`;
          const checkedValue = theme === themeValue;

          return (
            <DropdownMenuCheckboxItem
              key={key}
              checked={checkedValue}
              onClick={() => setTheme(themeValue)}
              className="capitalize"
            >
              {themeValue}
            </DropdownMenuCheckboxItem>
          );
        })}
      </DropdownMenuSubContent>
    </DropdownMenuSub>
  );
}
