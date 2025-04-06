import { getBookmarks } from "@/app/_data/bookmark";

import { tableColumns } from "@/app/_features/bookmarks";

import { DataTable } from "@/app/_components/data-table";

export default async function Bookmarks() {
  const bookmarks = await getBookmarks();

  return (
    <main className="p-3">
      <DataTable columns={tableColumns} data={bookmarks} />
    </main>
  );
}
