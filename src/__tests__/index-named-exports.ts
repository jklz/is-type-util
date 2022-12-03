import {
  isArray,
  isBoolean,
  isDefined,
  isNumber,
  isString,
  isUndefined,
} from '../';

describe('index exports named exports', function () {

  it('should do named export for isArray', function () {
    expect(isArray).not.toBeUndefined();
    expect(typeof isArray).toBe("function")
  });

  it('should do named export for isBoolean', function () {
    expect(isBoolean).not.toBeUndefined();
    expect(typeof isBoolean).toBe("function")
  });

  it('should do named export for isDefined', function () {
    expect(isDefined).not.toBeUndefined();
    expect(typeof isDefined).toBe("function")
  });

  it('should do named export for isNumber', function () {
    expect(isNumber).not.toBeUndefined();
    expect(typeof isNumber).toBe("function")
  });

  it('should do named export for isString', function () {
    expect(isString).not.toBeUndefined();
    expect(typeof isString).toBe("function")
  });

  it('should do named export for isUndefined', function () {
    expect(isUndefined).not.toBeUndefined();
    expect(typeof isUndefined).toBe("function")
  });

});
