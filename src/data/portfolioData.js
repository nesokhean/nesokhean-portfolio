import { projects, latestProject } from './projects'
import { skillGroups, skillCount } from './skills'

export const profile = {
  name: 'NE SOKHEAN',
  firstName: 'NE',
  lastName: 'SOKHEAN',
  displayName: 'NE Sokhean',
  role: 'Aspiring Cloud Engineer & Software Developer',
  location: 'Phnom Penh, Cambodia',
  email: 'nesokhean1@gmail.com',
  phone: '088 480 7035',
  phoneHref: '+855884807035',
  github: 'https://github.com/nesokhean',
  githubLabel: 'github.com/nesokhean',
  cv: '/NE-SOKHEAN-CV.pdf',
  university: 'Royal University of Phnom Penh',
  universityShort: 'RUPP',
  degree: 'Bachelor of Computer Science',
  year: 'Year 3',
  currently: 'Computer Science student',
  currentlyOrg: 'Royal University of Phnom Penh',
  bio: [
    "I'm a third-year Computer Science student at the Royal University of Phnom Penh. I'm interested in software development, backend systems, networking and cloud computing.",
    'My work connects backend logic with readable interfaces. I build academic projects with Laravel, SQL and Vue.js while strengthening my Linux, networking and cloud foundations.',
  ],
  availability: 'Open to internships and junior developer roles in Phnom Penh or remote.',
}

export const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Business', href: '#business' },
]

export const hero = {
  meta: [
    { icon: 'pin', text: profile.location },
    { icon: 'cap', text: `Computer Science, year 3 at ${profile.universityShort}` },
    { icon: 'code', text: 'Software, backend and cloud' },
  ],
  currently: 'Computer Science student',
  currentlyOrg: 'Royal University of Phnom Penh',
  latestProject,
  stats: [
    { label: 'Projects', value: projects.length },
    { label: 'Skills', value: skillCount },
    { label: 'Business', value: 3 },
  ],
  sparkline: '0,26.1 9.1,18.5 18.2,9.7 27.3,4 36.4,5.3 45.5,10.9 54.5,14.1 63.6,14.7 72.7,16.6 81.8,19.2 90.9,22.9 100,28',
}

export const about = {
  label: 'Who I am',
  sub: profile.location,
  paragraphs: profile.bio,
  facts: [
    { label: 'Studying', value: 'Computer Science, year 3, RUPP' },
    { label: 'Based in', value: 'Phnom Penh, Cambodia' },
    { label: 'Works across', value: 'Backend, cloud and frontend' },
    { label: 'Experience', value: 'Part-time barista, 2024 – present' },
  ],
}

export const achievements = {
  label: 'Verified milestones',
  sub: 'Academic · Work · Projects',
  featured: {
    kicker: 'Academic milestone',
    place: 'Year 3',
    event: 'Computer Science at RUPP',
    badge: 'Year 3',
    description:
      'Currently in the third year of the Bachelor of Computer Science at the Royal University of Phnom Penh, building a foundation in programming, databases, networking and software development.',
    facts: [
      { label: 'Degree', value: 'BSc Computer Science' },
      { label: 'University', value: 'RUPP' },
      { label: 'Location', value: 'Phnom Penh' },
    ],
    tags: ['Computer Science', 'Software', 'Cloud'],
    primary: { label: 'View projects', href: '#projects' },
    secondary: { label: 'Download CV', href: profile.cv },
    images: [
      { src: '/img/milestone-1.webp', alt: 'Year 3 Computer Science milestone poster', pos: '50% 50%' },
      { src: '/img/milestone-2.webp', alt: 'Backend and cloud focus milestone poster', pos: '50% 50%' },
      { src: '/img/milestone-3.webp', alt: 'Learning by shipping milestone poster', pos: '50% 50%' },
    ],
  },
}

export const business = {
  label: "What I'm building",
  sub: '3 focus areas',
  software: {
    label: 'Software',
    title: 'Cloud & backend',
    sub: 'Learning by building',
  },
  retail: {
    label: 'Retail',
    title: 'On the ground',
    sub: 'A job, not an app',
  },
  focuses: [
    {
      key: 'backend',
      name: 'Backend systems',
      product: '',
      tagline: 'APIs, data and server-side logic',
      status: 'Learning by building',
      domain: 'laravel · php · sql',
      desc: 'Building academic projects with Laravel, PHP, SQL and PostgreSQL, focusing on clean data flow, admin workflows and REST API fundamentals.',
      features: [
        'Laravel and PHP applications',
        'Relational schema design',
        'REST API fundamentals',
      ],
      stack: ['Laravel', 'PHP', 'PostgreSQL'],
      accent: '#0a7a8c',
      mockName: 'Backend',
      detail: { label: 'See projects', url: '#projects' },
      poster: null,
      url: null,
    },
    {
      key: 'cloud',
      name: 'Cloud foundations',
      product: '',
      tagline: 'Toward cloud engineering',
      status: 'Currently learning',
      domain: 'linux · networking · cloud',
      desc: 'Studying Linux fundamentals, IP addressing, subnetting and cloud concepts while connecting them to real backend projects.',
      features: [
        'Networking and subnetting',
        'Linux fundamentals',
        'Cloud fundamentals',
      ],
      stack: ['Linux', 'Networking', 'Cloud'],
      accent: '#2f5bea',
      mockName: 'Cloud',
      detail: { label: 'About my focus', url: '#about' },
      poster: null,
      url: null,
    },
  ],
  retailBusiness: {
    name: 'Part-Time Barista',
    desc: 'Customer-facing work alongside full-time studies since 2024, focused on clear communication, teamwork and staying organized during busy service.',
    services: ['Customer service', 'Teamwork', 'Time management', 'Calm under pressure'],
    links: [{ label: 'My CV', url: profile.cv }],
    logo: '/img/barista-mark.png',
    gallery: [
      { src: '/img/barista-1.webp', alt: 'Customer service poster' },
      { src: '/img/barista-2.webp', alt: 'Teamwork on shift poster' },
      { src: '/img/barista-3.webp', alt: 'Time management poster' },
      { src: '/img/barista-4.webp', alt: 'Calm under pressure poster' },
    ],
  },
}

export const contact = {
  sub: "I'm open to internships, collaborations and junior developer roles.",
  links: [
    { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, external: false },
    { label: 'GitHub', value: profile.githubLabel, href: profile.github, external: true },
    { label: 'Phone', value: profile.phone, href: `tel:${profile.phoneHref}`, external: false },
    { label: 'CV', value: 'Download CV (PDF)', href: profile.cv, external: true },
  ],
}

export const footer = {
  name: profile.name,
  text: 'Built with Vue in Phnom Penh',
}

export { projects, skillGroups }
