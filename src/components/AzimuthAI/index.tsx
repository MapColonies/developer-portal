import React, { lazy, Suspense, useCallback, useRef, useState, type KeyboardEvent } from 'react';
import ErrorBoundary from '@docusaurus/ErrorBoundary';
import styles from './styles.module.css';

// The chat itself (Markdown renderer, syntax highlighting, streaming) is a separate chunk, fetched on first open,
// so enabling the widget costs the rest of the portal only this small shell.
const loadChatPanel = () => lazy(() => import('./ChatPanel'));

const PANEL_ID = 'azimuth-ai-panel';
const TITLE = 'MapColonies AzimuthAI';

interface AzimuthAIProps {
  /** base URL of the engine; the widget POSTs to `${endpoint}/v1/chat` */
  endpoint: string;
}

function ChatIcon(): JSX.Element {
  return (
    <svg className={styles.icon} viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M4 3h16a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H9l-5 4v-4H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
    </svg>
  );
}

export default function AzimuthAI({ endpoint }: AzimuthAIProps): JSX.Element {
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  // React.lazy caches a rejected import for good, so a retry needs a fresh lazy component
  const [ChatPanel, setChatPanel] = useState(loadChatPanel);
  const launcher = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    launcher.current?.focus();
  }, []);

  const toggle = useCallback(() => {
    if (open) {
      close();
    } else {
      setLoaded(true);
      setOpen(true);
    }
  }, [open, close]);

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>): void => {
    if (event.key === 'Escape') {
      event.stopPropagation();
      close();
    }
  };

  return (
    <div className={styles.root}>
      {loaded ? (
        // a non-modal dialog: the page behind stays usable, so there is no focus trap
        <div id={PANEL_ID} className={styles.panel} role="dialog" aria-label={TITLE} hidden={!open} onKeyDown={onKeyDown}>
          <ErrorBoundary
            fallback={({ tryAgain }) => (
              <div className={styles.fallback} role="alert">
                <p>AzimuthAI could not be loaded. Check your connection and try again.</p>
                <button
                  type="button"
                  className={styles.headerButton}
                  onClick={() => {
                    setChatPanel(loadChatPanel);
                    tryAgain();
                  }}
                >
                  Retry
                </button>
                <button type="button" className={styles.headerButton} onClick={close}>
                  Close
                </button>
              </div>
            )}
          >
            <Suspense fallback={<p className={styles.fallback}>Loading…</p>}>
              <ChatPanel endpoint={endpoint} open={open} onClose={close} />
            </Suspense>
          </ErrorBoundary>
        </div>
      ) : null}
      <button
        ref={launcher}
        type="button"
        className={styles.launcher}
        onClick={toggle}
        aria-expanded={open}
        aria-controls={loaded ? PANEL_ID : undefined}
        aria-haspopup="dialog"
      >
        <ChatIcon />
        <span className={styles.launcherLabel}>Ask AzimuthAI</span>
      </button>
    </div>
  );
}
