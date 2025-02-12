import Link from "next/link";

import Container from "@/app/_components/container";
import { Button } from "@/app/_components/ui/button";
import BrandLogo from "@/app/_components/brand-logo";
import GitHubRepoButton from "@/app/_components/repo-button";
import { ROUTES } from "@/app/_lib/constants";

export default function Navbar() {
  return (
    <header className="h-14 border border-b">
      <Container>
        <div className="flex h-14 items-center justify-between">
          <BrandLogo />
          <nav>
            <ul className="flex items-center gap-2">
              <li>
                <Button type="button" asChild>
                  <Link href={ROUTES.LOGIN}>Log in</Link>
                </Button>
              </li>
              <li>
                <GitHubRepoButton />
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}
