import React, {FormEvent, ReactNode, useEffect, useRef, useState} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {CustomFields} from '@site/src/customFields';
import styles from './styles.module.css';

type Source = {
  title: string;
  url: string;
};

type Message = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  sources?: Source[];
};

type AskAiResponse = {
  answer?: string;
  sources?: Source[];
  choices?: Array<{
    message?: {
      content?: string;
    };
  }>;
};

function getPageTitle() {
  if (typeof document === 'undefined') {
    return '';
  }

  const heading = document.querySelector('h1');
  return heading?.textContent || document.title;
}

function getPageUrl() {
  if (typeof window === 'undefined') {
    return '';
  }

  return window.location.href;
}

function getAnswer(data: AskAiResponse) {
  return data.answer || data.choices?.[0]?.message?.content || '';
}

function appendAssistantToken(messages: Message[], messageId: string, token: string) {
  return messages.map((message) => (
    message.id === messageId ? {...message, content: `${message.content}${token}`} : message
  ));
}

function setAssistantSources(messages: Message[], messageId: string, sources: Source[]) {
  return messages.map((message) => (
    message.id === messageId ? {...message, sources} : message
  ));
}

function renderInlineMarkdown(text: string): ReactNode[] {
  const parts = text.split(/(`[^`]+`|\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/g);

  return parts.map((part, index) => {
    if (part.startsWith('`') && part.endsWith('`')) {
      return <code key={index}>{part.slice(1, -1)}</code>;
    }

    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      return <a key={index} href={link[2]}>{link[1]}</a>;
    }

    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }

    return part;
  });
}

function renderMarkdown(content: string) {
  const blocks = content.split(/\n{2,}/).filter(Boolean);

  return blocks.map((block, index) => {
    const trimmedBlock = block.trim();

    if (trimmedBlock.startsWith('```')) {
      const code = trimmedBlock.replace(/^```[a-zA-Z0-9_-]*\n?/, '').replace(/```$/, '').trim();
      return <pre key={index}><code>{code}</code></pre>;
    }

    const heading = trimmedBlock.match(/^(#{1,4})\s+(.+)$/);
    if (heading) {
      const HeadingTag = `h${Math.min(heading[1].length + 2, 5)}` as keyof JSX.IntrinsicElements;
      return <HeadingTag key={index}>{renderInlineMarkdown(heading[2])}</HeadingTag>;
    }

    const lines = trimmedBlock.split('\n');
    const isOrderedList = lines.every((line) => /^\d+\.\s+/.test(line.trim()));
    if (isOrderedList) {
      return (
        <ol key={index}>
          {lines.map((line, lineIndex) => <li key={lineIndex}>{renderInlineMarkdown(line.replace(/^\d+\.\s+/, ''))}</li>)}
        </ol>
      );
    }

    const isUnorderedList = lines.every((line) => /^[-*]\s+/.test(line.trim()));
    if (isUnorderedList) {
      return (
        <ul key={index}>
          {lines.map((line, lineIndex) => <li key={lineIndex}>{renderInlineMarkdown(line.replace(/^[-*]\s+/, ''))}</li>)}
        </ul>
      );
    }

    return <p key={index}>{renderInlineMarkdown(trimmedBlock)}</p>;
  });
}

export default function AskAI(): JSX.Element | null {
  const {siteConfig} = useDocusaurusContext();
  const {askAi} = siteConfig.customFields as CustomFields;
  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const messagesRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const shouldAutoScrollRef = useRef(true);

  useEffect(() => {
    if (shouldAutoScrollRef.current) {
      messagesEndRef.current?.scrollIntoView({behavior: 'auto', block: 'end'});
    }
  }, [messages, isLoading, error]);

  function handleMessagesScroll() {
    const messagesElement = messagesRef.current;
    if (!messagesElement) {
      return;
    }

    const distanceFromBottom = messagesElement.scrollHeight - messagesElement.scrollTop - messagesElement.clientHeight;
    shouldAutoScrollRef.current = distanceFromBottom < 80;
  }

  if (!askAi?.enabled) {
    return null;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedQuestion = question.trim();
    if (!trimmedQuestion || isLoading) {
      return;
    }

    setQuestion('');
    setError('');
    setIsLoading(true);
    shouldAutoScrollRef.current = true;
    const userMessageId = `user-${Date.now()}`;
    const assistantMessageId = `assistant-${Date.now()}`;
    setMessages((currentMessages) => [
      ...currentMessages,
      {id: userMessageId, role: 'user', content: trimmedQuestion},
      {id: assistantMessageId, role: 'assistant', content: ''},
    ]);

    try {
      const response = await fetch(askAi.endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          question: trimmedQuestion,
          title: getPageTitle(),
          url: getPageUrl(),
          stream: true,
        }),
      });

      if (!response.ok) {
        throw new Error(`Ask AI request failed with status ${response.status}`);
      }

      if (response.headers.get('Content-Type')?.includes('text/event-stream') && response.body) {
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let buffer = '';

        while (true) {
          const {done, value} = await reader.read();
          if (done) {
            break;
          }

          buffer += decoder.decode(value, {stream: true});
          const events = buffer.split('\n\n');
          buffer = events.pop() || '';

          for (const rawEvent of events) {
            const eventType = rawEvent.match(/^event:\s*(.+)$/m)?.[1]?.trim();
            const dataLine = rawEvent.match(/^data:\s*(.+)$/m)?.[1];

            if (!eventType || !dataLine) {
              continue;
            }

            const eventData = JSON.parse(dataLine);
            if (eventType === 'token') {
              setMessages((currentMessages) => appendAssistantToken(currentMessages, assistantMessageId, eventData.token || ''));
            } else if (eventType === 'sources') {
              setMessages((currentMessages) => setAssistantSources(currentMessages, assistantMessageId, eventData || []));
            } else if (eventType === 'error') {
              throw new Error(eventData.error || 'Ask AI stream failed');
            }
          }
        }

        return;
      }

      const data = (await response.json()) as AskAiResponse;
      const answer = getAnswer(data);

      if (!answer) {
        throw new Error('Ask AI returned an empty response');
      }

      setMessages((currentMessages) => currentMessages.map((message) => (
        message.id === assistantMessageId ? {...message, content: answer, sources: data.sources || []} : message
      )));
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Ask AI is unavailable');
      setMessages((currentMessages) => currentMessages.filter((message) => (
        message.id !== assistantMessageId || message.content || message.sources?.length
      )));
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className={styles.askAi}>
      {isOpen ? (
        <section className={styles.panel} aria-label="Ask AI assistant">
          <header className={styles.header}>
            <div>
              <strong>Ask AI</strong>
              <span>Answers from the docs</span>
            </div>
            <button type="button" className={styles.closeButton} onClick={() => setIsOpen(false)} aria-label="Close Ask AI">
              x
            </button>
          </header>

          <div className={styles.messages} ref={messagesRef} onScroll={handleMessagesScroll}>
            {messages.length === 0 ? (
              <p className={styles.emptyState}>Ask a question about the MapColonies docs.</p>
            ) : (
              messages.map((message) => (
                <article key={message.id} className={message.role === 'user' ? styles.userMessage : styles.assistantMessage}>
                  <div className={styles.markdown}>{message.content ? renderMarkdown(message.content) : <p>Thinking...</p>}</div>
                  {message.sources && message.sources.length > 0 ? (
                    <div className={styles.sources}>
                      <strong>Sources</strong>
                      {message.sources.map((source) => (
                        <a key={`${source.title}-${source.url}`} href={source.url}>
                          {source.title}
                        </a>
                      ))}
                    </div>
                  ) : null}
                </article>
              ))
            )}
            {isLoading ? <p className={styles.status}>Thinking...</p> : null}
            {error ? <p className={styles.error}>{error}</p> : null}
            <div ref={messagesEndRef} />
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <textarea
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
              placeholder="Ask about the docs..."
              rows={3}
            />
            <button type="submit" disabled={isLoading || !question.trim()}>
              Send
            </button>
          </form>
        </section>
      ) : null}

      <button type="button" className={styles.floatingButton} onClick={() => setIsOpen((current) => !current)}>
        Ask AI
      </button>
    </div>
  );
}
