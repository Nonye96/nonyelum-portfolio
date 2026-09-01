import { useEffect, useState } from 'react'

function GitHubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  )
}

function DownloadIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  )
}

function ArrowRightIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
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
    icon: MailIcon,
  },
] as const

const TYPING_PHRASES = [
  'Available on Upwork',
  'React Native Specialist',
  'Freelance Web & Mobile',
  'Frontend Developer',
] as const

function TypingHeadline() {
  const [text, setText] = useState('')

  useEffect(() => {
    let cancelled = false
    let phraseIndex = 0
    let charCount = 0
    let deleting = false
    let timeoutId: ReturnType<typeof setTimeout>

    const tick = () => {
      if (cancelled) return

      const phrase = TYPING_PHRASES[phraseIndex]

      if (!deleting) {
        charCount += 1
        setText(phrase.slice(0, charCount))

        if (charCount >= phrase.length) {
          deleting = true
          timeoutId = setTimeout(tick, 1800)
          return
        }

        timeoutId = setTimeout(tick, 80)
        return
      }

      charCount -= 1
      setText(phrase.slice(0, Math.max(0, charCount)))

      if (charCount <= 0) {
        deleting = false
        charCount = 0
        phraseIndex = (phraseIndex + 1) % TYPING_PHRASES.length
        timeoutId = setTimeout(tick, 400)
        return
      }

      timeoutId = setTimeout(tick, 40)
    }

    timeoutId = setTimeout(tick, 200)

    return () => {
      cancelled = true
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <p className="relative z-10 mt-8 min-h-[2rem] text-[22px] font-bold leading-snug text-[#f8fafc]">
      {text}
      <span className="typing-cursor" aria-hidden="true" />
    </p>
  )
}

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-svh items-center overflow-hidden bg-navy pt-16"
    >
      <div className="hero-glow" aria-hidden="true" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-4 py-16 pb-28 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-20 lg:pb-28">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-[13px] text-[#94a3b8]">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-amber opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-amber" />
            </span>
            Available for freelance &amp; full-time roles
          </div>

          <p className="mt-8 font-mono text-[14px] text-[#71717a]">Hi, I&apos;m</p>

          <h1 className="mt-3 font-bold leading-[0.95] tracking-tight">
            <span className="block text-[2.75rem] text-[#f8fafc] sm:text-6xl lg:text-[80px]">
              Nonyelum
            </span>
            <span className="block text-[2.75rem] text-accent-gradient sm:text-6xl lg:text-[80px]">
              Ogbuakanne
            </span>
          </h1>

          <TypingHeadline />

          <p className="mt-5 max-w-[34rem] text-[16px] leading-[1.7] text-[#d4d4d8]">
            I build responsive web and mobile applications with React and React
            Native. Whether you need a freelancer for your next project or a
            dedicated developer for your team — let&apos;s talk.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-accent-gradient px-8 text-[16px] font-bold text-black shadow-sm transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-amber/70"
            >
              See my work
              <ArrowRightIcon />
            </a>
            <a
              href="#contact"
              className="inline-flex h-10 items-center justify-center rounded-full border border-[#3f3f46] bg-transparent px-5 text-[14px] font-medium text-white transition hover:border-accent-amber/60 hover:text-accent-amber focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-amber/70"
            >
              Hire me
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Nonyelum-Ogbuakanne-Resume.pdf"
              className="inline-flex h-10 items-center justify-center gap-2 rounded-full border border-[#3f3f46] bg-transparent px-5 text-[14px] font-medium text-white transition hover:border-accent-amber/60 hover:text-accent-amber focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-amber/70"
            >
              <DownloadIcon />
              Resume
            </a>
          </div>

          <div className="mt-10 flex items-center gap-5">
            {SOCIALS.map((social) => {
              const Icon = social.icon
              const external = social.href.startsWith('http')

              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  {...(external
                    ? { target: '_blank', rel: 'noreferrer noopener' }
                    : {})}
                  className="inline-flex text-[#94a3b8] transition hover:text-accent-amber focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-amber/70"
                >
                  <Icon />
                </a>
              )
            })}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg lg:mx-0 lg:justify-self-end">
          <div className="relative">
            <div className="absolute -right-1 -top-5 z-20 sm:-right-3">
              <div className="animate-float rounded-xl border border-white/10 bg-navy px-3 py-2 text-left shadow-lg shadow-black/40">
                <span className="block text-[10px] leading-tight text-[#94a3b8]">
                  currently
                </span>
                <span className="block text-xs font-bold leading-tight text-white">
                  Open to work
                </span>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/10 bg-navy-card shadow-[0_24px_60px_rgba(0,0,0,0.45)]">
              <div className="flex items-center gap-2 px-4 py-3">
                <span
                  className="h-2.5 w-2.5 rounded-full bg-red-500"
                  aria-hidden="true"
                />
                <span
                  className="h-2.5 w-2.5 rounded-full bg-yellow-400"
                  aria-hidden="true"
                />
                <span
                  className="h-2.5 w-2.5 rounded-full bg-blue-500"
                  aria-hidden="true"
                />
              </div>

              <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-7 sm:p-6 sm:text-sm">
                <code>
                  <span className="code-keyword">const</span>{' '}
                  <span className="code-ident">developer</span>{' '}
                  <span className="code-punct">=</span>{' '}
                  <span className="code-punct">{'{'}</span>
                  {'\n'}
                  {'  '}
                  <span className="code-key">name</span>
                  <span className="code-punct">:</span>{' '}
                  <span className="code-string">&apos;Nonyelum&apos;</span>
                  <span className="code-punct">,</span>
                  {'\n'}
                  {'  '}
                  <span className="code-key">role</span>
                  <span className="code-punct">:</span>{' '}
                  <span className="code-string">&apos;Frontend Dev&apos;</span>
                  <span className="code-punct">,</span>
                  {'\n'}
                  {'  '}
                  <span className="code-key">stack</span>
                  <span className="code-punct">:</span>{' '}
                  <span className="code-punct">[</span>
                  <span className="code-string">&apos;React&apos;</span>
                  <span className="code-punct">,</span>{' '}
                  <span className="code-string">&apos;RN&apos;</span>
                  <span className="code-punct">]</span>
                  <span className="code-punct">,</span>
                  {'\n'}
                  {'  '}
                  <span className="code-key">location</span>
                  <span className="code-punct">:</span>{' '}
                  <span className="code-string">&apos;Calgary, AB&apos;</span>
                  <span className="code-punct">,</span>
                  {'\n'}
                  {'  '}
                  <span className="code-key">freelance</span>
                  <span className="code-punct">:</span>{' '}
                  <span className="code-boolean">true</span>
                  <span className="code-punct">,</span>
                  {'\n'}
                  {'  '}
                  <span className="code-key">openToWork</span>
                  <span className="code-punct">:</span>{' '}
                  <span className="code-boolean">true</span>
                  <span className="code-punct">,</span>
                  {'\n'}
                  <span className="code-punct">{'};'}</span>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2">
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#71717a]">
          scroll
        </span>
        <span
          className="relative flex h-8 w-[18px] justify-center rounded-full border border-white"
          aria-hidden="true"
        >
          <span className="scroll-wheel mt-1.5 h-1 w-1 rounded-full bg-accent-amber" />
        </span>
      </div>
    </section>
  )
}

export default Hero
