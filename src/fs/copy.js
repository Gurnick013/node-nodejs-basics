import { existsSync, cpSync } from 'node:fs';

const copy = () => {
  if (existsSync ('src/fs/files_copy')) {
    throw Error("FS operation failed");
  } else {
    try {
      cpSync('src/fs/files/', 'src/fs/files_copy/', { recursive: true })
      console.log('Files was copied successfully!')
    } catch (err) {
      console.log(err)
    }
  }
};

copy();
