// Everything on the page is driven from this file — edit here, not in the components.

import workoutTrackerImage from './assets/projects/workout-tracker.png'
import piDashboardImage from './assets/projects/pi-dashboard.png'
import tuneTrackerImage from './assets/projects/tune-tracker.png'
import agentDashboardImage from './assets/projects/agent-dashboard.png'

export const site = {
  firstName: 'Conor',
  lastName: 'McKeon',
  tagline: 'Scientist by training. Builder by habit.',
  about: [
    'I build things because I want to use them. Every project here started as a small itch in my own life: a workout I wanted to log properly, a tune I kept losing track of, a home I wanted to be able to check in on. None of them were built to be impressive. They were built to be used, and most of them still are, every day.',
    'I like understanding things all the way down. That is why I host my own projects on a Raspberry Pi instead of handing them to someone else’s cloud, and why I would rather take a system apart than take its word for it. I came to code from science, and the instinct is the same: be curious, change one thing, see what happens.',
    'I am Irish, I live in Berlin, and I have picked up French and some German along the way. Away from the screen I am usually in the gym or learning another tune. I think the things worth doing are the ones you get slowly better at, and that is most of what you will find here.',
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
// `demo` is the URL behind the "Let's see it in action" button; leave it empty and the button is disabled.
// `comingSoon: true` marks a project that isn't built yet.
// NOTE: the first two projects follow the CV. The `stack` for Tune Tracker and AI Control Dashboard
// is still a guess — replace with what you actually used.
export const projects = [
  {
    category: 'Fitness',
    title: 'Setwise',
    summary: 'Workout tracker',
    description: [
      'A workout tracker for recording training data and visualising progress. I built it for myself and have trained with it for over two years, so every rough edge has been found the hard way.',
      'Data lives in Firebase Realtime Database. User accounts are in development now, ahead of a public release.',
    ],
    stack: ['JavaScript', 'Firebase Realtime Database'],
    demo: 'https://c-mckeon.github.io/LeanLog/',
    image: workoutTrackerImage,
    art: 'grid',
  },
  {
    category: 'Self-Hosting',
    title: 'Pi Home Dashboard',
    summary: 'Self-hosted home monitoring dashboard',
    description: [
      'A self-hosted React dashboard for monitoring environmental data around my home, running on my own hardware rather than someone else’s cloud.',
      'A FastAPI backend handles requests, triggers Python scripts and passes the results of a locally running AI model back to the frontend. Cloudflare Tunnels and Tailscale make it reachable from anywhere.',
    ],
    stack: ['React', 'FastAPI', 'Python', 'Raspberry Pi', 'Cloudflare Tunnels', 'Tailscale'],
    demo: 'https://pi.zen-dashboard.win/',
    image: piDashboardImage,
    art: 'rings',
  },
  {
    category: 'Irish Music',
    title: 'Tune Tracker',
    summary: 'Tunes I am playing and learning',
    description: [
      'A site for keeping track of the Irish tunes I am playing or learning: the name of each tune alongside a YouTube recording of it.',
      'Pick a tune, hit play, and play along — no more hunting for that one version of a reel.',
    ],
    stack: ['React', 'YouTube embeds', 'SQLite'],
    demo: 'https://c-mckeon.github.io/TuneLibrary/',
    image: tuneTrackerImage,
    art: 'lines',
  },
  {
    category: 'Artificial Intelligence',
    title: 'AI Control Dashboard',
    summary: 'One place to run and watch AI agents',
    description: [
      'A control dashboard for AI tools: one place to start tasks, watch what is running, and review what came back.',
      'Not built yet — this is the next project on the bench.',
    ],
    stack: ['React', 'TypeScript', 'Claude API'],
    demo: 'https://c-mckeon.github.io/AgentDash/',
    comingSoon: true,
    image: agentDashboardImage,
    art: 'blocks',
  },
]
