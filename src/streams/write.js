import { createWriteStream } from 'node:fs';

const write = async () => {
  const writeStream = createWriteStream('src/streams/files/fileToWrite.txt', {encoding: 'utf8'});
  for await (const chunk of process.stdin) {
    writeStream.write(chunk);
  }
};

await write();
