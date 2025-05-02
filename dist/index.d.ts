declare const _default: {
  getPassword: typeof getPassword;
  setPassword: typeof setPassword;
};
export default _default;
export declare function getPassword(
  resource: string,
  username: string
): string | null;
export declare function setPassword(
  resource: string,
  username: string,
  password: string
): any;
