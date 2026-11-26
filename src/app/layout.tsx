import type { Metadata } from "next";
import "@fontsource-variable/space-grotesk";
import "lenis/dist/lenis.css";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { allowIndexing, portfolioName, portfolioOrigin } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(portfolioOrigin),
  alternates: { canonical: "/" },
  title: {
    default: portfolioName,
    template: `%s | ${portfolioName}`,
  },
  description:
    "Explore the work of G. Rishab Tej across strategy, AI-enabled operations, marketing, and community building.",
  robots: {
    index: allowIndexing,
    follow: allowIndexing,
  },
  openGraph: {
    title: portfolioName,
    siteName: portfolioName,
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
