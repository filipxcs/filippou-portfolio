// Single source of truth for the portfolio content.
// Source: Petros-Filippou-CV-2026 (public/Petros-Filippou-CV-2026.pdf)

export const profile = {
  name: 'Petros Filippou',
  title: 'Full Stack Developer',
  focus: 'Solar Park SCADA Integration',
  location: 'Thessaloniki, Greece',
  email: 'filippou.petros.dev@gmail.com',
  phone: '+30 698 862 7133',
  phoneHref: 'tel:+306988627133',
  cv: '/Petros-Filippou-CV-2026.pdf',
  availability: 'Open to work in Greece and across Europe',
  summary:
    'Full Stack Developer with 6+ years of experience building custom websites, e-commerce extensions and business integrations with Vue.js, WordPress, OpenCart and Moodle LMS. Since 2026 I also work in the energy sector: commissioning solar park equipment, writing Lua logic for energy systems and connecting parks to DEDDIE SCADA.',
  links: [
    { label: 'GitHub', href: 'https://github.com/filipxcs', icon: 'github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/petros-filippou-55993b228/', icon: 'linkedin' },
  ],
} as const

export const currentRole = {
  role: 'Solar Park Installation & SCADA Integration',
  company: 'Balkan Constructions',
  place: 'Greece',
  period: 'May 2026 – present',
  points: [
    'Install and commission Elseta WCC Lite units at photovoltaic parks.',
    'Connect parks to the DEDDIE (HEDNO) SCADA system for remote monitoring and control.',
    'Configure relays and dataloggers, set up Modbus and write Lua logic per park.',
  ],
  tags: ['Elseta WCC Lite', 'Modbus', 'Lua', 'DEDDIE SCADA'],
}

export const experience = [
  {
    role: 'Co-Founder',
    company: 'Offload Studio',
    href: 'https://offload.studio',
    place: 'Thessaloniki',
    period: '2025 – present',
    points: [
      'Co-founded a web development and design agency delivering modern, responsive websites, branding and visual design.',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'CC-LIT SA',
    place: 'Thessaloniki',
    period: '2021 – 2024',
    points: [
      'Developed and deployed 7 full websites using WordPress, OpenCart and Moodle LMS.',
      'Built custom OpenCart extensions that automate business operations.',
      'Maintained ERP integrations, keeping data in sync and online.',
      'Contributed to internal tools and customer dashboards in Vue.js.',
    ],
  },
  {
    role: 'Freelance Web & FiveM Developer',
    company: 'Self-employed',
    period: '2019 – present',
    points: [
      'Custom websites with WordPress, OpenCart and Vue.js for small businesses.',
      'FiveM scripts in Lua and JavaScript, including UIs and server-side logic.',
    ],
  },
]

export const skills = [
  { group: 'Frontend', items: ['Vue.js', 'Nuxt.js', 'Tailwind CSS', 'WordPress', 'Moodle LMS', 'Framer', 'UI/UX implementation'] },
  { group: 'Backend & integration', items: ['PHP', 'Node.js', 'SQL', 'OpenCart modules', 'REST APIs', 'ERP connections'] },
  { group: 'Energy & field', items: ['Modbus', 'Lua', 'Elseta WCC Lite', 'Relays & dataloggers', 'DEDDIE SCADA'] },
  { group: 'Tools', items: ['Git & GitHub', 'Figma', 'Odoo ERP/CRM', 'ChatGPT', 'Claude'] },
]

export const education = {
  title: 'Computer Application Technician',
  school: 'IEK DELTA 360',
  place: 'Thessaloniki',
  detail: 'Multimedia, web design and development, video games',
  languages: [
    { name: 'Greek', level: 'Native' },
    { name: 'English', level: 'B1' },
  ],
}
