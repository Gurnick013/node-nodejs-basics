import { cpus } from 'node:os';
import { Worker } from 'node:worker_threads';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const performCalculations = async () => {
  const CP = cpus()
  let num = 10;
  const workers = await Promise.allSettled(CP.map(() => {
    return new Promise((res, rej) => {
      const aloneWorker = new Worker(join(__dirname, 'worker.js'), {
        workerData: num += 1
      })
      aloneWorker.on('message', (data) => res(data))
      aloneWorker.on('error', (err) => rej(err))

    })
  }))

  const results = workers.map((item) => {
    const status = item.status === 'fulfilled' ? "resolve" : "reject";
    const data = item.status === 'fulfilled' ? item.value : null;
    return { status: status, data: data }
  })
  console.log(results);
};

performCalculations();
