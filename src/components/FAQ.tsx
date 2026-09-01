import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const FAQS = [
  {
    question: 'How much do you charge?',
    answer:
      'Pricing depends on the scope and complexity of your project. Simple landing pages start at a lower range, while full web or mobile applications are quoted based on features. I always provide a fixed quote upfront after our discovery call — no hourly surprises.',
  },
  {
    question: 'How long does a typical project take?',
    answer:
      "Timelines vary by scope. A landing page might take one to two weeks, while a full application can take several weeks. I'll give you a clear timeline with milestones during the planning stage.",
  },
  {
    question: 'Do you work with clients outside Canada?',
    answer:
      'Yes. I work remotely with clients worldwide and am comfortable collaborating across time zones using clear communication and regular updates.',
  },
  {
    question: 'What if I need changes after the project is delivered?',
    answer:
      'I include a support window after delivery for fixes and small adjustments. For larger changes or ongoing work, we can arrange a maintenance agreement.',
  },
  {
    question: 'Can you work with my existing codebase?',
    answer:
      'Absolutely. I can review, refactor, debug, and extend existing React, React Native, or JavaScript projects while keeping the code clean and maintainable.',
  },
  {
    question: 'Do you only do frontend, or full-stack too?',
    answer:
      'My focus is frontend and mobile development, but I also have backend experience with Supabase, REST APIs, authentication, and databases — so I can deliver full-stack functionality when needed.',
  },
  {
    question: 'How do payments work?',
    answer:
      'For freelance projects I typically use milestone-based payments, or Upwork for contract work. Details are agreed upfront so everything is transparent.',
  },
  {
    question: 'Are you available for long-term contracts?',
    answer:
      "Yes. I'm open to both one-off projects and long-term contracts or full-time roles. Let's talk about what works best for you.",
  },
] as const

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  function toggle(index: number) {
    setOpenIndex((current) => (current === index ? null : index))
  }

  return (
    <section id="faq" className="relative bg-navy py-20 sm:py-24 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-sm text-accent-amber">06 — FAQ</p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#f8fafc] sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
            Frequently asked questions
          </h2>

          <p className="mt-5 text-[16px] leading-[1.7] text-zinc-400">
            Common questions from clients. Don&apos;t see yours? Just reach
            out.
          </p>
        </div>

        <div className="mx-auto mt-12 flex max-w-3xl flex-col gap-3">
          {FAQS.map((item, index) => {
            const isOpen = openIndex === index
            const panelId = `faq-panel-${index}`
            const buttonId = `faq-button-${index}`

            return (
              <article
                key={item.question}
                className={`rounded-2xl border bg-navy-card shadow-[0_12px_40px_rgba(0,0,0,0.2)] transition-colors duration-300 ${
                  isOpen
                    ? 'border-accent-amber/40'
                    : 'border-white/10'
                }`}
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent-amber/70 sm:px-6 sm:py-5"
                  >
                    <span className="text-[15px] font-bold text-white sm:text-[16px]">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-accent-amber transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : 'rotate-0'
                      }`}
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-[15px] leading-[1.7] text-zinc-400 sm:px-6 sm:pb-6">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQ
