import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import Providers from "@/providers";

import { Inter } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/common/navbar";
import { Footer } from "@/components/common/footer";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: {
    template: "%s — RestroHQ",
    default: "RestroHQ  — All your restaurant needs, in one place.",
  },
  description: "All your restaurant needs, in one place.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, "antialiased")}>
        <Providers>{children}</Providers>
        <Toaster />
      </body>
    </html>
  );
}
