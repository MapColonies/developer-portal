import {config} from './config.js';

async function postJson(url, body) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(`LiteLLM request failed with status ${response.status}: ${message}`);
  }

  return response.json();
}

export async function embedText(input) {
  const data = await postJson(`${config.litellmBaseUrl}/embeddings`, {
    model: config.embeddingModel,
    input,
  });

  const embedding = data?.data?.[0]?.embedding;
  if (!Array.isArray(embedding)) {
    throw new Error('LiteLLM embedding response did not include data[0].embedding');
  }

  return embedding;
}

export async function chat(messages) {
  const data = await postJson(`${config.litellmBaseUrl}/chat/completions`, {
    model: config.chatModel,
    messages,
    temperature: 0.2,
    stream: false,
  });

  const answer = data?.choices?.[0]?.message?.content;
  if (!answer) {
    throw new Error('LiteLLM chat response did not include choices[0].message.content');
  }

  return answer;
}

export async function streamChat(messages, onToken) {
  const response = await fetch(`${config.litellmBaseUrl}/chat/completions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: config.chatModel,
      messages,
      temperature: 0.2,
      stream: true,
    }),
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(`LiteLLM stream request failed with status ${response.status}: ${message}`);
  }

  const decoder = new TextDecoder();
  let buffer = '';

  for await (const chunk of response.body) {
    buffer += decoder.decode(chunk, {stream: true});
    const lines = buffer.split('\n');
    buffer = lines.pop() || '';

    for (const line of lines) {
      const trimmedLine = line.trim();
      if (!trimmedLine.startsWith('data:')) {
        continue;
      }

      const data = trimmedLine.replace(/^data:\s*/, '');
      if (data === '[DONE]') {
        return;
      }

      const parsed = JSON.parse(data);
      const token = parsed?.choices?.[0]?.delta?.content || '';
      if (token) {
        onToken(token);
      }
    }
  }
}
