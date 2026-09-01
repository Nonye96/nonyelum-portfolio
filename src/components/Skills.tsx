import { useEffect, useRef, useState } from 'react'

const TECH_PILLS = [
  'React',
  'React Native',
  'TypeScript',
  'JavaScript',
  'Node.js',
  'Supabase',
  'Docker',
  'Jenkins',
  'AWS',
  'Azure',
  'SQL',
  'Git',
  'HTML5',
  'CSS3',
  'REST APIs',
  'Expo',
] as const

const CATEGORIES = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', level: 85 },
      { name: 'JavaScript', level: 85 },
      { name: 'HTML5', level: 90 },
      { name: 'CSS3', level: 88 },
    ],
  },
  {
    title: 'Mobile',
    skills: [{ name: 'React Native (Expo)', level: 80 }],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 75 },
      { name: 'REST APIs', level: 80 },
      { name: 'Supabase', level: 78 },
    ],
  },
  {
    title: 'Database',
    skills: [{ name: 'SQL', level: 72 }],
  },
  {
    title: 'Cloud & DevOps',
    skills: [
      { name: 'AWS (EC2, S3)', level: 70 },
      { name: 'Azure Fundamentals', level: 65 },
      { name: 'Docker', level: 72 },
      { name: 'Jenkins', level: 68 },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git & GitHub', level: 88 },
      { name: 'VS Code', level: 90 },
      { name: 'Agile / Scrum', level: 75 },
    ],
  },
] as const

function Skills() {
  const gridRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = gridRef.current
    if (!node) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  let barIndex = 0

  return (
    <section className="relative bg-navy pb-20 sm:pb-24 lg:pb-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <p className="font-mono text-sm text-accent-amber">02 — Skills</p>

        <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#f8fafc] sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
          Technologies I work with
        </h2>

        <p className="mt-5 max-w-3xl text-[16px] leading-[1.7] text-zinc-400">
          A toolkit built through hands-on projects, coursework, and team
          collaboration — spanning frontend, mobile, backend, and DevOps.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-2.5">
          {TECH_PILLS.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-navy-card px-3.5 py-1.5 text-[13px] text-[#94a3b8]"
            >
              {tech}
            </span>
          ))}
        </div>

        <div
          ref={gridRef}
          className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3"
        >
          {CATEGORIES.map((category) => (
            <article
              key={category.title}
              className="flex h-full flex-col rounded-2xl border border-white/10 bg-navy-card p-6 shadow-[0_12px_40px_rgba(0,0,0,0.25)]"
            >
              <h3 className="flex items-center gap-2.5 text-[16px] font-bold text-[#f8fafc]">
                <span
                  className="h-2 w-2 shrink-0 rounded-full bg-accent-amber"
                  aria-hidden="true"
                />
                {category.title}
              </h3>

              <ul className="mt-5 flex flex-1 flex-col gap-4">
                {category.skills.map((skill) => {
                  const delay = barIndex * 80
                  barIndex += 1

                  return (
                    <li key={skill.name}>
                      <div className="mb-2 flex items-center justify-between gap-3">
                        <span className="text-[13px] text-zinc-300">
                          {skill.name}
                        </span>
                        <span className="font-mono text-[11px] text-[#71717a]">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.08]">
                        <div
                          role="progressbar"
                          aria-label={`${skill.name} proficiency`}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          aria-valuenow={skill.level}
                          className="h-full rounded-full bg-accent-gradient"
                          style={{
                            width: visible ? `${skill.level}%` : '0%',
                            transition: `width 900ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
                          }}
                        />
                      </div>
                    </li>
                  )
                })}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
