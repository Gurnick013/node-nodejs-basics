import { createHash } from 'node:crypto'
import { readFile, existsSync } from 'node:fs';

const calculateHash = async () => {
  if(!existsSync('src/hash/files/fileToCalculateHashFor.txt')) {
    throw Error("FS operation failed");
  }
  readFile('src/hash/files/fileToCalculateHashFor.txt', 'utf8', (err, data) => {
    if(err) throw Error(err);
    console.log(createHash('sha256').update(data).digest('hex'));
  });
};

await calculateHash();
