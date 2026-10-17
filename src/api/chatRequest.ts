import { chatUrl } from '../config/constants.js';

export async function chatRequest(query: string): Promise<string> {
  const res = await fetch(chatUrl, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      messages: [{ content: query }],
    }),
  });
  if (!res.ok) throw new Error(res.statusText);
  return JSON.stringify(await res.json());
}
