import type { Metadata } from 'next';
import { LeadIntakePage } from '@/components/LeadIntakePage';
import { SITE_URL } from '@/constants/site';

export const metadata: Metadata = {
  title: 'Розпочати проєкт | Олег Федьків',
  description: 'Оберіть послугу й потрібні функції, а потім опишіть обсяг, терміни та контакти за чотири короткі кроки.',
  alternates: {
    canonical: `${SITE_URL}/ua/inquiry`,
    languages: {
      'en-US': `${SITE_URL}/inquiry`,
      'uk-UA': `${SITE_URL}/ua/inquiry`,
    },
  },
  robots: { index: false, follow: true },
};

export default function InquiryUaPage() {
  return <LeadIntakePage locale="ua" />;
}
