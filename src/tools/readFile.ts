import fs from 'fs/promises';

export async function readFile(path: string) {
  try {
    return await fs.readFile(path, 'utf-8');
  } catch (e: unknown) {
    if (e instanceof Error && 'code' in e && e.code === 'ENOENT') {
      // return a string to the agent
      return 'FILE_NOT_FOUND';
    }
    throw e;
  }
}
