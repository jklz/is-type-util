
export const isDefined = <DefinedType = unknown>(input?: DefinedType): input is DefinedType =>
  !(typeof input === "undefined");

export default isDefined;
