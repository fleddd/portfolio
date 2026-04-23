import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/ServiceDetailPage";
import { SERVICE_SLUGS, getServiceContent, ServiceSlug } from "@/constants/services";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://fedkiv.tech";

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
    return { title: "Not found" };
  }

  const service = getServiceContent("en", slug);
  const url = `${SITE_URL}/services/${slug}`;

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: [service.primaryKeyword, "web development", "business solution"],
    alternates: {
      canonical: url,
      languages: {
        "en-US": url,
        "uk-UA": `${SITE_URL}/ua/services/${slug}`,
        "x-default": url,
      },
    },
    openGraph: {
      locale: "en_US",
      url,
      title: service.metaTitle,
      description: service.metaDescription,
      type: "website",
    },
  };
}

export default async function ServicePage(props: { params: Params }) {
  const params = await props.params;
  const slug = params.slug as ServiceSlug;

  if (!SERVICE_SLUGS.includes(slug)) {
    return <div>Service not found</div>;
  }

  return <ServiceDetailPage locale="en" slug={slug} />;
}
