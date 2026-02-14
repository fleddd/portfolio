'use client';

import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import { useScrollTo } from '@/hooks/useScrollTo';
import { Button } from '@/components/ui';
import { CONTACT_SOCIAL_LINKS } from '../constants';

export function Hero() {
  const scrollTo = useScrollTo();

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0a0f]">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(6, 182, 212, 0.1) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotateX: [0, 360], rotateY: [0, 360], rotateZ: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-20 left-10 w-32 h-32 opacity-10"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="absolute inset-0 border-2 border-cyan-400 bg-cyan-500/5 backdrop-blur-sm" />
        </motion.div>
        <motion.div
          animate={{ rotateX: [360, 0], rotateY: [360, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-32 right-20 w-40 h-40 opacity-10"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="absolute inset-0 border-2 border-blue-400 bg-blue-500/5 backdrop-blur-sm transform rotate-45" />
        </motion.div>
        <motion.div
          animate={{ y: [0, -30, 0], rotateZ: [0, 180, 360] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/3 right-1/4 w-24 h-24 opacity-20"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-cyan-400 stroke-2">
            <polygon points="50,5 90,25 90,75 50,95 10,75 10,25" />
          </svg>
        </motion.div>
      </div>

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-gray-300">Available for work</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                Oleh Fedkiv
              </span>
            </h1>
            <div className="text-2xl md:text-3xl lg:text-4xl font-medium text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text">
              Full-Stack Developer
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 leading-relaxed"
          >
            Building robust, scalable applications with precision and technical excellence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex items-center justify-center gap-4 pt-4"
          >
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-14"
          >
            <Button onClick={() => scrollTo('projects')}>View My Work</Button>
            <Button variant="secondary" onClick={() => scrollTo('contact')}>
              Get In Touch
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.button
            animate={{ y: [-20, -10, -20] }}
            transition={{ duration: 2, repeat: Infinity }}
            onClick={() => scrollTo('about')}
            className="flex flex-col items-center gap-2 text-gray-500 hover:text-cyan-400 transition-colors cursor-pointer"
          >
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
