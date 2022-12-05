import { existsSync, cpSync } from 'node:fs';

const copy = async () => {
  if (existsSync ('src/fs/files_copy')) {
    console.log('Folder has already been created');
  } else {
    try {
      cpSync('src/fs/files/', 'src/fs/files_copy/', { recursive: true })
      console.log('Files was copied successfully!')
    } catch (err) {
      console.log('Failed!')
    }
  }
};

copy();
