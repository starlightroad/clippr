import { SearchIcon } from "lucide-react";
import type { ChangeEventHandler } from "react";

import { cn } from "@/app/_lib/utils";

import { Input } from "@/app/_components/ui/input";

type Props = {
  placeholder: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  className?: string;
};

export default function SearchBar({
  placeholder,
  value,
  onChange,
  className,
}: Props) {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="relative flex items-center">
        <SearchIcon className="pointer-events-none absolute left-2 h-4 w-4" />
        <Input
          id="search"
          name="search"
          type="search"
          placeholder={placeholder}
          autoComplete="off"
          value={value}
          onChange={onChange}
          className={cn("h-8 max-w-xs pl-8", className)}
        />
      </div>
    </form>
  );
}
