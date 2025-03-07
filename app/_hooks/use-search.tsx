import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function useSearch() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const q = searchParams.get("q")?.toString();
  const [query, setQuery] = useState(q ?? "");

  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set("q", value);
    } else {
      params.delete("q");
    }

    const newUrl = `${pathname}?${params.toString()}`;

    replace(newUrl);
  }, 400);

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
