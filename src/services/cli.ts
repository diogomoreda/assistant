import { createInterface } from 'node:readline/promises';
import { ChatAgent } from '../agents/ChatAgent.js';
import promptIntro from '../helpers/promptIntro.js';

export default async function cli(): Promise<void> {
  const terminal = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const agent = new ChatAgent();

  promptIntro();

  try {
    while (true) {
      const line = await terminal.question('> ');
      const input = line.trim();

      if (input === '/exit') {
        console.log('\nGoodbye');
        break;
      }

      if (input === '/reset') {
        agent.reset();
        console.log('Chat was reset');
        continue;
      }

      if (!input) continue;

      try {
        const reply = await agent.chat(input);
        console.log(reply);
      } catch (e) {
        console.error(`Agent error: ${JSON.stringify(e)}`);
      }
    }
  } catch (err: unknown) {
    if (!(err instanceof Error && err.name === 'AbortError')) throw err;
  } finally {
    terminal.close();
  }
}
