import Link from "next/link";
import Image from "next/image";

import { Button } from "@/app/_components/ui/button";

export default function GitHubRepoButton() {
  const GITHUB_REPO_LINK = "https://github.com/starlightroad/clippr";

  return (
    <Button type="button" size="icon" variant="outline" asChild>
      <Link href={GITHUB_REPO_LINK} target="_blank">
        <Image
          src="github-mark.svg"
          alt="Link to the GitHub repo site"
          width={16}
          height={16}
        />
      </Link>
    </Button>
  );
}
