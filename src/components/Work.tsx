import { ArrowRight } from 'lucide-react'

function GitHubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-3.5 w-3.5"
      aria-hidden="true"
    >
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

const PROJECTS = [
  {
    title: 'Movie App',
    badge: 'Full-Stack',
    description:
      'A full-stack React and TypeScript movie app with live OMDb search, Firebase authentication, and per-user favourites stored in Realtime Database.',
    role: 'Built the entire app solo using AI-assisted development — implemented search, authentication, protected routes, and real-time per-user data.',
    tags: ['React', 'TypeScript', 'Firebase', 'Vite'],
    href: 'https://github.com/Nonye96/movie-app',
  },
  {
    title: 'Contribiia Mobile App',
    badge: 'Capstone Project',
    description:
      'A mobile fintech application that allows users to create and manage contribution circles, track transactions, and handle wallet activities securely.',
    role: 'Built backend services using Supabase, implemented wallet and transaction logic, worked on user profiles and verification flow, and collaborated on frontend API integration.',
    tags: ['React Native', 'Expo', 'TypeScript', 'Supabase', 'REST APIs'],
    href: 'https://github.com/Nonye96/contribiia-fintech-app',
  },
  {
    title: 'Enterprise React App',
    badge: 'Docker & Jenkins CI/CD',
    description:
      'A React application containerized with Docker and automated using a Jenkins CI/CD pipeline for build, test, and deployment workflow.',
    role: 'Built and tested Docker images, implemented Docker setup, contributed to Jenkins CI/CD pipeline setup and documentation, and tested deployment workflow.',
    tags: ['React', 'Node.js', 'Docker', 'Jenkins', 'GitHub'],
    href: 'https://github.com/Nonye96/enterprise-computing-docker-jenkins',
  },
  {
    title: 'Temple Escape',
    badge: 'Unreal Engine Game',
    description:
      'A third-person adventure game where players escape a temple while avoiding AI enemies, collecting points, and completing objectives.',
    role: 'Designed the level environment, implemented AI enemy patrol and chase logic, built HUD elements, and developed health, scoring, and win/lose systems.',
    tags: ['Unreal Engine', 'Blueprints', 'AI Behavior Trees', 'Level Design'],
    href: 'https://github.com/Nonye96/temple-escape-unreal-game',
  },
  {
    title: 'Bow Course Registration',
    badge: 'Team Project',
    description:
      'A full-stack web application that allows students to register for courses, manage schedules, and interact with backend services.',
    role: 'Built frontend UI components, implemented registration forms and validation, connected frontend to backend APIs, and collaborated using Git and GitHub.',
    tags: ['React', 'JavaScript', 'Node.js', 'SQL', 'REST APIs'],
    href: 'https://github.com/Nonye96/bow-course-registration-system',
  },
] as const

function Work() {
  return (
    <section id="work" className="relative bg-navy py-20 sm:py-24 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <p className="font-mono text-sm text-accent-amber">05 — Work</p>

        <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#f8fafc] sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
          Things I&apos;ve built
        </h2>

        <p className="mt-5 max-w-3xl text-[16px] leading-[1.7] text-zinc-400">
          A showcase of my best work across frontend, mobile, backend, and
          DevOps — each project represents real problem-solving and team
          collaboration.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {PROJECTS.map((project) => (
            <article
              key={project.title}
              className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-navy-card shadow-[0_12px_40px_rgba(0,0,0,0.25)] transition duration-300 hover:-translate-y-1 hover:border-accent-amber/40 hover:shadow-[0_16px_40px_rgba(245,158,11,0.16)]"
            >
              <div className="h-[2px] w-full bg-accent-gradient" aria-hidden="true" />

              <div className="flex flex-1 flex-col p-6">
                <div className="flex justify-end">
                  <span className="rounded-full border border-accent-amber/30 bg-accent-amber/10 px-2.5 py-1 text-[11px] font-medium text-accent-amber">
                    {project.badge}
                  </span>
                </div>

                <h3 className="mt-4 text-[18px] font-bold text-white">
                  {project.title}
                </h3>

                <p className="mt-3 text-[15px] leading-[1.7] text-zinc-400">
                  {project.description}
                </p>

                <p className="mt-4 text-[14px] leading-[1.7] text-zinc-400">
                  <span className="font-mono text-[13px] text-accent-amber">
                    My role:
                  </span>{' '}
                  {project.role}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[12px] text-[#94a3b8]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-auto inline-flex items-center gap-2 pt-6 text-[14px] font-medium text-accent-amber transition hover:text-accent-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-amber/70"
                >
                  <GitHubIcon />
                  View Code
                  <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.25} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
