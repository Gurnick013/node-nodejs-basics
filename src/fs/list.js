import { readdirSync, existsSync } from 'node:fs';

const list = async () => {
  if(!existsSync('src/fs/files')) {
    throw Error("FS operation failed");
  }
  try {
    readdirSync('src/fs/files').forEach(file => console.log(file));
  } catch (err) {
    console.log(err)
  }
};

await list();
