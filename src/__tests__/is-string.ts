
import * as values from "../examples/example-values";
import isString from "../is-string";



describe('should check if is string', function () {

  it('should return true when receives string', function () {
    expect(isString(values.exampleString)).toBeTruthy();
    expect(isString(values.exampleStringOfNumber)).toBeTruthy();
    expect(isString(values.exampleStringWithSpaces)).toBeTruthy();
    expect(isString(values.exampleStringOfSpacesValue)).toBeTruthy();
    expect(isString(values.exampleStringEmpty)).toBeTruthy();
  });

  it('should return false when receives number', function () {
    expect(isString(values.exampleNumber)).toBeFalsy();
    expect(isString(values.exampleNumberNegative)).toBeFalsy();
    expect(isString(values.exampleNumberNan)).toBeFalsy();
    expect(isString(values.exampleNumberInt)).toBeFalsy();
    expect(isString(values.exampleNumberIntNegative)).toBeFalsy();
  });

  it('should return false when receives undefined', function () {
    expect(isString(values.exampleUndefined)).toBeFalsy();
  });

  it('should return false when receives nothing', function () {
    expect(isString()).toBeFalsy();
  });

  it('should return false when receives null', function () {
    expect(isString(values.exampleNull)).toBeFalsy();
  });

  it('should return false when receives boolean', function () {
    expect(isString(values.exampleBool)).toBeFalsy();
    expect(isString(values.exampleTrue)).toBeFalsy();
    expect(isString(values.exampleBoolTrue)).toBeFalsy();
    expect(isString(values.exampleFalse)).toBeFalsy();
    expect(isString(values.exampleBoolFalse)).toBeFalsy();
  });

  it('should return false when receives array', function () {
    expect(isString(values.exampleArray)).toBeFalsy();
    expect(isString(values.exampleArrayStrings)).toBeFalsy();
    expect(isString(values.exampleArrayNumbers)).toBeFalsy();
    expect(isString(values.exampleArrayUndefined)).toBeFalsy();
    expect(isString(values.exampleArrayNulls)).toBeFalsy();
    expect(isString(values.exampleArrayBoolean)).toBeFalsy();
  });


  it('should work as type guard for typescript', function () {

    const stringOnlyArray: string[] = [];

    let testValue: string | undefined = values.exampleString;

    // stringOnlyArray should be empty
    expect(stringOnlyArray).toHaveLength(0);

    // use gard before adding to array
    if (isString(testValue)) {
      // should add to array
      stringOnlyArray.push(testValue);
    }

    // stringOnlyArray should now have item in it
    expect(stringOnlyArray).toHaveLength(1);

    // set value to undefined
    testValue = undefined;

    // use gard before adding to array
    if (isString(testValue)) {
      stringOnlyArray.push(testValue);
    }

    // stringOnlyArray should still only have item in it
    expect(stringOnlyArray).toHaveLength(1);

    // set value back to string
    testValue = values.exampleString;

    // use gard before adding to array
    if (isString(testValue)) {
      // should add to array
      stringOnlyArray.push(testValue);
    }

    // stringOnlyArray should now have 2 items in it
    expect(stringOnlyArray).toHaveLength(2);
  });

});
