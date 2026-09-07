Reflection — Capstone: AI-Powered Portfolio Assistant

What was hardest?
The hardest part was integrating the live Gemini API and getting streaming to work reliably. The feature failed in three different ways before it worked: the model I first used (gemini-2.5-flash) had been deprecated for new accounts, so I had to research and switch to a current model; then the responses streamed but cut off after a few words because the parsing logic didn't match the new model's response format; and finally the chat panel's focus trap let keyboard focus escape to the page behind it. Each of these was invisible until I actually tested, the value of testing early became very real.

What I would do differently next time?
I would verify the exact API model name and response format before writing the integration, rather than discovering deprecations during testing. I'd also set up local testing with the correct dev server (vercel dev, not plain Vite) from the start, since the serverless function needs Vercel's runtime, I lost time debugging a blank page that was really just a dev-server/rewrite mismatch.

One thing that surprised me.
How much of "building an AI feature" is not the AI part. The Gemini call itself was small; the real work was keeping the API key secure (server-side only, never in the repo), handling failure gracefully so a rate-limit returns a friendly retry instead of a crash, and making the whole thing keyboard-accessible. I also learned to distinguish my own bugs from environmental ones — a scary-looking console error and a low performance score turned out to be caused by browser extensions, confirmed by re-testing in a clean incognito window where performance measured 90.
