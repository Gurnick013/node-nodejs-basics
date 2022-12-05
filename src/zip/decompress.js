import { createGzip } from "node:zlib";
import { createReadStream, createWriteStream } from "node:fs";

const decompress = async () => {
  const gzip = createGzip();
  const read = createReadStream('src/zip/files/archive.gz');
  const write = createWriteStream('src/zip/files/fileToCompress.txt');
  read.pipe(gzip).pipe(write);
};

await decompress();
