import fs from 'fs/promises';

export async function writeFile(path: string, content: string) {
  if (!path.startsWith('./')) {
    throw new Error('Only local writes allowed');
  }
  await fs.writeFile(path, content);
  return 'Ok';
}
