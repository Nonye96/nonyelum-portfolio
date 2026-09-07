import { useCallback, useRef, useState } from 'react'

export interface ChatMessage {
  id: string
  role: 'user' | 'model'
  text: string
}

interface HistoryTurn {
  role: 'user' | 'model'
  text: string
}

const MAX_HISTORY_MESSAGES = 8
const DEFAULT_ERROR_MESSAGE = 'Something went wrong on my end. Please try again.'

function createId(): string {
  return Math.random().toString(36).slice(2)
}

function toHistory(messages: ChatMessage[]): HistoryTurn[] {
  return messages
    .filter((m) => m.text.trim().length > 0)
    .slice(-MAX_HISTORY_MESSAGES)
    .map((m) => ({ role: m.role, text: m.text }))
}

export function useChatStream() {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const lastUserMessageRef = useRef<string | null>(null)
  const abortRef = useRef<AbortController | null>(null)

  const streamReply = useCallback(async (userText: string, history: HistoryTurn[]) => {
    setIsLoading(true)
    setError(null)

    const controller = new AbortController()
    abortRef.current = controller

    const assistantId = createId()
    setMessages((prev) => [...prev, { id: assistantId, role: 'model', text: '' }])

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userText, history }),
        signal: controller.signal,
      })

      if (!res.ok || !res.body) {
        let friendlyMessage = DEFAULT_ERROR_MESSAGE
        try {
          const data: unknown = await res.json()
          if (data && typeof data === 'object' && typeof (data as { error?: unknown }).error === 'string') {
            friendlyMessage = (data as { error: string }).error
          }
        } catch {
          // Response wasn't JSON — fall back to the default message.
        }
        throw new Error(friendlyMessage)
      }

      const reader = res.body.getReader()
      const decoder = new TextDecoder()

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        const chunk = decoder.decode(value, { stream: true })
        if (!chunk) continue

        setMessages((prev) =>
          prev.map((m) => (m.id === assistantId ? { ...m, text: m.text + chunk } : m)),
        )
      }
    } catch (err) {
      if (err instanceof DOMException && err.name === 'AbortError') return

      const message = err instanceof Error ? err.message : DEFAULT_ERROR_MESSAGE
      setError(message)
      // Drop the empty assistant bubble that never got a reply.
      setMessages((prev) => prev.filter((m) => m.id !== assistantId))
    } finally {
      setIsLoading(false)
      abortRef.current = null
    }
  }, [])

  const send = useCallback(
    (text: string) => {
      const trimmed = text.trim()
      if (!trimmed || isLoading) return

      lastUserMessageRef.current = trimmed
      const history = toHistory(messages)

      setMessages((prev) => [...prev, { id: createId(), role: 'user', text: trimmed }])
      void streamReply(trimmed, history)
    },
    [isLoading, messages, streamReply],
  )

  const retry = useCallback(() => {
    const last = lastUserMessageRef.current
    if (!last || isLoading) return

    setError(null)
    // The failed user message is already the last item in `messages`; drop it
    // here since it's re-sent explicitly as `userText` below.
    const history = toHistory(messages.slice(0, -1))
    void streamReply(last, history)
  }, [isLoading, messages, streamReply])

  const cancel = useCallback(() => {
    abortRef.current?.abort()
  }, [])

  return { messages, isLoading, error, send, retry, cancel }
}
