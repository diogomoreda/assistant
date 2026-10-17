import { CHAT_URL } from '../config/constants.js';
import { OllamaChatResponse, OllamaHistory } from '../types/ollama.js';

export async function chatRequest(history: OllamaHistory[]): Promise<string> {
  const res = await fetch(CHAT_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      model: 'llama3:latest',
      messages: history,
      stream: false,
    }),
  });
  if (!res.ok) throw new Error(`Ollama request failed: ${res.status} ${res.statusText}`);
  const data: OllamaChatResponse = await res.json();
  return data.message.content;
}
