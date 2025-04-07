"use client";

import { createContext, useReducer } from "react";
import { useSearchParams } from "next/navigation";

const initialState = {
  query: "",
  setQuery: (value: string) => {},
};

type Action = { type: "updated"; payload: string };

const searchReducer = (search: typeof initialState, action: Action) => {
  switch (action.type) {
    case "updated":
      return {
        ...search,
        query: action.payload,
      };
    default:
      throw new Error("Unknown action:", action.type);
  }
};

export const SearchContext = createContext(initialState);

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const searchParams = useSearchParams();

  const [search, dispatch] = useReducer(searchReducer, {
    ...initialState,
    query: searchParams.get("q") ?? "",
  });

  function handleUpdateQuery(query: string) {
    dispatch({ type: "updated", payload: query });
  }

  const value: typeof search = {
    query: search.query,
    setQuery: handleUpdateQuery,
  };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};
