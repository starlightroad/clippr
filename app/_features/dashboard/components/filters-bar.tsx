import { PlusCircleIcon } from "lucide-react";

import { SearchForm } from "@/app/_features/dashboard";
import { Button } from "@/app/_components/ui/button";

export default function FiltersBar() {
  return (
    <div className="flex gap-3 border-b p-3">
      <SearchForm />
      <Button variant="outline" size="sm" className="border-dotted">
        <PlusCircleIcon size={16} />
        <span>Collection</span>
      </Button>
    </div>
  );
}
