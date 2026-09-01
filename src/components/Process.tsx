import { Code, File, MessageSquare, Rocket } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const STEPS: {
  number: string
  title: string
  description: string
  icon: LucideIcon
}[] = [
  {
    number: '1',
    title: 'Discovery Call',
    description:
      'We start with a free consultation to understand your goals, timeline, and budget. I ask the right questions to scope the project accurately.',
    icon: MessageSquare,
  },
  {
    number: '2',
    title: 'Plan & Quote',
    description:
      "I deliver a clear project breakdown with milestones, deliverables, and a fixed quote. No surprises — you know exactly what you're getting and when.",
    icon: File,
  },
  {
    number: '3',
    title: 'Build & Review',
    description:
      'I build your project with regular progress updates. You see the work as it happens, with review checkpoints at each milestone to ensure alignment.',
    icon: Code,
  },
  {
    number: '4',
    title: 'Launch & Support',
    description:
      'After deployment, I provide documentation, handoff, and post-launch support to make sure everything runs smoothly. Your success is my reputation.',
    icon: Rocket,
  },
]

function Process() {
  return (
    <section id="process" className="relative bg-navy py-20 sm:py-24 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-sm text-accent-amber">04 — Process</p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#f8fafc] sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
            How we&apos;ll work together
          </h2>

          <p className="mt-5 text-[16px] leading-[1.7] text-zinc-400">
            A clear, transparent process from first message to final delivery —
            so you always know where your project stands.
          </p>
        </div>

        <ol className="relative mt-16 grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-8">
          <div
            className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-8 hidden h-px bg-white/10 lg:block"
            aria-hidden="true"
          />

          {STEPS.map((step) => {
            const Icon = step.icon

            return (
              <li key={step.number} className="relative z-10 text-center">
                <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-white/15 bg-navy text-accent-amber">
                  <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent-amber text-[11px] font-bold text-black">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-6 text-[17px] font-bold text-white">
                  {step.title}
                </h3>

                <p className="mt-3 text-[15px] leading-[1.7] text-zinc-400">
                  {step.description}
                </p>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}

export default Process
