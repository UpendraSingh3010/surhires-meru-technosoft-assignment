import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

// A fixed date keeps the sitemap static; update it when content changes.
const lastModified = "2026-10-21";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteConfig.url, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${siteConfig.url}/jobs`, lastModified, changeFrequency: "daily", priority: 0.9 },
    { url: `${siteConfig.url}/employers`, lastModified, changeFrequency: "monthly", priority: 0.8 },
  ];
}
