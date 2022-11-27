
export const isUndefined = <DefinedType = unknown>(input?: DefinedType): input is undefined =>
  typeof input === "undefined";

export default isUndefined;
