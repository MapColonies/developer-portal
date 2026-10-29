import { errorFromHttp, INTERRUPTED_ERROR, NETWORK_ERROR, parseRetryAfter, type ChatErrorInfo } from './errors';
import { createSseParser, parseChatEvent, type SseMessage } from './sse';
import type { ChatEvent, ChatRequest } from './types';

/** A failed chat request, carrying the friendly message to show. Aborts are NOT wrapped: they surface as the AbortError. */
export class ChatRequestError extends Error {
  public readonly info: ChatErrorInfo;

  public constructor(info: ChatErrorInfo) {
    super(info.message);
    this.name = 'ChatRequestError';
    this.info = info;
  }
}

export function chatUrl(endpoint: string): string {
  return `${endpoint.replace(/\/+$/, '')}/v1/chat`;
}

export interface StreamChatOptions extends ChatRequest {
  endpoint: string;
  signal?: AbortSignal;
  /** injectable for tests */
  fetchImpl?: typeof fetch;
}

async function readErrorCode(response: Response): Promise<string | undefined> {
  try {
    const body: unknown = await response.json();
    if (typeof body === 'object' && body !== null && typeof (body as { code?: unknown }).code === 'string') {
      return (body as { code: string }).code;
    }
  } catch {
    // not JSON (e.g. a proxy's HTML error page); the status alone decides
  }
  return undefined;
}

/**
 * POSTs the question and feeds every contract event to `onEvent` as it arrives. Resolves when the stream ends
 * with a terminal (`done` or `error`) event; throws a ChatRequestError for HTTP errors, network failures and
 * streams that end early, and the AbortError when `signal` aborts.
 */
export async function streamChat(options: StreamChatOptions, onEvent: (event: ChatEvent) => void): Promise<void> {
  const { endpoint, signal, fetchImpl = fetch, message, conversationId } = options;
  const body: ChatRequest = conversationId ? { message, conversationId } : { message };

  let response: Response;
  try {
    response = await fetchImpl(chatUrl(endpoint), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'text/event-stream' },
      body: JSON.stringify(body),
      signal,
    });
  } catch (error) {
    if (signal?.aborted) {
      throw error;
    }
    throw new ChatRequestError(NETWORK_ERROR);
  }

  if (!response.ok) {
    const code = await readErrorCode(response);
    const retryAfter = parseRetryAfter(response.headers.get('Retry-After'));
    throw new ChatRequestError(errorFromHttp(response.status, code, retryAfter));
  }

  const parser = createSseParser();
  let terminal = false;
  const dispatchMessages = (messages: SseMessage[]): void => {
    for (const message of messages) {
      const event = parseChatEvent(message);
      if (event === null || terminal) {
        continue;
      }
      terminal = event.type === 'done' || event.type === 'error';
      onEvent(event);
    }
  };
  const dispatch = (chunk: string): void => dispatchMessages(parser.push(chunk));

  try {
    if (response.body === null) {
      dispatch(await response.text());
    } else {
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      for (;;) {
        const { done, value } = await reader.read();
        if (done) {
          break;
        }
        dispatch(decoder.decode(value, { stream: true }));
        if (terminal) {
          // the answer is complete: do not wait for a server or proxy that keeps the connection open
          await reader.cancel().catch(() => undefined);
          break;
        }
      }
      dispatch(decoder.decode());
    }
    dispatchMessages(parser.end());
  } catch (error) {
    if (signal?.aborted) {
      throw error;
    }
    throw new ChatRequestError(INTERRUPTED_ERROR);
  }

  if (!terminal) {
    throw new ChatRequestError(INTERRUPTED_ERROR);
  }
}

/**
 * `streamChat`, plus the one recovery the contract asks for: when the engine no longer knows the conversation id
 * (404 `conversation_not_found`, raised before the stream starts, so nothing has been delivered yet), `onExpired`
 * is called and the question is sent once more without the id, which starts a new conversation. A second failure,
 * of any kind, is reported as usual.
 */
export async function streamChatRecovering(
  options: StreamChatOptions,
  onEvent: (event: ChatEvent) => void,
  onExpired: () => void,
): Promise<void> {
  try {
    await streamChat(options, onEvent);
  } catch (error) {
    const expired = error instanceof ChatRequestError && error.info.kind === 'conversation_expired';
    if (!expired || !options.conversationId || options.signal?.aborted) {
      throw error;
    }
    onExpired();
    await streamChat({ ...options, conversationId: undefined }, onEvent);
  }
}
