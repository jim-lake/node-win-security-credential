const SecCred = require('../dist/index.js');

const resource = process.env[2];
const username = process.env[3];
const password = process.env[4];

if (!resource || !username || !password) {
  console.log('Usage: set <resource> <username> <password>');
  process.exit(-1);
}

console.log('set:', resource, username, password);

try {
  SecCred.setPassword(resource, username, password);
} catch (e) {
  console.error('threw:', e);
}
