import { createReadStream } from 'node:fs';

const read = async () => {
  const fileStream = createReadStream('src/streams/files/fileToRead.txt', {encoding: 'utf8'});
  for await (const chunk of fileStream) {
    process.stdout.write(chunk);
  }
};

await read();
