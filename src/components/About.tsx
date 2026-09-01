import profilePicture from '../assets/myProfilePicture.jpeg'

function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-navy py-20 sm:py-24 lg:py-28">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-[28rem]">
          <div
            className="pointer-events-none absolute inset-[-12%] rounded-full bg-[radial-gradient(circle,rgba(245,158,11,0.42)_0%,rgba(249,115,22,0.22)_38%,transparent_70%)] blur-3xl"
            aria-hidden="true"
          />

          <div className="relative rounded-2xl bg-accent-gradient p-[2px] shadow-[0_24px_60px_rgba(0,0,0,0.45),0_0_48px_rgba(245,158,11,0.28)]">
            <div className="overflow-hidden rounded-[14px] bg-navy">
              <img
                src={profilePicture}
                alt="Nonyelum Ogbuakanne"
                className="aspect-[4/5] h-full w-full object-cover object-top"
              />
            </div>
          </div>
        </div>

        <div className="max-w-xl lg:justify-self-end">
          <p className="font-mono text-sm text-accent-amber">01 — About</p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#f8fafc] sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
            A bit about me
          </h2>

          <div className="mt-6 space-y-5 text-[16px] leading-[1.7] text-zinc-300">
            <p>
              I&apos;m a frontend developer based in{' '}
              <strong className="font-bold text-zinc-100">Calgary, Alberta</strong>,
              specializing in React and React Native. I build responsive web and
              mobile applications with a strong focus on user experience and
              performance.
            </p>
            <p>
              I hold a diploma in software development from Bow Valley College
              and bring hands-on experience across web and mobile projects. I
              enjoy solving real-world problems, collaborating within teams, and
              building clean, scalable applications. I&apos;m open to frontend
              development opportunities in Canada.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
