"use client";

import { SearchIcon } from "lucide-react";

import useSearch from "@/app/_hooks/use-search";
import { Input } from "@/app/_components/ui/input";

export default function SearchForm() {
  const { query, updateQuery } = useSearch();

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="relative flex items-center">
        <SearchIcon size={16} className="pointer-events-none absolute left-2" />
        <Input
          id="search"
          name="search"
          type="search"
          placeholder="Search bookmarks"
          autoComplete="off"
          value={query}
          onChange={(e) => updateQuery(e.target.value)}
          className="h-8 pl-8"
        />
      </div>
    </form>
  );
}
