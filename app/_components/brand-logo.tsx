import Link from "next/link";
import { PaperclipIcon } from "lucide-react";

import { ROUTES } from "@/app/_lib/constants";

export default function BrandLogo() {
  return (
    <Link href={ROUTES.HOME} className="flex items-center gap-1">
      <PaperclipIcon size={16} />
      <span className="font-bold">clippr</span>
    </Link>
  );
}
