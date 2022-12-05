import { unlinkSync, existsSync } from 'node:fs';

const remove = async () => {
  if (!existsSync ('src/fs/files')) {
    throw Error("FS operation failed");
  } else {
    try {
      unlinkSync('src/fs/files/fileToRemove.txt');
      console.log('File was successfully deleted');
    } catch (err) {
      console.log(err);
    }
  }
};

await remove();
