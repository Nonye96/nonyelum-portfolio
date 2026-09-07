# Nonyelum Ogbuakanne — Developer Portfolio

A personal portfolio website showcasing my projects, skills, and experience as a frontend and mobile developer based in Calgary, Alberta — now featuring an **AI-powered "Ask about Nonyelum" assistant** that answers recruiter questions grounded in my real background.

**Live site:** https://nonyelum-portfolio.vercel.app

## What it does

Beyond the standard portfolio sections (about, skills, projects, contact), the site includes a floating **AI chat assistant**. A recruiter can ask questions in their own words — "What projects has she built?", "Does she have React Native experience?", "Is she open to junior roles?" — and get instant, specific answers drawn only from my real information. If asked something outside that scope, it politely declines and points to my email rather than making things up.

The problem it solves: a static portfolio makes visitors hunt for the specific answer they need. The assistant turns my existing content into something instantly queryable — my "pitch" stays the site, and the assistant is the "answer desk."

## Built with

- **React + TypeScript + Vite**
- **Tailwind CSS**
- **Google Gemini API** (`gemini-3-flash-preview`) for the AI assistant
- **Vercel** for hosting and serverless functions

## Running locally

```bash
npm install        # install dependencies
npm run dev         # start the Vite dev server (UI only)
```

The chat feature calls a serverless function, so to run it fully (UI **and** the `/api/chat` endpoint) you need the Vercel CLI:

```bash
npm install -g vercel
vercel link                    # link to the Vercel project
vercel env pull .env.local     # pull GEMINI_API_KEY into a local, git-ignored file
vercel dev                     # serves the app + the /api function
```

Then open the local URL Vercel prints (usually http://localhost:3000).

### Testing

```bash
npm run test        # run the unit tests
npm run coverage    # run tests with a coverage report
```

## Architecture

- **`src/`** — the React portfolio (sections rendered inside a `Home` component).
- **`src/components/chat/ChatWidget.tsx`** — the floating button and accessible chat panel (`role="dialog"`, focus trap, Escape-to-close, keyboard navigable, screen-reader announcements).
- **`src/components/chat/useChatStream.ts`** — a hook that manages message state, posts to `/api/chat`, and reads the streamed response chunk-by-chunk.
- **`api/chat.ts`** — a Vercel serverless function that holds the Gemini API key **server-side only**, sends the request with a system instruction grounding the assistant in my real info, streams the reply back, and returns a clean error on failure.

## How the AI fits

The assistant is **not a general chatbot**. The serverless function sends Gemini a system instruction containing only my real background, skills, and projects, with rules to: answer only from that information, politely decline anything outside it (pointing to my email), stay in third person, and ignore attempts to override those rules. This keeps it honest and grounded — it represents me accurately or not at all.

The API key is never exposed to the browser. It lives as an encrypted environment variable in Vercel and is read only inside the serverless function, so it never appears in the repository or client code.

## Known limitations & future improvements

- The assistant runs on Gemini's **free tier**, which has rate limits; under heavy demand it may occasionally return a "please try again" message. The UI handles this gracefully with a retry button.
- Model names on the Gemini API change over time (this project already migrated once from a deprecated model), so the model string may need occasional updates.
- The audit surfaced a React Router nesting warning (`path="/"` vs `path="*"`) worth tidying, and identified that a lower Lighthouse Performance score and a console error were caused by browser extensions — in a clean environment, mobile Performance measured 90.
- Future ideas: a "paste a job description, see how I fit" tool for recruiters, and caching common answers to reduce API calls.

## Contact

- **Email:** nonyelumogbuakanne@gmail.com
- **LinkedIn:** nonyelum-ogbuakanne
- **GitHub:** [@Nonye96](https://github.com/Nonye96)
