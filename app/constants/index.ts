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
  { value: '3+', label: 'Years Experience' },
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
    skills: [
      { name: 'React / Next.js', level: 99 },
      { name: 'TypeScript', level: 97 },
      { name: 'Tailwind CSS', level: 99 },
    ],
  },
  {
    title: 'Backend',
    icon: Server,
    color: 'from-blue-500 to-purple-500',
    skills: [
      { name: 'Node.js / Nest.js', level: 95 },
      { name: 'REST APIs', level: 97 },
      { name: 'GraphQL APIs', level: 80 },
    ],
  },
  {
    title: 'Database',
    icon: Database,
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'PostgreSQL', level: 95 },
      { name: 'MongoDB', level: 87 },
      { name: 'Prisma ORM', level: 92 },
    ],
  },
  {
    title: 'DevOps',
    icon: Cloud,
    color: 'from-pink-500 to-red-500',
    skills: [
      { name: 'Azure', level: 86 },
      { name: 'Docker', level: 88 },
      { name: 'CI/CD', level: 86 },
      { name: 'Nginx', level: 88 },

    ],
  },
  {
    title: 'Tools',
    icon: GitBranch,
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'Git / GitHub', level: 97 },
      { name: 'Postman', level: 90 },
      { name: 'Jira', level: 94 },

    ],
  },
] as const;

// Projects
export const PROJECTS = [
  {
    title: 'Sea Travel Booking Platform',
    category: 'Web Application',
    description: 'A multi-vendor travel booking platform with real-time availability and secure payments.',
    tech: ['Next.js', 'PostgreSQL', 'Prisma ORM', 'VPS'],
    gradient: 'from-cyan-500 to-blue-500',
    icon: Layers,
    sourceCode: "",
    livePreview: "",
  },
  {
    title: 'AI-Powered Copywriting Tool',
    category: 'Frontend',
    description: 'AI-powered copywriting tool for content optimization with your own styles and requirements.',
    tech: ['Next.js', 'PostgreSQL', 'Docker', "TipTap"],
    gradient: 'from-blue-500 to-purple-500',
    icon: Zap,
    sourceCode: "",
    livePreview: "",
  },
  {
    title: 'Employee Management System',
    category: 'Pet Project',
    description: 'Secure employee management system with authentication and real-time collaboration.',
    tech: ['React', 'Firebase', 'Tailwind CSS', "Typescript"],
    gradient: 'from-purple-500 to-pink-500',
    icon: Code,
    sourceCode: "",
    livePreview: "",
  },
  {
    title: 'Notes',
    category: 'Pet Project',
    description: 'A simple note-taking app with authentication and real-time collaboration.',
    tech: ['React', 'C#', 'PostgreSQL', 'ASP.Net', 'Azure'],
    gradient: 'from-pink-500 to-red-500',
    icon: Layers,
    sourceCode: "https://github.com/fleddd/notes",
    livePreview: "",
  },
  {
    title: 'Real-Time Chatting Tool',
    category: 'Pet Project',
    description: 'Chat with live messaging, editing, video, gifs and emojis.',
    tech: ['React', 'Socket.io', 'Express', 'MongoDB', 'Mongoose ORM'],
    gradient: 'from-orange-500 to-yellow-500',
    icon: Zap,
    sourceCode: "https://github.com/fleddd/realtimemessanger",
    livePreview: "",
  },
  {
    title: 'Telegram Bot with Web API',
    category: 'Telegram Bots',
    description: 'Telegram bot with web API for real-time data management.',
    tech: ['Angular', 'Spring Boot', 'MySQL', 'Kafka', 'K8s'],
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
