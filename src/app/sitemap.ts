import type { MetadataRoute } from "next";
import { projects } from "@/data/portfolio";
import { portfolioOrigin } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/profile", ...projects.map(({ slug }) => `/work/${slug}`)].map(
    (path) => ({ url: new URL(path, portfolioOrigin).href }),
  );
}
