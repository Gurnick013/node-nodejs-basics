import { renameSync, existsSync } from 'node:fs';

const rename = async () => {
  if(!existsSync('src/fs/files/wrongFilename.txt') || existsSync('src/fs/files/properFilename.md')) {
    throw Error("FS operation failed");
  }
  try {
    renameSync('src/fs/files/wrongFilename.txt' , 'src/fs/files/properFilename.md')
    console.log('Files was changed successfully!')
  } catch (err) {
    console.log(err)
  }
};

await rename();
