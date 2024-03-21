"use client";

import { Karla } from "next/font/google";
import "./globals.css";

import { useWindowSize } from "@hooks/useWindowSize";

import { Navbar } from "@components/navigasi/Navbar";
import { Footer } from "@components/navigasi/Footer";

const karla = Karla({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const width = useWindowSize();

  return (
    <html lang="en">
      <body className={karla.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
