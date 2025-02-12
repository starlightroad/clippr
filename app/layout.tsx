import type { Metadata } from "next";

import interFont from "@/app/_lib/font";
import "./_styles/globals.css";
import { HOME_METADATA } from "@/app/_lib/constants";

export const metadata: Metadata = {
  title: {
    template: `%s - ${HOME_METADATA.TITLE}`,
    default: HOME_METADATA.TITLE,
    absolute: `${HOME_METADATA.TITLE} - ${HOME_METADATA.DESCRIPTION}`,
  },
  description: HOME_METADATA.DESCRIPTION,
  keywords: [
    "bookmark manager",
    "save links",
    "Clippr",
    "URL organizer",
    "link storage",
    "web bookmarks",
    "online bookmarks",
    "favorite links",
    "link saver",
    "cloud bookmarks",
    "tagged bookmarks",
    "bookmark sync",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interFont.className} antialiased`}>{children}</body>
    </html>
  );
}
