import { unlinkSync, existsSync } from 'node:fs';

const remove = async () => {
  if (!existsSync ('src/fs/files')) {
    console.log("There's no file");
  } else {
    try {
      unlinkSync('src/fs/files/fileToRemove.txt');
      console.log('File was successfully deleted');
    } catch (err) {
      console.log('Failed!');
    }
  }
};

await remove();
