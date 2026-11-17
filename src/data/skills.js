import { skillIcons } from './skillIcons'

const chip = (name) => ({ name, icon: skillIcons[name] })

export const skillGroups = [
  {
    key: 'languages',
    label: 'Languages',
    title: 'Programming',
    description:
      'Core languages, data structures and algorithms used across coursework and personal builds.',
    tools: [
      'C',
      'C++',
      'C#',
      'Java',
      'Python',
      'Data Structures',
      'Algorithms',
      'SQL',
      'PostgreSQL',
    ].map(chip),
  },
  {
    key: 'build',
    label: 'Build',
    title: 'Web development',
    description:
      'Building web applications end to end, from the interface people use to the server and database behind it.',
    tools: [
      'PHP',
      'Laravel',
      'REST API',
      'JavaScript',
      'Vue.js',
      'HTML',
      'CSS',
      'Backend Development',
      'Frontend Development',
    ].map(chip),
  },
  {
    key: 'tools',
    label: 'Tools',
    title: 'Platforms & tools',
    description:
      'The environment behind the work: version control, command-line fundamentals, networking and cloud concepts.',
    tools: [
      'Git',
      'GitHub',
      'VS Code',
      'Postman',
      'Linux',
      'Networking',
      'IP Addressing',
      'Subnetting',
      'Cloud Fundamentals',
    ].map(chip),
  },
]

export const skillCount = skillGroups.length
