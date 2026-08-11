import { MetadataRoute } from "next";
import { SERVICE_SLUGS } from "@/constants/services";
import { PROJECT_SLUGS } from "@/constants/projects";
import { SITE_URL } from "@/constants/site";

const LAST_MODIFIED = new Date("2026-08-08");

export default function sitemap(): MetadataRoute.Sitemap {
  const servicePages = SERVICE_SLUGS.flatMap((slug) => [
    {
      url: `${SITE_URL}/services/${slug}`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/ua/services/${slug}`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
  ]);
  const projectPages = PROJECT_SLUGS.flatMap((slug) => [
    {
      url: `${SITE_URL}/projects/${slug}`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/ua/projects/${slug}`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
  ]);

  return [
    {
      url: SITE_URL,
      lastModified: LAST_MODIFIED,
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${SITE_URL}/ua`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    ...servicePages,
    ...projectPages,
    {
      url: `${SITE_URL}/privacy-policy`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/technical`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/terms-of-service`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/ua/privacy-policy`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/ua/technical`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/ua/terms-of-service`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    },
  ];
}
