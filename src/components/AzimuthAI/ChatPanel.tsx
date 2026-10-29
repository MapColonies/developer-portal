import React, { useCallback, useEffect, useRef, useState, type FormEvent, type KeyboardEvent } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useColorMode } from '@docusaurus/theme-common';
import { ColorModeProvider } from '@docusaurus/theme-common/internal';
import { outcomeNote } from './errors';
import { lengthHint } from './limits';
import { resolveLink, buildAllowedOrigins } from './links';
import Markdown from './Markdown';
import SiteLink from './SiteLink';
import { useAzimuthChat, type ChatMessage } from './useAzimuthChat';
import styles from './styles.module.css';

export const PANEL_TITLE = 'MapColonies AzimuthAI';
const HINT_ID = 'azimuth-ai-length-hint';

type AssistantMessage = Extract<ChatMessage, { role: 'assistant' }>;

interface ChatPanelProps {
  endpoint: string;
  /** the panel stays mounted while closed so a running answer and the conversation survive */
  open: boolean;
  onClose: () => void;
}

/**
 * The widget sits in the swizzled Root, above Docusaurus' ColorModeProvider (which lives in each page's Layout),
 * but @theme/CodeBlock needs that context for its Prism theme. A local provider supplies it, kept in step with the
 * site's mode by watching the `data-theme` attribute that the site's own provider maintains.
 */
function ColorModeSync(): null {
  // the runtime takes `{ persist }` (so mirroring the site's mode never writes a stored preference); the public type omits it
  const setColorMode = useColorMode().setColorMode as (mode: 'light' | 'dark', options?: { persist?: boolean }) => void;
  useEffect(() => {
    const root = document.documentElement;
    const apply = (): void => setColorMode(root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light', { persist: false });
    apply();
    const observer = new MutationObserver(apply);
    observer.observe(root, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
  }, [setColorMode]);
  return null;
}

function statusAnnouncement(message: AssistantMessage | undefined): string {
  switch (message?.status) {
    case 'waiting':
      return 'AzimuthAI is searching the documentation.';
    case 'streaming':
      return 'AzimuthAI is answering.';
    case 'done':
      return 'Answer ready.';
    case 'stopped':
      return 'Answer stopped.';
    case 'error':
      return message.error?.message ?? '';
    default:
      return '';
  }
}

function Citations({ message, siteUrl, baseUrl }: { message: AssistantMessage; siteUrl: string; baseUrl: string }): JSX.Element | null {
  if (message.status !== 'done' || message.citations.length === 0) {
    return null;
  }
  const context = {
    allowedOrigins: buildAllowedOrigins(siteUrl, window.location.origin),
    locationOrigin: window.location.origin,
    baseUrl,
  };
  return (
    <section className={styles.citations} aria-label="Sources">
      <h3 className={styles.citationsTitle}>Sources</h3>
      <ol className={styles.citationList}>
        {message.citations.map((source) => {
          const link = resolveLink(source.url, context);
          return (
            <li key={source.id} dir="auto">
              <span className={styles.citationId}>{`[${source.id}] `}</span>
              {link ? <SiteLink link={link}>{source.title}</SiteLink> : <span>{source.title}</span>}
              {source.section ? <span className={styles.citationSection}>{` · ${source.section}`}</span> : null}
            </li>
          );
        })}
      </ol>
    </section>
  );
}

function AssistantBubble({ message, siteUrl, baseUrl }: { message: AssistantMessage; siteUrl: string; baseUrl: string }): JSX.Element {
  const note = message.status === 'done' && message.outcome ? outcomeNote(message.outcome) : undefined;
  return (
    <div className={styles.assistant}>
      {message.notice ? <p className={styles.note}>{message.notice}</p> : null}
      {message.status === 'waiting' ? (
        <p className={styles.waiting}>
          Searching the documentation<span className={styles.dots} aria-hidden="true" />
        </p>
      ) : null}
      {message.text !== '' ? (
        <div dir="auto" className={styles.markdown}>
          <Markdown text={message.text} sources={message.sources} siteUrl={siteUrl} baseUrl={baseUrl} />
        </div>
      ) : null}
      {note ? <p className={styles.note}>{note}</p> : null}
      {message.status === 'stopped' ? <p className={styles.note}>Stopped.</p> : null}
      {message.status === 'error' && message.error ? (
        <p className={styles.error} data-kind={message.error.kind}>
          {message.error.message}
        </p>
      ) : null}
      <Citations message={message} siteUrl={siteUrl} baseUrl={baseUrl} />
    </div>
  );
}

function Panel({ endpoint, open, onClose }: ChatPanelProps): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const { messages, busy, send, stop, reset } = useAzimuthChat(endpoint);
  const [draft, setDraft] = useState('');
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const logRef = useRef<HTMLDivElement>(null);
  const pinnedToBottom = useRef(true);

  // focus the question box whenever the panel opens (including its first mount)
  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
    }
  }, [open]);

  // follow the answer while the reader is at the bottom; leave them alone once they scroll up
  useEffect(() => {
    const log = logRef.current;
    if (log && pinnedToBottom.current) {
      log.scrollTop = log.scrollHeight;
    }
  }, [messages]);

  const onScroll = useCallback(() => {
    const log = logRef.current;
    if (log) {
      pinnedToBottom.current = log.scrollHeight - log.scrollTop - log.clientHeight < 48;
    }
  }, []);

  const submit = useCallback(
    (event?: FormEvent) => {
      event?.preventDefault();
      if (busy || draft.trim() === '') {
        return;
      }
      pinnedToBottom.current = true;
      send(draft);
      setDraft('');
    },
    [busy, draft, send]
  );

  const onKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>): void => {
    if (event.key === 'Enter' && !event.shiftKey && !event.nativeEvent.isComposing) {
      event.preventDefault();
      submit();
    }
  };

  const hint = lengthHint(draft);
  const lastAssistant = [...messages].reverse().find((m): m is AssistantMessage => m.role === 'assistant');

  return (
    <>
      <header className={styles.header}>
        <h2 className={styles.title}>{PANEL_TITLE}</h2>
        <button
          type="button"
          className={styles.headerButton}
          onClick={() => {
            reset();
            setDraft('');
            inputRef.current?.focus();
          }}
          disabled={messages.length === 0}
        >
          New chat
        </button>
        <button type="button" className={styles.headerButton} onClick={onClose} aria-label="Close MapColonies AzimuthAI">
          <span aria-hidden="true">×</span>
        </button>
      </header>

      <div className={styles.log} ref={logRef} onScroll={onScroll} role="log" aria-label="Conversation" aria-live="off" tabIndex={0}>
        {messages.length === 0 ? (
          <div className={styles.intro}>
            <p>Ask a question about the MapColonies APIs and services.</p>
            <p>Answers come from this developer portal and cite the pages they use. AzimuthAI can make mistakes, so check the cited pages.</p>
          </div>
        ) : null}
        {messages.map((message) =>
          message.role === 'user' ? (
            <div key={message.id} className={styles.user} dir="auto">
              {message.text}
            </div>
          ) : (
            <AssistantBubble key={message.id} message={message} siteUrl={siteConfig.url} baseUrl={siteConfig.baseUrl} />
          )
        )}
      </div>

      <div className={styles.srOnly} role="status" aria-live="polite">
        {statusAnnouncement(lastAssistant)}
      </div>

      <form className={styles.composer} onSubmit={submit}>
        <textarea
          ref={inputRef}
          className={styles.input}
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          onKeyDown={onKeyDown}
          rows={2}
          dir="auto"
          placeholder="Ask a question…"
          aria-label="Your question"
          aria-describedby={HINT_ID}
        />
        {busy ? (
          <button type="button" className={`${styles.send} ${styles.stop}`} onClick={stop}>
            Stop
          </button>
        ) : (
          <button type="submit" className={styles.send} disabled={draft.trim() === ''}>
            Send
          </button>
        )}
        <div id={HINT_ID} className={styles.lengthHint} data-visible={hint ? 'true' : undefined} data-over={hint?.warning ? 'true' : undefined}>
          {/* a live region that only ever holds the warning, so the counter is not read out on every keystroke */}
          <span aria-live="polite">{hint?.warning ?? ''}</span>
          {hint ? (
            <span className={styles.lengthCounter} aria-hidden="true">
              {hint.counter}
            </span>
          ) : null}
        </div>
      </form>
    </>
  );
}

export default function ChatPanel(props: ChatPanelProps): JSX.Element {
  return (
    <ColorModeProvider>
      <ColorModeSync />
      <Panel {...props} />
    </ColorModeProvider>
  );
}
