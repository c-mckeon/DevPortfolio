// Everything on the page is driven from this file — edit here, not in the components.

import workoutTrackerImage from './assets/projects/workout-tracker.png'
import piDashboardImage from './assets/projects/pi-dashboard.png'
import tuneTrackerImage from './assets/projects/tune-tracker.png'
import agentDashboardImage from './assets/projects/agent-dashboard.png'

export const site = {
  firstName: 'Conor',
  lastName: 'McKeon',
  tagline: 'Curious about data and what it makes possible.',
  about: [
    'Hi, I’m Conor. Welcome to my site!\nI’m Irish, I’ve studied in Galway and Montpellier, and I now live in Berlin.',
    'I’m interested in technology, what we can learn from data, and what becomes possible as our understanding grows. That interest led me to science and programming, where I’ve found plenty of room for figuring things out, finding patterns and sharing what I’ve learned.',
    'I like using data to make things visible, and I’m drawn to projects that make information useful. I built my training app because seeing progress changes how I train, and my music app because I wanted a better way to learn and organise tunes. Often, I’m looking for small ways technology can make something I already care about more engaging or effective.',
    'I enjoy working through problems with other people and seeing how different ideas shape the project. I also love seeing what happens when the work is out in the world, the feedback it gets, the conversations it starts and the ideas that follow.',
  ],
  skills: [
    'JavaScript',
    'Python',
    'React',
    'Node.js',
    'HTML & CSS',
    'FastAPI',
    'Firebase',
    'Cloudflare Workers & Tunnels',
    'Linux',
    'Raspberry Pi',
    'Tailscale',
    'Git',
    'R',
  ],
  links: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mckeon-conor' },
    // `copy` instead of `href` opens a small drawer with the value and a copy button
    { label: 'Email', copy: 'conor.mckeon4@gmail.com' },
  ],
}

// `image` is optional: drop a file in src/assets/projects/, import it above and set image: myImport.
// Without one, the card falls back to the `art` pattern (grid | rings | lines | blocks | dots).
// `demo` is the URL behind the action button; leave it empty and the button is disabled.
// `cta` is that button's label (defaults to "Let's see it in action").
// `comingSoon: true` marks a project that isn't built yet.
// NOTE: Home Dashboard and LeanLog follow the CV. The `stack` for Setlist and AI Agent Sandbox
// is still a guess — replace with what you actually used.
export const projects = [
  {
    category: 'Self-Hosted Service Manager',
    title: 'Home Dashboard',
    description: [
      'A self-hosted React dashboard for collecting and monitoring environmental data around my home. It gives me a live view of sensor readings and a way to track changes over time.',
      'A FastAPI backend handles requests and runs the Python scripts that collect and process the data. The whole system runs at home, with Cloudflare Tunnels and Tailscale providing secure remote access.',
    ],
    stack: ['Raspberry Pi', 'Linux', 'FastAPI', 'Python', 'Cloudflare Tunnels', 'Tailscale', 'React'],
    demo: 'https://pi.zen-dashboard.win/',
    cta: 'Let’s see what’s running',
    image: piDashboardImage,
    art: 'rings',
  },
  {
    category: 'Fitness Tracker App',
    title: 'LeanLog',
    description: [
      'A minimal, customisable workout tracker for recording training data and visualising progress. I built it for myself and have used it for every workout for over two years. I’ve since made it publicly available for others to use.',
      'Workout and settings data are stored in Firebase Realtime Database, with authentication handled by Amazon Cognito. GitHub Actions builds and deploys the frontend from a public repository, while the backend is containerised with Docker and hosted on Azure.',
    ],
    stack: ['JavaScript', 'Firebase Realtime Database', 'AWS Cognito', 'Docker', 'Azure', 'GitHub Actions'],
    demo: 'https://c-mckeon.github.io/LeanLog/',
    cta: 'Let’s get to work',
    image: workoutTrackerImage,
    art: 'grid',
  },
  {
    category: 'Music Practice Platform',
    title: 'Setlist',
    description: [
      'A play-along tool for learning and practising Irish music. I built it to catalogue the tunes I play and give me more control over how I practise them.',
      'Each tune combines a YouTube recording with custom controls for speed, looping and timed autoplay, alongside chord diagrams and auto-scrolling lyrics or notes. Tunes can be arranged into sets and played in sequence, making it easy to practise individual tunes or play through a full set.',
    ],
    stack: ['React', 'YouTube embeds', 'SQLite'],
    demo: 'https://c-mckeon.github.io/TuneLibrary/',
    cta: 'Let’s hear it',
    image: tuneTrackerImage,
    art: 'lines',
  },
  {
    category: 'Model Testing Environment',
    title: 'AI Agent Sandbox',
    description: [
      'A testing environment for running and evaluating AI agents, with tools for launching tasks, following their progress, inspecting tool use and comparing results.',
      'It’s an ambitious build, and my first at this level with a frontier coding agent. Careful planning, step-by-step explanations and diagrams keep the architecture clear while Claude Code handles increasingly complex parts of the implementation.',
    ],
    stack: ['React', 'TypeScript', 'Claude API'],
    demo: 'https://c-mckeon.github.io/AgentDash/',
    cta: 'Let’s see what they’re up to',
    comingSoon: true,
    image: agentDashboardImage,
    art: 'blocks',
  },
]
