import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

type GitHubUser = {
  name: string | null
  public_repos: number
  followers: number
}

function HealthCheck() {
  const [data, setData] = useState<GitHubUser | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [checkedAt, setCheckedAt] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    async function load() {
      try {
        const response = await fetch('https://api.github.com/users/Nonye96', {
          signal: controller.signal,
        })

        if (!response.ok) {
          throw new Error(`GitHub API returned ${response.status}`)
        }

        const json = (await response.json()) as GitHubUser
        setData({
          name: json.name,
          public_repos: json.public_repos,
          followers: json.followers,
        })
        setCheckedAt(new Date().toLocaleString())
      } catch (err) {
        if (err instanceof DOMException && err.name === 'AbortError') return
        setError(
          err instanceof Error ? err.message : 'Failed to fetch health data',
        )
      } finally {
        setLoading(false)
      }
    }

    void load()
    return () => controller.abort()
  }, [])

  return (
    <main className="flex min-h-svh items-center justify-center bg-navy px-4 py-16">
      <div className="w-full max-w-md text-center">
        <p className="font-mono text-sm text-accent-amber">Health check</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-[#f8fafc]">
          System status
        </h1>

        <div className="mt-8 rounded-2xl border border-white/10 bg-navy-card p-6 text-left shadow-[0_12px_40px_rgba(0,0,0,0.25)] sm:p-8">
          {loading && (
            <p className="text-center text-[15px] text-zinc-400">
              Checking GitHub API…
            </p>
          )}

          {!loading && error && (
            <p className="text-center text-[15px] text-red-400">{error}</p>
          )}

          {!loading && data && (
            <>
              <div className="flex items-center justify-between gap-3">
                <p className="text-lg font-bold text-[#f8fafc]">
                  App is healthy
                </p>
                <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-emerald-400">
                  <span aria-hidden="true">●</span> Live
                </span>
              </div>

              <dl className="mt-6 space-y-3 text-[14px]">
                <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-3">
                  <dt className="text-zinc-500">Name</dt>
                  <dd className="font-medium text-zinc-200">
                    {data.name ?? 'Nonye96'}
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-3">
                  <dt className="text-zinc-500">Public repos</dt>
                  <dd className="font-medium text-zinc-200">
                    {data.public_repos}
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-3">
                  <dt className="text-zinc-500">Followers</dt>
                  <dd className="font-medium text-zinc-200">{data.followers}</dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-zinc-500">Checked at</dt>
                  <dd className="font-mono text-[12px] text-zinc-300">
                    {checkedAt}
                  </dd>
                </div>
              </dl>
            </>
          )}
        </div>

        <Link
          to="/"
          className="mt-8 inline-block text-[14px] font-medium text-accent-amber transition hover:text-accent-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-amber/70"
        >
          ← Home
        </Link>
      </div>
    </main>
  )
}

export default HealthCheck
