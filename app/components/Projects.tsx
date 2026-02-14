'use client';

import { motion } from 'motion/react';
import { ExternalLink, Github, Code } from 'lucide-react';
import { Section, SectionHeader, Button } from '@/components/ui';
import { PROJECTS, CODE_SNIPPET, CONTACT_SOCIAL_LINKS } from '@/constants';

export function Projects() {
  return (
    <Section id="projects">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(6, 182, 212, 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(6, 182, 212, 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeader
          title={
            <>
              Featured{' '}
              <span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text">
                Projects
              </span>
            </>
          }
          description="Production-grade applications showcasing technical excellence"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative h-full flex flex-col p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all overflow-hidden">
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient}`} />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${project.gradient} bg-opacity-20 mb-6 w-fit`}
                >
                  <project.icon className="w-6 h-6 text-white" strokeWidth={2} />
                </motion.div>

                <span className="text-xs font-medium text-cyan-400 mb-2 uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6 flex-grow">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className={`flex items-center gap-4 pt-4 ${project.livePreview || project.sourceCode ? 'border-t border-white/10' : ''}`}>
                  {project.livePreview && (
                    <motion.a
                      href={project.livePreview || "#"}
                      whileHover={{ scale: 1.05, x: 5 }}
                      className="z-10 flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </motion.a>
                  )}
                  {project.sourceCode && (
                    <motion.a
                      href={project.sourceCode || "#"}
                      whileHover={{ scale: 1.05, x: 5 }}
                      className="z-10 flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer"
                    >
                      <Github className="w-4 h-4" />
                      <span>Source Code</span>
                    </motion.a>
                  )}

                </div>

                <div className="absolute bottom-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Code className="w-24 h-24 text-cyan-400" strokeWidth={1} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10 overflow-hidden"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <span className="text-sm text-gray-500 font-mono">server.ts</span>
          </div>
          <pre className="text-sm text-gray-400 font-mono overflow-x-auto">
            <code>{CODE_SNIPPET}</code>
          </pre>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-6">Want to see more projects and contributions?</p>
          <Button variant="secondary" href={CONTACT_SOCIAL_LINKS[0].href}>
            <Github className="w-5 h-5" />
            View GitHub Profile
          </Button>
        </motion.div>
      </div>
    </Section>
  );
}
