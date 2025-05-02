const addon = require('../build/Release/node_win_sec_cred.node');

export default { getPassword, setPassword };

export function getPassword(resource: string, username: string): string | null {
  return addon.getPassword(resource, username);
}
export function setPassword(
  resource: string,
  username: string,
  password: string
) {
  return addon.setPassword(resource, username, password);
}
