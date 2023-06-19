import { spawn } from 'node:child_process';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const FOLDER = 'files';
const FILENAME = 'script.js';

const spawnChildProcess = async (args) => {
  const filePath = join(dirname(fileURLToPath(import.meta.url)), FOLDER, FILENAME);
  spawn('node', [filePath, ...args], { stdio: [0, 1, 'ipc'] });
};

// Put your args for testing
await spawnChildProcess(['1']);
