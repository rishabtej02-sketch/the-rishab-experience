import type { MetadataRoute } from "next";
import { allowIndexing, portfolioOrigin } from "@/data/site";

export default function robots(): MetadataRoute.Robots {
  if (!allowIndexing) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${portfolioOrigin}/sitemap.xml`,
  };
}
