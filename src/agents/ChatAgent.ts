import { chatRequest } from '../api/chatRequest.js';
import { OllamaHistory } from '../types/ollama.js';

export class ChatAgent {
  private history: OllamaHistory[] = [];

  reset() {
    this.history = [];
  }

  async chat(query: string): Promise<string> {
    this.history.push({
      role: 'user',
      content: query,
    });
    try {
      const res = await chatRequest(this.history);
      this.history.push({
        role: 'assistant',
        content: res,
      });
      return res;
    } catch (e: unknown) {
      const err = e instanceof Error ? e.message : (JSON.stringify(e) ?? String(e));
      this.history.push({
        role: 'assistant',
        content: err,
      });
      return err;
    }
  }
}
