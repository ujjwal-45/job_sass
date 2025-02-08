import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import { getServerSession } from "next-auth";
import { cn } from "@/lib/utils";
import { Toaster } from "../components/ui/sonner";


const lex = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JobNest",
  description: "Job marketplace",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={cn(`tracking-tighter`,lex.className)}>
        {children}
        <Toaster/>
      </body>
    </html>
  );
}
