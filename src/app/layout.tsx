import { TooltipProvider } from "@/components/ui/tooltip";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "CV | Caleb Zamalloa",
	description:
		"Full-stack developer focused in create amazing UX/UI experiences.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="min-h-screen bg-background antialiased">
			<body>
				<TooltipProvider>{children}</TooltipProvider>
			</body>
		</html>
	);
}
