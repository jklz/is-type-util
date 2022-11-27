
export const isNumber = (input?: number | unknown): input is number =>
  typeof input === "number";

export default isNumber
