import { createGzip } from 'node:zlib';
import { createReadStream, createWriteStream } from 'node:fs';

const compress = async () => {
  const gzip = createGzip();
  const read = createReadStream('src/zip/files/fileToCompress.txt');
  const write = createWriteStream('src/zip/files/archive.gz');
  read.pipe(gzip).pipe(write);
};

await compress();
