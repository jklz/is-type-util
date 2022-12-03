/* eslint-disable @typescript-eslint/naming-convention */
export const exampleString: string = `string`;
export const exampleStringOfNumber: string = `18`;
export const exampleStringWithSpaces: string = ` a string `;
export const exampleStringOfSpacesValue: string = `  `;
export const exampleStringEmpty: string = ``;

export const exampleNumber: number = 3.1234;
export const exampleNumberNegative: number = -3.1234;
export const exampleNumberNan: number = NaN;
export const exampleNumberInt: number = 10;
export const exampleNumberIntNegative: number = -10;


export const exampleUndefined: undefined = undefined;

export const exampleNull: null = null;

export const exampleBool: boolean = true;
export const exampleTrue: true = true;
export const exampleBoolTrue: boolean = true;
export const exampleFalse: false = false;
export const exampleBoolFalse: boolean = false;

export const exampleArray: (number | string)[] = [
  exampleNumber,
  exampleString,
  exampleNumberNegative,
  exampleStringOfNumber,
];

export const exampleArrayStrings: string[] = [
  exampleString,
  exampleStringOfNumber,
  exampleStringWithSpaces,
  exampleStringOfSpacesValue,
  exampleStringEmpty,
];

export const exampleArrayNumbers: number[] = [
  exampleNumber,
  exampleNumberNegative,
  exampleNumberNan,
  exampleNumberInt,
  exampleNumberIntNegative,
];

export const exampleArrayUndefined: undefined[] = [
  exampleUndefined,
];

export const exampleArrayNulls: null[] = [
  exampleNull,
];

export const exampleArrayBoolean: boolean[] = [
  exampleBool,
  exampleTrue,
  exampleBoolTrue,
  exampleFalse,
  exampleBoolFalse,
];
