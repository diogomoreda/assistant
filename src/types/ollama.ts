export type OllamaRole = 'user' | 'assistant' | 'system';

export type OllamaHistory = {
  role: OllamaRole;
  content: string;
};

export interface OllamaChatResponse {
  model: string;
  message: {
    role: OllamaRole;
    content: string;
  };
  done: boolean;
  total_duration: number;
  load_duration: number;
  eval_duration: number;
  prompt_eval_count: number;
  done_reason: string;
}
