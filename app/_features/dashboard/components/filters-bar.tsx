"use client";

import { PlusCircleIcon } from "lucide-react";

import { Button } from "@/app/_components/ui/button";
import { SearchBar, useSearch } from "@/app/_features/search";

export default function FiltersBar() {
  const { query, updateQuery } = useSearch();

  return (
    <div className="flex gap-3 border-b p-3">
      <SearchBar
        placeholder="Search bookmarks"
        value={query}
        onChange={(e) => updateQuery(e.target.value)}
      />
      <Button variant="outline" size="sm" className="border-dotted">
        <PlusCircleIcon size={16} />
        <span>Collection</span>
      </Button>
    </div>
  );
}
