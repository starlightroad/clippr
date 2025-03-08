import { PaletteIcon } from "lucide-react";

import {
  DropdownMenuCheckboxItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@/app/_components/ui/dropdown-menu";

export default function ThemeMenu() {
  const themeValues = ["auto", "light", "dark"];

  return (
    <DropdownMenuSub>
      <DropdownMenuSubTrigger>
        <PaletteIcon />
        <span>Theme</span>
      </DropdownMenuSubTrigger>
      <DropdownMenuSubContent>
        {themeValues.map((themeValue, idx) => {
          const key = `theme-value${themeValue}}`;
          const checkedValue = idx === 0;

          return (
            <DropdownMenuCheckboxItem
              key={key}
              checked={checkedValue}
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
