
import {isArray} from './is-array';
import {isBoolean} from './is-boolean';
import {isDefined} from './is-defined';
import {isNumber} from './is-number';
import {isString} from './is-string';
import {isUndefined} from './is-undefined';


export {
  isArray,
  isBoolean,
  isDefined,
  isNumber,
  isString,
  isUndefined,
};
const isType = {
  array: isArray,
  boolean: isBoolean,
  defined: isDefined,
  number: isNumber,
  string: isString,
  undefined: isUndefined,
};

export default isType;
