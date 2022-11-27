
export const isBoolean = (input?: boolean | unknown): input is boolean =>
  typeof input === "boolean";

export default isBoolean;
