# Deployment & Operation

Deployment: The app auto-deploys to Vercel on every push to the main GitHub branch. Environment variables (GEMINI_API_KEY) are stored securely in Vercel's dashboard, never in the repo.

How it fails safely: If the Gemini API errors or hits a rate limit, the serverless function returns a clean JSON error and the UI shows a friendly "please try again" message with a Retry button — never a crash or a raw stack trace.

Rollback plan: Vercel keeps every past deployment. If a bad deploy ships, I can instantly roll back by promoting a previous working deployment from the Vercel dashboard (Deployments → select a known-good build → "Promote to Production"), or by reverting the commit in GitHub, which triggers a fresh deploy from the good code.
