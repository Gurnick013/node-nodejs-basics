import { argv } from 'node:process';

const parseArgs = () => {
  const res = argv.slice(2).reduce((prev, elem, index) => {
    const value = argv[index + 1];
    elem.startsWith('--') && value
    && prev.push(`${elem.slice(2)} is ${value}`)
    return prev;
  }, []).join(', ');
  console.log(res);
};

parseArgs();
