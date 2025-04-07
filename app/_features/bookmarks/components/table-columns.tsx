"use client";

import Link from "next/link";
import { FolderIcon } from "lucide-react";
import type { ColumnDef } from "@tanstack/react-table";

import type { Bookmark } from "@/app/_features/bookmarks";

import DataTableColumnHeader from "@/app/_components/data-table-column-header";

export const tableColumns: ColumnDef<Bookmark>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Name" />;
    },
  },
  {
    accessorKey: "link",
    header() {
      return <div className="pl-3">URL</div>;
    },
    cell({ row }) {
      const value = row.getValue<string>("link");

      return (
        <Link
          href={value}
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {value}
        </Link>
      );
    },
  },
  {
    accessorKey: "collection",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Collection" />;
    },
    cell: ({ row }) => {
      const notCategorizedValue = "-";
      const value =
        row.getValue<string | null>("collection") ?? notCategorizedValue;

      return (
        <div className="flex items-center space-x-2">
          {value !== notCategorizedValue && <FolderIcon className="h-4 w-4" />}
          <span>{value}</span>
        </div>
      );
    },
  },
];
