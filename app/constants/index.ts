import type { LucideIcon } from 'lucide-react';
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  User,
  Target,
  Zap,
  Code2,
  Database,
  Cloud,
  Server,
  GitBranch,
  Code,
  Layers,
  Send,
} from 'lucide-react';

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

export const STATS = [
  { value: '3+', label: 'Years in Tech' },
  { value: '8+', label: 'Months of commercial experience' },
  { value: '5+', label: 'Projects Completed' },
  { value: '5+', label: 'Happy Clients' },
  { value: '100%', label: 'Commitment' },
] as const;

// Skills
export const SKILL_CATEGORIES = [
  {
    title: 'Frontend',
    icon: Code2,
    color: 'from-cyan-500 to-blue-500',
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
    color: 'from-blue-500 to-purple-500',
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
    color: 'from-purple-500 to-pink-500',
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
    color: 'from-pink-500 to-red-500',
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
    color: 'from-green-500 to-emerald-500',
    recruiterFocus: 'Version control, API testing, and collaborative workflows',
    technologies: [
      { name: 'Git', icon: '/assets/git.svg' },
      { name: 'GitHub', icon: '/assets/github.svg' },
      { name: 'Postman', icon: '/assets/yellow-circle.svg' },
      { name: 'Jira', icon: '/assets/green-circle.svg' },
    ],
  },
] as const;

// Projects
export const PROJECTS = [
  {
    id: 'sea-travel',
    title: 'Sea Travel Booking Platform',
    category: 'Web Application',
    description: 'A multi-vendor travel booking platform with real-time availability and secure payments.',
    tech: ['Next.js', 'PostgreSQL', 'Prisma ORM', 'VPS'],
    gradient: 'from-cyan-500 to-blue-500',
    icon: Layers,
    sourceCode: "",
    livePreview: "https://seatravel.hr",
  },
  {
    id: 'ai-copywriting',
    title: 'AI-Powered Copywriting Tool',
    category: 'SaaS MVP',
    description: 'AI-powered copywriting tool for content optimization with your own styles and requirements.',
    tech: ['Next.js', 'PostgreSQL', 'Docker', "TipTap"],
    gradient: 'from-blue-500 to-purple-500',
    icon: Zap,
    sourceCode: "",
    livePreview: "",
  },
  {
    id: 'telegram-bot',
    title: 'Telegram Bot with Web API',
    category: 'Lead Automation',
    description: 'Telegram bot with web API for real-time data management.',
    tech: ['React', 'Tailwind', 'REST API', "Telegram API"],
    gradient: 'from-green-500 to-emerald-500',
    icon: Code,
    sourceCode: "",
    livePreview: "",
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

// Contact
export const CONTACT_INFO = [
  { icon: Mail, label: 'Email', value: 'fedkiv20172@gmail.com', href: 'mailto:fedkiv20172@gmail.com' },
  { icon: MapPin, label: 'Location', value: 'Ukraine, Lviv', href: '#' },
] as const;

export const CONTACT_SOCIAL_LINKS: { icon: LucideIcon; href: string; label: string }[] = [
  { icon: Github, href: 'https://github.com/fleddd/', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/olehfedkiv/', label: 'LinkedIn' },
  { icon: Send, href: 'https://telegram.me/olehfedkiv', label: 'Telegram' },
];

export const INPUT_CLASS =
  'w-full px-4 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-white placeholder-gray-500 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 transition-all outline-none';

// Footer
export const FOOTER_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
] as const;
