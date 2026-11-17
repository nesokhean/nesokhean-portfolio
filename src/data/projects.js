export const projects = [
  {
    id: 'student-internship-job-platform',
    name: 'Student Internship Job Platform',
    type: 'Web App',
    year: '2026',
    description:
      'A platform connecting students with internship opportunities, with search, filtering and application tracking.',
    details:
      'Designed the core data model for students, companies, internship listings and applications. The interface includes search and filtering, a guided application flow, and an admin area for publishing and maintaining internship posts.',
    highlights: [
      'Student and administrator roles',
      'Internship search and filtering',
      'Application tracking',
      'Company and listing management',
    ],
    stack: ['Laravel', 'PHP', 'PostgreSQL'],
    image: '/img/project-internship.webp',
    imageAlt: 'Student internship job platform interface preview',
    url: null,
  },
  {
    id: 'event-ticket-booking-system',
    name: 'Event Ticket Booking System',
    type: 'Web App',
    year: '2026',
    description:
      'A booking platform for browsing events, selecting seats and reserving tickets, with an admin area for events and reservations.',
    details:
      'Built around an event catalogue and a seat reservation flow, with an admin area for creating events and monitoring bookings. The project focuses on clear data relationships, form validation, and a booking experience that stays simple from selection to confirmation.',
    highlights: [
      'Event browsing and seat selection',
      'Ticket reservation flow',
      'Admin event and booking management',
      'Relational data model for events and tickets',
    ],
    stack: ['PHP', 'Laravel', 'SQL', 'JavaScript'],
    image: '/img/project-event-ticket.webp',
    imageAlt: 'Event ticket booking system interface preview',
    url: null,
  },
  {
    id: 'online-learning-platform',
    name: 'LearnFlow Online Learning Platform',
    type: 'Learning Platform',
    year: '2026',
    description:
      'A course platform where instructors publish lessons and students follow structured content and track their progress.',
    details:
      'Structured courses into modules and lessons, with a student-facing progress view and an instructor-side content workflow. The project explores content organization, role-based access and a calm reading experience.',
    highlights: [
      'Course and lesson structure',
      'Student progress tracking',
      'Instructor content workflow',
      'Role-based access',
    ],
    stack: ['Vue.js', 'JavaScript', 'PHP', 'Laravel', 'SQL'],
    image: '/img/project-learning.webp',
    imageAlt: 'Online learning platform interface preview',
    url: null,
  },
  {
    id: 'restaurant-management-system',
    name: 'Restaurant Management System',
    type: 'Management System',
    year: '2026',
    description:
      'A point-of-sale style application for taking orders, managing tables and tracking daily sales during busy service.',
    details:
      'Built a compact order-taking workflow with table status, menu management and daily sales summaries. The interface prioritizes quick actions and readable information for use during a busy service.',
    highlights: [
      'Order and table management',
      'Menu and category management',
      'Daily sales summary',
      'Fast, task-focused interface',
    ],
    stack: ['C#', 'SQL', 'HTML', 'CSS'],
    image: '/img/project-restaurant.webp',
    imageAlt: 'Restaurant management system interface preview',
    url: null,
  },
  {
    id: 'school-management-system',
    name: 'School Management System',
    type: 'Management System',
    year: '2026',
    description:
      'A school administration tool covering students, classes, attendance and results in one place with clear dashboards.',
    details:
      'Combined student records, class assignments, attendance and results into a single administration tool. The project focuses on a clean relational schema and dashboards that make routine academic tasks easier to scan.',
    highlights: [
      'Student and class records',
      'Attendance tracking',
      'Results management',
      'Administrative dashboards',
    ],
    stack: ['PHP', 'Laravel', 'PostgreSQL', 'JavaScript'],
    image: '/img/project-school.webp',
    imageAlt: 'School management system interface preview',
    url: null,
  },
]

export const latestProject = projects[0]
