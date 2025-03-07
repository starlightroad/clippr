import { redirect } from "next/navigation";

import { ROUTES } from "@/app/_lib/constants";

export default async function Dashboard() {
  redirect(ROUTES.BOOKMARKS);
}
