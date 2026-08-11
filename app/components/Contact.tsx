'use client';

import { motion } from 'motion/react';
import { Send, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { Section, SectionHeader } from '@/components/ui';
import { INPUT_CLASS } from '@/constants';
import { Locale, getCopy } from '@/constants/i18n';

const INITIAL_FORM = { name: '', email: '', subject: '', message: '' };

type ContactProps = {
  locale: Locale;
  sectionIndex?: string;
};

export function Contact({ locale, sectionIndex }: ContactProps) {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ kind: 'success' | 'error'; message: string } | null>(null);
  const t = getCopy(locale).contact;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setStatus(null);
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, website: '' }),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to send');
      }

      toast.success(t.success);
      setStatus({ kind: 'success', message: t.success });
      setFormData(INITIAL_FORM);
    } catch {
      toast.error(t.error);
      setStatus({ kind: 'error', message: t.error });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setStatus(null);
    setFormData((current) => ({ ...current, [e.target.name]: e.target.value }));
  };

  return (
    <Section id="contact" bg="gradient-up">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] bg-cyan-500/8 rounded-full blur-3xl" aria-hidden="true" />
        <div className="absolute -bottom-1/2 -left-1/4 w-[800px] h-[800px] bg-blue-600/8 rounded-full blur-3xl" aria-hidden="true" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeader
          index={sectionIndex}
          title={
            <>
              {t.titleLeft}{' '}
              <span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text">
                {t.titleRight}
              </span>
            </>
          }
          description={t.description}
        />

        <div className="mx-auto max-w-3xl">
          <motion.div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  defaultValue=""
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    {t.fields.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                    placeholder={t.placeholders.name}
                    className={INPUT_CLASS}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    {t.fields.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                    inputMode="email"
                    spellCheck={false}
                    placeholder={t.placeholders.email}
                    className={INPUT_CLASS}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  {t.fields.subject}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  autoComplete="off"
                  placeholder={t.placeholders.subject}
                  className={INPUT_CLASS}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  {t.fields.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  autoComplete="off"
                  rows={6}
                  placeholder={t.placeholders.message}
                  className={`${INPUT_CLASS} resize-y`}
                />
              </div>

              <div id="form-status" aria-live="polite" aria-atomic="true">
                {status && (
                  <p
                    role={status.kind === 'error' ? 'alert' : 'status'}
                    className={`rounded-lg border px-4 py-3 text-sm ${status.kind === 'error'
                      ? 'border-red-500/30 bg-red-500/10 text-red-200'
                      : 'border-green-500/30 bg-green-500/10 text-green-200'
                      }`}
                  >
                    {status.message}
                  </p>
                )}
              </div>

              <motion.button
                whileHover={!isSubmitting ? { scale: 1.02 } : undefined}
                whileTap={!isSubmitting ? { scale: 0.98 } : undefined}
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-xl hover:shadow-2xl hover:shadow-cyan-500/25 transition-[box-shadow,opacity,transform] flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
                    <span>{t.sending}</span>
                  </>
                ) : (
                  <>
                    <span>{t.send}</span>
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" aria-hidden="true" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
