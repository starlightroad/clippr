"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookmarkPlusIcon } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/app/_components/ui/breadcrumb";
import { Button } from "@/app/_components/ui/button";

export default function Navbar() {
  const pathname = usePathname();

  const items = pathname.split("/").slice(2);

  const newItems = items.length === 1 ? [...items, "all"] : items;

  return (
    <header className="rounded-t-md border-b p-3">
      <div className="flex items-center justify-between">
        <Breadcrumb>
          <BreadcrumbList>
            {newItems.map((item, idx) => {
              const id = `navbar-item-${item}`;
              const isLastItem = idx === newItems.length - 1;

              if (isLastItem) {
                return (
                  <BreadcrumbItem key={id} className="capitalize">
                    <BreadcrumbPage>{item}</BreadcrumbPage>
                  </BreadcrumbItem>
                );
              }

              return (
                <>
                  <BreadcrumbItem key={id} className="capitalize">
                    <BreadcrumbLink asChild>
                      <Link href={`/d/${item}`}>{item}</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                </>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>
        <Button variant="outline" size="sm">
          <BookmarkPlusIcon size={16} />
          <span>Add Bookmark</span>
        </Button>
      </div>
    </header>
  );
}
