import { spawn } from 'node:child_process'

const spawnChildProcess = async (...args) => {
  spawn("node", ['src/cp/files/script.js', ...args], {
    detached: true,
    stdio: [process.stdin, process.stdout, process.stderr, "ipc"],
  });
};

spawnChildProcess();
