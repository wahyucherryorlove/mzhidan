"use client";

import { Inter } from "next/font/google";
import "./globals.css";

import { useWindowSize } from "@hooks/useWindowSize";

import { NavbarDesktop } from "@components/navigasi/NavbarDesktop";
import { Footer } from "@components/navigasi/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const width = useWindowSize();

  return (
    <html lang="en">
      <body className={inter.className}>
        {width === 0 ? (
          ""
        ) : width < 1024 ? (
          <NavbarDesktop />
        ) : (
          <NavbarDesktop />
        )}

        {children}
        <Footer />
      </body>
    </html>
  );
}
