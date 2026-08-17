import type { Metadata } from 'next';
import { LeadIntakePage } from '@/components/LeadIntakePage';
import { SITE_URL } from '@/constants/site';

export const metadata: Metadata = {
  title: 'Start a Project | Oleh Fedkiv',
  description: 'Choose a service and relevant features, then share scope, timeline, and contact details in four short steps.',
  alternates: {
    canonical: `${SITE_URL}/inquiry`,
    languages: {
      'en-US': `${SITE_URL}/inquiry`,
      'uk-UA': `${SITE_URL}/ua/inquiry`,
    },
  },
  robots: { index: false, follow: true },
};

export default function InquiryPage() {
  return <LeadIntakePage locale="en" />;
}
