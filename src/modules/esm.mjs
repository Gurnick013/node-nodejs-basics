import * as path from 'path'
import * as url from 'url';
import { release, version } from 'os'
import { createServer as createServerHttp } from 'http'
import { readFileSync } from 'node:fs';
import './files/c.js'

const random = Math.random();

let unknownObject;

if (random > 0.5) {
    unknownObject = JSON.parse(readFileSync('src/modules/files/a.json').toString());
} else {
    unknownObject = JSON.parse(readFileSync('src/modules/files/b.json').toString());
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${url.fileURLToPath(import.meta.url)}`);
console.log(`Path to current directory is ${url.fileURLToPath(new URL('.', import.meta.url))}`);

const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export {
    unknownObject,
    myServer,
};

