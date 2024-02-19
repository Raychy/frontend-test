import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { config, library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
library.add(fas);

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Test",
  description: "Test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
