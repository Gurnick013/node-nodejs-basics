import { readFile, existsSync } from 'node:fs';

const read = async () => {
  if(!existsSync('src/fs/files/fileToRead.txt')) {
    throw Error("FS operation failed");
  }
    readFile('src/fs/files/fileToRead.txt', 'utf8', (err, data) => {
    if(err) throw Error(err);
    console.log(data);
  });
};

await read();
