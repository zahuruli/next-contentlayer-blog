import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./component/Header";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zahurul Islam Blog App",
  description: "The blog app creaded with next.js, contentlayer,tailwind etc. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
