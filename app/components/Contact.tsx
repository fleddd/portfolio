'use client';

import { motion } from 'motion/react';
import { Send, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { Section, SectionHeader } from '@/components/ui';
import { CONTACT_INFO, CONTACT_SOCIAL_LINKS, INPUT_CLASS } from '@/constants';

const INITIAL_FORM = { name: '', email: '', subject: '', message: '' };

export function Contact() {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to send');
      }

      toast.success('Message sent! I\'ll get back to you soon.');
      setFormData(INITIAL_FORM);
    } catch {
      toast.error('Could not send message. Please try again or email me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Section id="contact" bg="gradient-up">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] bg-cyan-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute -bottom-1/2 -left-1/4 w-[800px] h-[800px] bg-blue-600 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeader
          title={
            <>
              Let&apos;s Build{' '}
              <span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text">
                Together
              </span>
            </>
          }
          description="Have a project in mind? Let's discuss how we can bring your vision to life"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              {CONTACT_INFO.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-cyan-400/30 transition-all group cursor-pointer"
                >
                  <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/20 group-hover:scale-110 transition-transform">
                    <info.icon className="w-6 h-6 text-cyan-400" strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-500 mb-1">{info.label}</div>
                    <div className="text-white font-medium">{info.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              <h3 className="text-white font-semibold">Follow Me</h3>
              <div className="flex gap-4">
                {CONTACT_SOCIAL_LINKS.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-400/50 hover:bg-white/10 transition-all group cursor-pointer"
                  >
                    <social.icon className="w-6 h-6 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-xl border border-green-500/20"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
                </span>
                <span className="text-white font-semibold">Available for Work</span>
              </div>
              <p className="text-sm text-gray-400">Open to new opportunities and exciting projects</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className={INPUT_CLASS}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    className={INPUT_CLASS}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What's this about?"
                  className={INPUT_CLASS}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Tell me about your project..."
                  className={`${INPUT_CLASS} resize-none`}
                />
              </div>

              <motion.button
                whileHover={!isSubmitting ? { scale: 1.02 } : undefined}
                whileTap={!isSubmitting ? { scale: 0.98 } : undefined}
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-xl hover:shadow-2xl hover:shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
