import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SnackWhiz",
  description: "Three day one new recipe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="mx-auto flex min-h-full flex-col px-5 lg:max-w-screen-lg lg:px-0 xl:max-w-screen-xl">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
