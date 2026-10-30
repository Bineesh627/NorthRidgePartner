// All the text content of the site lives here, so it can be edited without touching the components.
import industry1 from '../assets/industry-1.jpg';
import industry2 from '../assets/industry-2.jpg';
import industry3 from '../assets/industry-3.jpg';

// Contact email used by the "Book a Discovery Call" buttons
export const CONTACT_EMAIL = 'northridgepartner@gmail.com';
export const LINKEDIN_URL = 'https://www.linkedin.com/company/northridgepartner/';
export const HIRING_BRIEF_SUBJECT = 'Hiring Brief Submission';
export const HIRING_BRIEF_BODY =
  'Hi North Ridge Partner team,\n\nPlease find our hiring brief below.\n\nCompany name:\nContact person & phone:\nRole(s) to hire:\nNumber of positions:\nLocation / work mode (onsite, hybrid, remote):\nExperience level:\nKey skills required:\nBudget / salary range:\nExpected joining timeline:\nAdditional notes:\n\nThank you.';
export const DISCOVERY_CALL_SUBJECT = 'Discovery Call Request';
export const DISCOVERY_CALL_BODY =
  'Hi North Ridge Partner team,\n\nI would like to book a discovery call.\n\nName:\nCompany:\nPhone:\nPreferred date & time:\n\nThank you.';

// `href` must match the `id` of a section on the page.
// Keep this list in the same order as the sections appear on the page (top to bottom).
export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Industries', href: '#industries' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'About', href: '#about' },
  { label: 'HerAmbition', href: '#herambition' },
  { label: 'Contact', href: '#contact' },
];

export const HERO_STATS = [
  { icon: 'bi-people-fill', title: 'Specialist Talent', sub: 'Across IT, Fintech & Startups' },
  { icon: 'bi-bar-chart-fill', title: 'Data-Driven', sub: 'Hiring Decisions' },
  { icon: 'bi-gem', title: 'Long-Term', sub: 'Partnership Approach' },
];

export const TRUSTED_BY = [
  {
    icon: 'bi-code-slash',
    title: 'IT & Technology',
    lines: ['Engineering, Product, Data,', 'Cloud, AI/ML, DevOps'],
  },
  {
    icon: 'bi-bank',
    title: 'Fintech',
    lines: ['Product, Risk, Compliance,', 'Payments, Operations'],
  },
  {
    icon: 'bi-rocket-takeoff',
    title: 'Startups',
    lines: ['Early-stage to Scale-up', 'across all functions'],
  },
];

export const SOLUTIONS = [
  {
    icon: 'bi-people',
    titleLines: ['Permanent & Specialist', 'Recruitment'],
    desc: 'Find and hire the right talent, faster. From niche roles to leadership, we deliver high-quality talent aligned to your business goals.',
    items: [
      'Technology & Engineering',
      'Product, Data & Analytics',
      'Fintech, Risk & Compliance',
      'Sales, Operations & Leadership',
    ],
  },
  {
    icon: 'bi-bar-chart-line',
    titleLines: ['Talent Strategy &', 'Market Intelligence'],
    desc: 'Make informed hiring decisions with real market insights. We help you plan, benchmark and access the right talent for long-term success.',
    items: [
      'Hiring Roadmaps',
      'Salary Benchmarking',
      'Talent Mapping',
      'Role Design & Interview Frameworks',
    ],
  },
  {
    icon: 'bi-gear',
    titleLines: ['Fractional HR &', 'Talent Advisory'],
    desc: 'Expert HR support for growing businesses. Flexible, practical and tailored to your stage of growth.',
    items: [
      'HR Strategy & Processes',
      'Organisational Design',
      'Performance & Talent Management',
      'Employer Branding',
      'People Policies & Leadership Support',
    ],
  },
];

export const PROCESS_STEPS = [
  { number: '01', icon: 'bi-search', title: 'Understand', text: 'We learn about your business, hiring goals and culture.' },
  { number: '02', icon: 'bi-file-earmark-text', title: 'Design', text: 'We define the role, ideal profile and sourcing strategy.' },
  { number: '03', icon: 'bi-people', title: 'Deliver', text: 'We source, assess and present top-quality candidates.' },
  { number: '04', icon: 'bi-hand-thumbs-up', title: 'Support', text: 'Support through offer, onboarding and post-joining engagement.' },
];

export const INDUSTRIES = [
  {
    title: 'IT & Technology',
    text: 'Build world-class technology teams across emerging and established tech stacks.',
    image: industry1,
  },
  {
    title: 'Fintech',
    text: 'Hire specialised talent in a fast-evolving, regulated environment.',
    image: industry2,
  },
  {
    title: 'Startups',
    text: 'Support from first hires to scale, helping you build agile, high-performing teams.',
    image: industry3,
  },
];

export const IMPACT_CASES = [
  {
    title: 'Scaling a Fintech Team',
    text: 'Hired 12 key roles in 6 months, including product, compliance and engineering.',
    stats: [
      { value: '12', label: 'Roles Filled' },
      { value: '6', unit: 'Months', label: 'Time to Hire' },
      { value: '90%', label: 'Retention' },
    ],
  },
  {
    title: 'Tech Startup Growth',
    text: 'Built a core team from 5 to 25 in 12 months across product, engineering and operations.',
    stats: [
      { value: '20', label: 'Roles Filled' },
      { value: '8', unit: 'Months', label: 'Time to Hire' },
      { value: '95%', label: 'Retention' },
    ],
  },
  {
    title: 'Global Capability Centre',
    text: 'Supported a leading IT services firm in setting up a new GCC in India.',
    stats: [
      { value: '30', label: 'Roles Filled' },
      { value: '12', unit: 'Months', label: 'Time to Hire' },
      { value: '92%', label: 'Retention' },
    ],
  },
];

export const DIFFERENTIATOR_ITEMS = [
  'Candidate engagement & follow-ups',
  'Notice period tracking',
  'Drop-off risk management',
  'Pre-joining readiness connects',
];

export const WHY_ITEMS = [
  { icon: 'bi-gem', title: 'Industry Expertise', text: 'Deep knowledge of IT, fintech and startups.' },
  { icon: 'bi-people-fill', title: 'Founder-Led Engagement', text: 'Personal, commitment-driven approach.' },
  { icon: 'bi-bar-chart-line-fill', title: 'Quality Over Quantity', text: 'Rigorous screening and cultural alignment.' },
  { icon: 'bi-star', title: 'Long-Term Focus', text: 'Post-offer support and ongoing partnership.' },
];

export const TESTIMONIALS = [
  {
    quote: '"Northridge Partners helped us find exceptional talent quickly. Their understanding of our business and the market was impressive."',
    author: 'Founder, Fintech Startup',
  },
  {
    quote: '"Professional, responsive and a true partner throughout the hiring process. Highly recommended."',
    author: 'Hiring Manager, IT Services',
  },
  {
    quote: '"They brought structure and market insight to our hiring plans, which made a significant difference to our growth."',
    author: 'COO, High-Growth Startup',
  },
];
