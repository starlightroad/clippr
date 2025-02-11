import Link from "next/link";
import { PaperclipIcon } from "lucide-react";

export default function BrandLogo() {
  return (
    <Link href="/" className="flex items-center gap-1">
      <PaperclipIcon size={16} />
      <span className="font-bold">clippr</span>
    </Link>
  );
}
