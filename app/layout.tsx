import type { Metadata } from "next";
import { dark } from "@clerk/themes";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trinity",
  description: "A Twitch clone",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <html lang="en">
        <body className={inter.className}>
          <ThemeProvider attribute="class" forcedTheme="dark" storageKey="trinity-theme">
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
