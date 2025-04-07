"use client";

import { useContext, useEffect } from "react";
import { useDebouncedCallback } from "use-debounce";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { SEARCH_DELAY_IN_MS, SearchContext } from "@/app/_features/search";

export default function useSearch() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const { query, setQuery } = useContext(SearchContext);
  const q = searchParams.get("q");

  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set("q", value);
    } else {
      params.delete("q");
    }

    const newUrl = `${pathname}?${params.toString()}`;

    replace(newUrl);
  }, SEARCH_DELAY_IN_MS);

  const updateQuery = (value: string) => {
    setQuery(value);
  };

  useEffect(() => {
    handleSearch(query);
  }, [query]);

  useEffect(() => {
    if (!q) {
      updateQuery("");
    }
  }, [q]);

  return {
    query,
    updateQuery,
  };
}
