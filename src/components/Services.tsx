import {
  Globe,
  LayoutDashboard,
  Server,
  Smartphone,
  Wrench,
  Zap,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const SERVICES: {
  title: string
  description: string
  bullets: readonly string[]
  icon: LucideIcon
}[] = [
  {
    title: 'Web Development',
    description:
      'Responsive, modern websites built with React and Tailwind CSS. From landing pages to full web applications — fast, accessible, and SEO-friendly.',
    bullets: ['React / Next.js', 'Responsive design', 'SEO optimization'],
    icon: Globe,
  },
  {
    title: 'Mobile App Development',
    description:
      'Cross-platform mobile apps with React Native and Expo. One codebase for iOS and Android — cost-effective without sacrificing native feel.',
    bullets: ['React Native / Expo', 'iOS & Android', 'API integration'],
    icon: Smartphone,
  },
  {
    title: 'Frontend Engineering',
    description:
      'Pixel-perfect UI implementation from Figma or design specs. Component libraries, design systems, and clean, maintainable code.',
    bullets: ['Figma to code', 'Component libraries', 'Design systems'],
    icon: LayoutDashboard,
  },
  {
    title: 'Backend & API Integration',
    description:
      "Supabase, REST APIs, authentication, and database setup. Full-stack functionality so your app doesn't just look good — it works.",
    bullets: ['Supabase setup', 'Auth & security', 'REST API design'],
    icon: Server,
  },
  {
    title: 'Bug Fixes & Maintenance',
    description:
      'Existing app needs fixing? I troubleshoot, refactor, and optimize codebases — improving performance, fixing layout issues, and upgrading dependencies.',
    bullets: ['Debugging', 'Code refactoring', 'Performance tuning'],
    icon: Wrench,
  },
  {
    title: 'CI/CD & DevOps',
    description:
      'Docker containerization and Jenkins pipeline setup. Automate your build, test, and deployment workflow for reliable releases.',
    bullets: ['Docker setup', 'Jenkins pipelines', 'Deployment automation'],
    icon: Zap,
  },
]

function Services() {
  return (
    <section
      id="services"
      className="relative bg-navy py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <p className="font-mono text-sm text-accent-amber">03 — Services</p>

        <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#f8fafc] sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
          What I can do for you
        </h2>

        <p className="mt-5 max-w-3xl text-[16px] leading-[1.7] text-zinc-400">
          Whether you need a brand-new app, a website redesign, or help fixing
          an existing project — here&apos;s how I can help bring your idea to
          life.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = service.icon

            return (
              <article
                key={service.title}
                className="flex h-full flex-col rounded-2xl border border-white/10 bg-navy-card p-6 shadow-[0_12px_40px_rgba(0,0,0,0.25)] transition duration-300 hover:-translate-y-1 hover:border-accent-amber/50 hover:shadow-[0_16px_40px_rgba(245,158,11,0.16)]"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-accent-amber">
                  <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                </div>

                <h3 className="mt-5 text-[17px] font-bold text-white">
                  {service.title}
                </h3>

                <p className="mt-3 text-[15px] leading-[1.7] text-zinc-400">
                  {service.description}
                </p>

                <ul className="mt-5 flex flex-col gap-2.5">
                  {service.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-center gap-2.5 text-[13px] text-zinc-300"
                    >
                      <span
                        className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent-amber"
                        aria-hidden="true"
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>

        <div className="mt-16 text-center sm:mt-20">
          <h3 className="text-2xl font-bold tracking-tight text-[#f8fafc] sm:text-3xl">
            Have a project in mind?
          </h3>
          <p className="mt-3 text-[16px] leading-[1.7] text-zinc-400">
            Let&apos;s discuss your idea — free consultation, no obligation.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex h-14 items-center justify-center rounded-full bg-accent-gradient px-8 text-[16px] font-bold text-black shadow-sm transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-amber/70"
            >
              Get a quote
            </a>
            <a
              href="https://www.upwork.com/freelancers/~013c8843df4a19fd85"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center justify-center rounded-full border border-[#3f3f46] bg-transparent px-8 text-[16px] font-medium text-white transition hover:border-accent-amber/60 hover:text-accent-amber focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-amber/70"
            >
              Hire me on Upwork
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
