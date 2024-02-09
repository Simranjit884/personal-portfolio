//https://www.youtube.com/watch?v=sUKptmUVIBM&list=TLPQMDcwMjIwMjTb859Gok2Kjg&index=3

import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Simranjit | Personal porfolio",
  description: "Simranjit is a fullstack developer with 4 years of experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
