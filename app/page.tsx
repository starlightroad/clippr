import Link from "next/link";

import { Heading1, Text } from "@/app/_components/ui/typography";
import { Button } from "@/app/_components/ui/button";
import Container from "@/app/_components/container";
import Navbar from "@/app/_components/navbar";
import { HOME_METADATA } from "@/app/_lib/constants";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="py-12">
        <Container>
          <div className="flex flex-col items-center text-center">
            <header>
              <Heading1>
                {HOME_METADATA.TITLE} &ndash; {HOME_METADATA.DESCRIPTION}
              </Heading1>
            </header>
            <Text className="max-w-xl text-xl font-medium text-muted-foreground">
              Easily save and access your most important websites, articles, and
              resources all in one place. Stay organized, stay connected.
            </Text>
            <div className="mt-6 w-full">
              <Button type="button" className="w-full sm:w-auto" asChild>
                <Link href="/login">Get started</Link>
              </Button>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
