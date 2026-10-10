import type { LucideIcon } from 'lucide-react';
import {
  Github,
  Linkedin,
  User,
  Target,
  Zap,
  Code2,
  Database,
  Cloud,
  Server,
  GitBranch,
  Send,
  Mail,
} from 'lucide-react';
import { CONTACT_EMAIL } from './site';

export { PROJECTS, PROJECT_SLUGS, getProject, getProjectContent } from './projects';
export type { Project, ProjectSlug } from './projects';

// Navigation
export const NAV_ITEMS = ['About', 'Skills', 'Projects', 'Contact'] as const;


// About
export const FEATURES = [
  {
    icon: User,
    title: 'Technical Precision',
    description: 'Crafting clean, maintainable code with meticulous attention to detail.',
  },
  {
    icon: Target,
    title: 'Result-Driven',
    description: 'Focused on delivering scalable solutions that meet business objectives.',
  },
  {
    icon: Zap,
    title: 'Performance First',
    description: 'Optimizing for speed, efficiency, and exceptional user experience.',
  },
] as const;

export const TECH_STACK = ['React / Next', 'TypeScript', 'Nest.js', 'PostgreSQL', 'Docker'] as const;

// Skills
export const SKILL_CATEGORIES = [
  {
    title: 'Frontend',
    icon: Code2,
    recruiterFocus: 'UI architecture, SSR/SSG, and conversion-focused landing pages',
    technologies: [
      { name: 'React', icon: '/assets/react.svg' },
      { name: 'Next.js', icon: '/assets/next-js.svg' },
      { name: 'TypeScript', icon: '/assets/typescript.svg' },
      { name: 'Tailwind CSS', icon: '/assets/tailwind.svg' },
    ],
  },
  {
    title: 'Backend',
    icon: Server,
    recruiterFocus: 'APIs, integrations, validation, and scalable business logic',
    technologies: [
      { name: 'Node.js', icon: '/assets/nodejs.svg' },
      { name: 'NestJS', icon: '/assets/nestjs.svg' },
      { name: 'REST API', icon: '/assets/rest.svg' },
      { name: 'GraphQL', icon: '/assets/graphql.svg' },
      { name: 'Express', icon: '/assets/express.svg' },
    ],
  },
  {
    title: 'Database',
    icon: Database,
    recruiterFocus: 'Data modeling, query performance, and reliable persistence',
    technologies: [
      { name: 'PostgreSQL', icon: '/assets/postgresql.svg' },
      { name: 'MongoDB', icon: '/assets/mongodb.svg' },
      { name: 'Prisma ORM', icon: '/assets/icon.svg' },
    ],
  },
  {
    title: 'DevOps',
    icon: Cloud,
    recruiterFocus: 'Deployment pipelines, containerization, and production stability',
    technologies: [
      { name: 'Docker', icon: '/assets/docker.svg' },
      { name: 'Nginx', icon: '/assets/nginx.svg' },
      { name: 'CI/CD', icon: '/assets/git.svg' },
      { name: 'Cloud', icon: '/assets/blue-circle.svg' },
    ],
  },
  {
    title: 'Tools',
    icon: GitBranch,
    recruiterFocus: 'Version control, API testing, and collaborative workflows',
    technologies: [
      { name: 'Git', icon: '/assets/git.svg' },
      { name: 'GitHub', icon: '/assets/github.svg' },
      { name: 'Postman', icon: '/assets/yellow-circle.svg' },
      { name: 'Jira', icon: '/assets/green-circle.svg' },
    ],
  },
] as const;

export const CODE_SNIPPET = `// Building robust, scalable applications
import express from 'express';
import { createServer } from 'http';

const app = express();
const server = createServer(app);

app.use(express.json());
app.use(cors({ origin: process.env.CLIENT_URL }));
app.use('/api/v1', apiRoutes);

server.listen(PORT, () => {
  console.log(\`🚀 Server running on port \${PORT}\`);
});`;

export const CONTACT_SOCIAL_LINKS: { icon: LucideIcon; href: string; label: string }[] = [
  { icon: Github, href: 'https://github.com/fleddd/', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/olehfedkiv/', label: 'LinkedIn' },
  { icon: Send, href: 'https://telegram.me/olehfedkiv', label: 'Telegram' },
];

// Direct contact channels, shown in the Contact section and the footer.
export const CONTACT_CHANNELS: { icon: LucideIcon; href: string; label: string; value: string; external: boolean }[] = [
  { icon: Mail, href: `mailto:${CONTACT_EMAIL}`, label: 'Email', value: CONTACT_EMAIL, external: false },
  { icon: Send, href: 'https://telegram.me/olehfedkiv', label: 'Telegram', value: '@olehfedkiv', external: true },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/olehfedkiv/', label: 'LinkedIn', value: 'in/olehfedkiv', external: true },
  { icon: Github, href: 'https://github.com/fleddd/', label: 'GitHub', value: 'fleddd', external: true },
];

export const INPUT_CLASS =
  'w-full px-4 py-3 rounded-xl bg-surface border border-line text-ink placeholder-mute focus-visible:border-accent/70 focus-visible:ring-2 focus-visible:ring-accent/30 transition-[border-color,box-shadow,background-color]';

// Footer
export const FOOTER_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
] as const;
