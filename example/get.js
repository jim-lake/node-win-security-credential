const SecCred = require('../dist/index.js');

const resource = process.env[2];
const username = process.env[3];

if (!resource || !username || !password) {
  console.log('Usage: get <resource> <username>');
  process.exit(-1);
}

console.log('get:', resource, username);

try {
  SecCred.getPassword(resource, username);
} catch (e) {
  console.error('threw:', e);
}
