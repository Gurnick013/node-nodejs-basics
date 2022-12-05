import { appendFile, existsSync } from 'node:fs';

const create = async () => {
    if (existsSync ('src/fs/files/fresh.txt')) {
        throw Error("FS operation failed");
    } else {
        appendFile('src/fs/files/fresh.txt', 'I am fresh and young', (err) => {
            if (err) throw Error(err);
            console.log('File is created successfully.');
        })
    }
};

await create();
