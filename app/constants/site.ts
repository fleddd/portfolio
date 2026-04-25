export const DEFAULT_SITE_URL = "https://www.fedkiv.tech";
export const SITE_NAME = "Oleh Fedkiv";
export const SITE_TITLE = "Oleh Fedkiv | Full-Stack Developer";
export const SITE_DESCRIPTION =
  "Web development for SMB and startups: fast websites, lead-focused landing pages, MVP delivery, and API/CRM integrations.";
export const CONTACT_EMAIL = "fedkiv20172@gmail.com";

function normalizeSiteUrl(value: string) {
  return value.replace(/\/+$/, "");
}

const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL)
  : DEFAULT_SITE_URL;

if (
  process.env.NODE_ENV === "production" &&
  /localhost|127\.0\.0\.1/i.test(configuredSiteUrl)
) {
  throw new Error(
    "NEXT_PUBLIC_SITE_URL must point to the canonical production domain."
  );
}

if (
  process.env.VERCEL_ENV === "production" &&
  configuredSiteUrl !== DEFAULT_SITE_URL
) {
  throw new Error(
    `NEXT_PUBLIC_SITE_URL must be ${DEFAULT_SITE_URL} in production.`
  );
}

export const SITE_URL = configuredSiteUrl;

export function absoluteUrl(path = "") {
  if (!path) return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
