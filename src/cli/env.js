import { env } from 'node:process';

const parseEnv = () => {
    console.log(Object.entries(env).reduce((prev, [key, value]) => key.startsWith('RSS_')
        ? [...prev, `${key}=${value}`]
        : prev, []).join('; '));
};

parseEnv();
