const SecCred = require('../dist/index.js');

const resource = process.argv[2];
const username = process.argv[3];
const password = process.argv[4];

if (!resource || !username || !password) {
  console.log('Usage: set <resource> <username> <password>');
  process.exit(-1);
}

console.log('set:', resource, username, password);

try {
  SecCred.setPassword(resource, username, password);
} catch (e) {
  console.error('threw:', e?.errno, e);
}
