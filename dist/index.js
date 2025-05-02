'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.getPassword = getPassword;
exports.setPassword = setPassword;
const addon = require('../build/Release/node_win_sec_cred.node');
exports.default = { getPassword, setPassword };
function getPassword(resource, username) {
  return addon.getPassword(resource, username);
}
function setPassword(resource, username, password) {
  return addon.setPassword(resource, username, password);
}
//# sourceMappingURL=index.js.map
