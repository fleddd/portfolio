import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/ServiceDetailPage";
import { SERVICE_SLUGS, getServiceContent, ServiceSlug } from "@/constants/services";
import { SITE_URL } from "@/constants/site";

type Params = Promise<{ slug: string }>;

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata(props: { params: Params }): Promise<Metadata> {
  const params = await props.params;
  const slug = params.slug as ServiceSlug;

  if (!SERVICE_SLUGS.includes(slug)) {
    return { title: "Не знайдено" };
  }

  const service = getServiceContent("ua", slug);
  const url = `${SITE_URL}/ua/services/${slug}`;

  return {
    metadataBase: new URL(SITE_URL),
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: [service.primaryKeyword, "розробка сайтів", "бізнес-рішення"],
    alternates: {
      canonical: url,
      languages: {
        "en-US": `${SITE_URL}/services/${slug}`,
        "uk-UA": url,
        "x-default": url,
      },
    },
    openGraph: {
      locale: "uk_UA",
      url,
      title: service.metaTitle,
      description: service.metaDescription,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDescription,
      images: [`${SITE_URL}/opengraph-image`],
    },
  };
}

export default async function ServiceUaPage(props: { params: Params }) {
  const params = await props.params;
  const slug = params.slug as ServiceSlug;

  if (!SERVICE_SLUGS.includes(slug)) {
    return <div>Послуга не знайдена</div>;
  }

  return <ServiceDetailPage locale="ua" slug={slug} />;
}
