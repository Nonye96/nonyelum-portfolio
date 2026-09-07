import {
  useEffect,
  useId,
  useRef,
  useState,
  type FormEvent,
  type KeyboardEvent,
} from 'react'
import { RotateCcw, Send, Sparkles, X } from 'lucide-react'
import { useChatStream } from './useChatStream'

const SUGGESTED_PROMPTS = [
  'What projects has Nonyelum built?',
  "What are Nonyelum's core skills?",
  'Is Nonyelum open to internships?',
]

const FOCUSABLE_SELECTOR =
  'button:not([disabled]), [href], input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'

function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')
  const { messages, isLoading, error, send, retry } = useChatStream()

  const panelRef = useRef<HTMLDivElement>(null)
  const toggleButtonRef = useRef<HTMLButtonElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const titleId = useId()

  // Focus the input as soon as the panel opens.
  useEffect(() => {
    if (!isOpen) return
    const frame = requestAnimationFrame(() => inputRef.current?.focus())
    return () => cancelAnimationFrame(frame)
  }, [isOpen])

  // Keep the latest message in view as it streams in.
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ block: 'end' })
  }, [messages])

  function close() {
    setIsOpen(false)
    toggleButtonRef.current?.focus()
  }

  // Escape closes the panel; Tab is trapped inside it while open.
  useEffect(() => {
    if (!isOpen) return

    function handleKeyDown(event: globalThis.KeyboardEvent) {
      if (event.key === 'Escape') {
        event.preventDefault()
        close()
        return
      }

      if (event.key !== 'Tab' || !panelRef.current) return

      const focusable = panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
      if (focusable.length === 0) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      const active = document.activeElement

      if (!(active instanceof Node) || !panelRef.current.contains(active)) {
        // Focus isn't inside the panel at all (e.g. it landed on the page
        // behind it) — pull it back in instead of letting Tab continue from
        // wherever the browser's default focus currently sits.
        event.preventDefault()
        ;(event.shiftKey ? last : first).focus()
        return
      }

      if (event.shiftKey && active === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && active === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  function submitMessage() {
    const trimmed = input.trim()
    if (!trimmed || isLoading) return
    send(trimmed)
    setInput('')
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    submitMessage()
  }

  function handleTextareaKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault()
      submitMessage()
    }
  }

  return (
    <>
      <button
        ref={toggleButtonRef}
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-controls="ask-nonyelum-panel"
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-accent-gradient px-4 py-3 text-sm font-bold text-black shadow-[0_12px_30px_rgba(245,158,11,0.35)] transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-amber/70 sm:bottom-6 sm:right-6"
      >
        {isOpen ? (
          <X className="h-5 w-5" aria-hidden="true" />
        ) : (
          <Sparkles className="h-5 w-5" aria-hidden="true" />
        )}
        <span>{isOpen ? 'Close chat' : 'Ask about Nonyelum'}</span>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-navy/40 backdrop-blur-sm"
            aria-hidden="true"
            onClick={close}
          />

          <div
            id="ask-nonyelum-panel"
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="fixed inset-x-4 bottom-24 z-50 flex max-h-[70vh] flex-col overflow-hidden rounded-2xl border border-white/10 bg-navy-card shadow-[0_20px_60px_rgba(0,0,0,0.5)] sm:inset-x-auto sm:right-6 sm:w-[380px]"
          >
            <header className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <div>
                <h2 id={titleId} className="text-sm font-bold text-heading">
                  Ask about Nonyelum
                </h2>
                <p className="text-xs text-body">Answers are grounded in her real background.</p>
              </div>
              <button
                type="button"
                onClick={close}
                aria-label="Close chat"
                className="rounded-full p-1.5 text-body transition-colors hover:bg-white/5 hover:text-heading focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-amber/70"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </header>

            <div
              role="log"
              aria-live="polite"
              aria-relevant="additions"
              className="flex-1 space-y-3 overflow-y-auto px-4 py-4"
            >
              {messages.length === 0 && !isLoading && (
                <div className="space-y-3">
                  <p className="text-sm text-body">
                    Ask me anything about Nonyelum&apos;s skills, projects, or experience.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {SUGGESTED_PROMPTS.map((prompt) => (
                      <button
                        key={prompt}
                        type="button"
                        onClick={() => send(prompt)}
                        className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-body transition-colors hover:border-accent-amber/50 hover:text-heading focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-amber/70"
                      >
                        {prompt}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                    message.role === 'user'
                      ? 'ml-auto bg-accent-gradient text-black'
                      : 'bg-white/5 text-heading'
                  }`}
                >
                  {message.text ? (
                    message.text
                  ) : message.role === 'model' && isLoading ? (
                    <TypingDots />
                  ) : null}
                </div>
              ))}

              {error && (
                <div className="max-w-[85%] rounded-2xl border border-accent-orange/30 bg-accent-orange/10 px-3.5 py-2.5 text-sm text-heading">
                  <p>{error}</p>
                  <button
                    type="button"
                    onClick={retry}
                    className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-accent-amber transition-colors hover:text-accent-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-amber/70"
                  >
                    <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                    Try again
                  </button>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSubmit} className="flex items-end gap-2 border-t border-white/10 p-3">
              <label htmlFor="ask-nonyelum-input" className="sr-only">
                Type your question about Nonyelum
              </label>
              <textarea
                id="ask-nonyelum-input"
                ref={inputRef}
                rows={1}
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={handleTextareaKeyDown}
                placeholder="Ask a question…"
                maxLength={500}
                className="max-h-24 flex-1 resize-none rounded-xl border border-white/10 bg-navy px-3 py-2 text-sm text-heading placeholder:text-body focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-amber/70"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                aria-label="Send question"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent-gradient text-black transition-opacity disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-amber/70"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
              </button>
            </form>
          </div>
        </>
      )}
    </>
  )
}

function TypingDots() {
  return (
    <span
      className="inline-flex items-center gap-1"
      role="status"
      aria-label="Nonyelum's assistant is typing"
    >
      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-body [animation-delay:-0.3s]" />
      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-body [animation-delay:-0.15s]" />
      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-body" />
    </span>
  )
}

export default ChatWidget
