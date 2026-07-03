import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AppLanguageProvider } from "../components/providers/AppLanguageProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arka Satria | Full Stack Developer",
  description:
    "Premium portfolio of Arka Satria, Full Stack Developer specialized in Laravel, Next.js, TypeScript, Go, and modern web engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <AppLanguageProvider>{children}</AppLanguageProvider>
      </body>
    </html>
  );
}
