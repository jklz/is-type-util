
export const isString = (input?: string | unknown): input is string =>
  typeof input === "string";

export default isString;
