import type { Metadata } from "next";
import "@fontsource-variable/space-grotesk";
import "lenis/dist/lenis.css";
import "./globals.css";
import { Navigation } from "@/components/Navigation";

export const metadata: Metadata = {
  title: {
    default: "Rishab Tej — Ideas into things that work",
    template: "%s | Rishab Tej",
  },
  description:
    "The Rishab Experience. Explore the work of G. Rishab Tej across strategy, AI-enabled operations, marketing, and community building.",
  robots: {
    index: process.env.PORTFOLIO_INDEXABLE === "true",
    follow: process.env.PORTFOLIO_INDEXABLE === "true",
  },
  openGraph: {
    title: "Rishab Tej — Ideas into things that work",
    description: "Strategy. Technology. Follow-through.",
    type: "website",
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body id="top">
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
