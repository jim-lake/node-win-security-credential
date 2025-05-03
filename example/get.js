const SecCred = require('../dist/index.js');

const resource = process.argv[2];
const username = process.argv[3];

if (!resource || !username) {
  console.log('Usage: get <resource> <username>');
  process.exit(-1);
}

console.log('get:', resource, username);

try {
  const password = SecCred.getPassword(resource, username);
  console.log('got password:', password);
} catch (e) {
  console.error('threw:', e?.errno, e);
}
