import { ArrowUp, Briefcase, Mail } from 'lucide-react'

const UPWORK_URL = 'https://www.upwork.com/freelancers/~013c8843df4a19fd85'

function GitHubIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function LinkedInIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

const SOCIALS = [
  {
    label: 'GitHub',
    href: 'https://github.com/Nonye96',
    icon: GitHubIcon,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/nonyelum-ogbuakanne-689b13245',
    icon: LinkedInIcon,
  },
  {
    label: 'Email',
    href: 'mailto:nonyelumogbuakanne@gmail.com',
    icon: Mail,
  },
  {
    label: 'Upwork',
    href: UPWORK_URL,
    icon: Briefcase,
  },
] as const

function Footer() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-white/10 bg-navy">
      <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <a
            href="#home"
            className="flex items-start gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-amber/70"
          >
            <span
              aria-hidden="true"
              className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-md bg-accent-gradient"
            >
              <span className="font-sans text-sm font-bold text-navy">N</span>
            </span>
            <span>
              <span className="block text-base font-bold tracking-tight text-[#f8fafc]">
                Nonyelum Ogbuakanne
              </span>
              <span className="mt-0.5 block text-[13px] text-zinc-500">
                Frontend Developer
              </span>
            </span>
          </a>

          <div className="flex items-center gap-5">
            {SOCIALS.map((social) => {
              const Icon = social.icon
              const external = social.href.startsWith('http')

              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  {...(external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  className="text-[#94a3b8] transition hover:text-accent-amber focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-amber/70"
                >
                  <Icon className="h-4 w-4" />
                </a>
              )
            })}
          </div>

          <a
            href="#home"
            onClick={(event) => {
              event.preventDefault()
              scrollToTop()
            }}
            className="inline-flex items-center gap-2 text-[13px] font-medium text-[#94a3b8] transition hover:text-accent-amber focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-amber/70"
          >
            Back to top
            <ArrowUp className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
          </a>
        </div>

        <p className="mt-10 text-center text-[13px] text-zinc-500">
          © 2026 Nonyelum Ogbuakanne. Built with React, TypeScript &amp; Tailwind CSS.
        </p>
      </div>
    </footer>
  )
}

export default Footer
