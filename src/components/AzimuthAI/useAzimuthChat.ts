import { useCallback, useEffect, useRef, useState } from 'react';
import { ChatRequestError, streamChat } from './api';
import { errorFromStreamEvent, type ChatErrorInfo } from './errors';
import type { ChatEvent, Outcome, Source } from './types';

export type AssistantStatus = 'waiting' | 'streaming' | 'done' | 'stopped' | 'error';

export type ChatMessage =
  | { id: string; role: 'user'; text: string }
  | {
      id: string;
      role: 'assistant';
      text: string;
      status: AssistantStatus;
      /** every passage offered to the LLM; `[n]` markers in the text refer to these */
      sources: Source[];
      /** the sources actually cited, set when the answer is done */
      citations: Source[];
      outcome?: Outcome;
      error?: ChatErrorInfo;
    };

type AssistantMessage = Extract<ChatMessage, { role: 'assistant' }>;

/** an assistant message still waiting for, or receiving, its answer (a finished one is never overwritten) */
const isInFlight = (message: AssistantMessage): boolean => message.status === 'waiting' || message.status === 'streaming';

export interface AzimuthChat {
  messages: ChatMessage[];
  /** a question is in flight (waiting or streaming) */
  busy: boolean;
  send: (text: string) => void;
  stop: () => void;
  /** aborts anything in flight and forgets the conversation */
  reset: () => void;
}

export function useAzimuthChat(endpoint: string): AzimuthChat {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [busy, setBusy] = useState(false);
  const conversationId = useRef<string | undefined>(undefined);
  const controller = useRef<AbortController | null>(null);
  const counter = useRef(0);

  useEffect(() => () => controller.current?.abort(), []);

  const send = useCallback(
    (rawText: string) => {
      const text = rawText.trim();
      if (text === '' || controller.current !== null) {
        return;
      }
      counter.current += 1;
      const userId = `u${counter.current}`;
      const assistantId = `a${counter.current}`;
      const abort = new AbortController();
      controller.current = abort;
      setBusy(true);
      setMessages((current) => [
        ...current,
        { id: userId, role: 'user', text },
        { id: assistantId, role: 'assistant', text: '', status: 'waiting', sources: [], citations: [] },
      ]);

      const update = (patch: (message: AssistantMessage) => AssistantMessage): void => {
        setMessages((current) => current.map((m) => (m.id === assistantId && m.role === 'assistant' ? patch(m) : m)));
      };

      const onEvent = (event: ChatEvent): void => {
        switch (event.type) {
          case 'sources':
            conversationId.current = event.conversationId;
            update((m) => ({ ...m, sources: event.sources }));
            break;
          case 'text':
            if (event.delta !== '') {
              update((m) => ({ ...m, text: m.text + event.delta, status: 'streaming' }));
            }
            break;
          case 'done':
            conversationId.current = event.conversationId;
            update((m) => ({ ...m, status: 'done', citations: event.citations, outcome: event.outcome }));
            break;
          case 'error':
            update((m) => ({ ...m, status: 'error', error: errorFromStreamEvent(event.code) }));
            break;
        }
      };

      streamChat({ endpoint, message: text, conversationId: conversationId.current, signal: abort.signal }, onEvent)
        .catch((error: unknown) => {
          if (abort.signal.aborted) {
            update((m) => (isInFlight(m) ? { ...m, status: 'stopped' } : m));
            return;
          }
          const info =
            error instanceof ChatRequestError ? error.info : errorFromStreamEvent('internal');
          if (info.resetConversation) {
            conversationId.current = undefined;
          }
          update((m) => (isInFlight(m) ? { ...m, status: 'error', error: info } : m));
        })
        .finally(() => {
          // a reset() may already have replaced the controller; only clear our own
          if (controller.current === abort) {
            controller.current = null;
            setBusy(false);
          }
        });
    },
    [endpoint]
  );

  const stop = useCallback(() => controller.current?.abort(), []);

  const reset = useCallback(() => {
    controller.current?.abort();
    controller.current = null;
    conversationId.current = undefined;
    setBusy(false);
    setMessages([]);
  }, []);

  return { messages, busy, send, stop, reset };
}
