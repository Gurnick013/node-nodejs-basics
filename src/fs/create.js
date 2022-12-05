import { appendFile, existsSync } from 'node:fs';

const create = async () => {
    if (existsSync ('src/fs/files/fresh.txt')) {
        console.log('File already exists');
    } else {
        appendFile('src/fs/files/fresh.txt', 'I am fresh and young', (err) => {
            if (err) throw err;
            console.log('File is created successfully.');
        })
    }
};

await create();
