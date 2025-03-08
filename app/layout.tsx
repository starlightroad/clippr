import type { Metadata } from "next";

import interFont from "@/app/_lib/font";
import "./_styles/globals.css";
import { HOME_PAGE_METADATA } from "@/app/_lib/constants";

import { ThemeProvider } from "@/app/_features/theme";

export const metadata: Metadata = {
  title: {
    template: `%s - ${HOME_PAGE_METADATA.TITLE}`,
    default: HOME_PAGE_METADATA.TITLE,
    absolute: `${HOME_PAGE_METADATA.TITLE} - ${HOME_PAGE_METADATA.DESCRIPTION}`,
  },
  description: HOME_PAGE_METADATA.DESCRIPTION,
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${interFont.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
