import { useState, type FormEvent, type ReactNode } from 'react'
import { Briefcase, Mail, MapPin, Send } from 'lucide-react'

const EMAIL = 'nonyelumogbuakanne@gmail.com'
const UPWORK_URL = 'https://www.upwork.com/freelancers/~013c8843df4a19fd85'

function GitHubIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function LinkedInIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

const CONTACT_ITEMS: {
  label: string
  value: string
  href?: string
  icon: ReactNode
}[] = [
  {
    label: 'Email',
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    icon: <Mail className="h-5 w-5" strokeWidth={1.75} />,
  },
  {
    label: 'LinkedIn',
    value: 'nonyelum-ogbuakanne',
    href: 'https://www.linkedin.com/in/nonyelum-ogbuakanne-689b13245',
    icon: <LinkedInIcon />,
  },
  {
    label: 'GitHub',
    value: '@Nonye96',
    href: 'https://github.com/Nonye96',
    icon: <GitHubIcon />,
  },
  {
    label: 'Upwork',
    value: 'Hire me on Upwork',
    href: UPWORK_URL,
    icon: <Briefcase className="h-5 w-5" strokeWidth={1.75} />,
  },
  {
    label: 'Location',
    value: 'Calgary, AB, Canada',
    icon: <MapPin className="h-5 w-5" strokeWidth={1.75} />,
  },
]

const fieldClassName =
  'mt-2 w-full rounded-xl border border-white/10 bg-navy px-4 py-3 text-[15px] text-[#f8fafc] placeholder:text-zinc-600 outline-none transition focus:border-accent-amber/50 focus:ring-2 focus:ring-accent-amber/40'

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const subject = encodeURIComponent(`Portfolio message from ${name}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    )

    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="relative bg-navy py-20 sm:py-24 lg:py-28">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-[#f8fafc] sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
            Let&apos;s talk
          </h2>

          <p className="mt-5 max-w-xl text-[16px] leading-[1.7] text-zinc-400">
            I&apos;m open to internship opportunities, junior frontend roles,
            freelance projects, and full-time positions. Whether you have a
            question, a project idea, or just want to connect — my inbox is
            always open.
          </p>

          <ul className="mt-8 flex flex-col gap-3">
            {CONTACT_ITEMS.map((item) => {
              const content = (
                <>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent-amber/10 text-accent-amber">
                    {item.icon}
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[12px] text-zinc-500">
                      {item.label}
                    </span>
                    <span className="mt-0.5 block truncate text-[15px] font-medium text-[#f8fafc]">
                      {item.value}
                    </span>
                  </span>
                </>
              )

              const className =
                'flex items-center gap-4 rounded-2xl border border-white/10 bg-navy-card p-4 shadow-[0_8px_24px_rgba(0,0,0,0.2)] transition duration-300'

              if (!item.href) {
                return (
                  <li key={item.label}>
                    <div className={className}>{content}</div>
                  </li>
                )
              }

              const external = item.href.startsWith('http')

              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    {...(external
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                    className={`${className} hover:-translate-y-0.5 hover:border-accent-amber/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-amber/70`}
                  >
                    {content}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-white/10 bg-navy-card p-6 shadow-[0_12px_40px_rgba(0,0,0,0.25)] sm:p-8"
        >
          <label className="block text-[13px] font-medium text-zinc-300" htmlFor="contact-name">
            Your Name
            <input
              id="contact-name"
              type="text"
              name="name"
              required
              autoComplete="name"
              placeholder="Jane Doe"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className={fieldClassName}
            />
          </label>

          <label
            className="mt-5 block text-[13px] font-medium text-zinc-300"
            htmlFor="contact-email"
          >
            Your Email
            <input
              id="contact-email"
              type="email"
              name="email"
              required
              autoComplete="email"
              placeholder="jane@example.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className={fieldClassName}
            />
          </label>

          <label
            className="mt-5 block text-[13px] font-medium text-zinc-300"
            htmlFor="contact-message"
          >
            Message
            <textarea
              id="contact-message"
              name="message"
              required
              rows={6}
              placeholder="Tell me about the opportunity or just say hi..."
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              className={`${fieldClassName} resize-y`}
            />
          </label>

          <button
            type="submit"
            className="mt-6 inline-flex h-14 w-full items-center justify-center gap-2 rounded-full bg-accent-gradient text-[16px] font-bold text-black shadow-sm transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-amber/70"
          >
            Send Message
            <Send className="h-4 w-4" strokeWidth={2.25} aria-hidden="true" />
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
