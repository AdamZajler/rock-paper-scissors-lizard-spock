import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LogoDynamic } from "@/features/game/components/LogoDynamic";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rock Paper Scissors Lizard Spock",
  description: "My solution for FrontendMentor's challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased py-10 px-6`}>
        <header className="max-w-4xl flex items-center justify-between border-3 border-[var(--border-color)] rounded-xl p-4 px-6 mx-auto">
          <LogoDynamic />
          <div className="bg-[#F9F9F9] flex flex-col items-center gap-1 py-3 px-6 md:px-10 rounded-md">
            <span className="text-[#515EA3] font-bold tracking-wider">SCORE</span>
            <span className="text-[#555368] font-bold text-6xl">12</span>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
