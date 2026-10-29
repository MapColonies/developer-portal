// Wire types of the widget <-> engine contract (POST /v1/chat, SSE). Keep in sync with the engine.

export type SourceKind = 'page' | 'openapi' | 'worked_example';

export interface Source {
  /** 1-based; the number the answer text cites as `[n]` */
  id: number;
  title: string;
  /** "Heading > Sub" */
  section?: string;
  /** absolute: configured portal URL + path + optional #anchor */
  url: string;
  kind: SourceKind;
}

export type Outcome = 'answered' | 'not_covered' | 'refused' | 'handoff';

export type ChatEvent =
  | { type: 'sources'; conversationId: string; messageId: string; sources: Source[] }
  | { type: 'text'; delta: string }
  | { type: 'done'; conversationId: string; messageId: string; citations: Source[]; outcome: Outcome }
  | { type: 'error'; code: string; message: string };

export interface ChatRequest {
  message: string;
  conversationId?: string;
}
