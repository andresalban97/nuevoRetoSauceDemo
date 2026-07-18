import fs from 'fs';

const config = JSON.parse(
  fs.readFileSync('environment.conf', 'utf-8')
);

const env = process.env.NODE_ENV || 'default';

export const ENV = config[env];