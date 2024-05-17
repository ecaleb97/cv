import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CV | Caleb Zamalloa",
  description: "Full-stack developer focused in create amazing UX/UI experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(
      "min-h-screen bg-background font-sans antialiased",
      GeistSans.variable,
      GeistMono.variable,
    )}>
      <body>
        <TooltipProvider>
          {children}
        </TooltipProvider>
      </body>
    </html>
  );
}
