import { stdin, stdout } from 'node:process';
import { Transform } from 'stream';
import { EOL } from 'os';

const transform = async () => {
  const res = new Transform({transform(chunk, enc, callBack) {
      callBack(null, chunk.toString().replace(EOL,'').split('').reverse().join(''))
    }});
  stdin.pipe(res).pipe(stdout)
};

await transform();
