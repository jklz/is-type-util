
import * as values from "../examples/example-values";
import isUndefined from "../is-undefined";

describe('should check if is undefined', function () {

  it('should return false when receives string', function () {
    expect(isUndefined<string>(values.exampleString)).toBeFalsy();
    expect(isUndefined<string>(values.exampleStringOfNumber)).toBeFalsy();
    expect(isUndefined<string>(values.exampleStringWithSpaces)).toBeFalsy();
    expect(isUndefined<string>(values.exampleStringOfSpacesValue)).toBeFalsy();
    expect(isUndefined<string>(values.exampleStringEmpty)).toBeFalsy();
  });

  it('should return false when receives number', function () {
    expect(isUndefined<number>(values.exampleNumber)).toBeFalsy();
    expect(isUndefined<number>(values.exampleNumberNegative)).toBeFalsy();
    expect(isUndefined<number>(values.exampleNumberNan)).toBeFalsy();
    expect(isUndefined<number>(values.exampleNumberInt)).toBeFalsy();
    expect(isUndefined<number>(values.exampleNumberIntNegative)).toBeFalsy();
  });

  it('should return true when receives undefined', function () {
    expect(isUndefined<undefined>(values.exampleUndefined)).toBeTruthy();
  });

  it('should return true when receives nothing', function () {
    expect(isUndefined()).toBeTruthy();
    expect(isUndefined<never>()).toBeTruthy();
  });

  it('should return false when receives null', function () {
    expect(isUndefined<null>(values.exampleNull)).toBeFalsy();
  });

  it('should return false when receives boolean', function () {
    expect(isUndefined<boolean>(values.exampleBool)).toBeFalsy();
    expect(isUndefined<true>(values.exampleTrue)).toBeFalsy();
    expect(isUndefined<boolean>(values.exampleBoolTrue)).toBeFalsy();
    expect(isUndefined<false>(values.exampleFalse)).toBeFalsy();
    expect(isUndefined<boolean>(values.exampleBoolFalse)).toBeFalsy();
  });

  it('should return false when receives array', function () {
    expect(isUndefined(values.exampleArray)).toBeFalsy();
    expect(isUndefined(values.exampleArrayStrings)).toBeFalsy();
    expect(isUndefined(values.exampleArrayNumbers)).toBeFalsy();
    expect(isUndefined(values.exampleArrayUndefined)).toBeFalsy();
    expect(isUndefined(values.exampleArrayNulls)).toBeFalsy();
    expect(isUndefined(values.exampleArrayBoolean)).toBeFalsy();
  });


  it('should work as type guard for typescript', function () {

    const stringOnlyArray: string[] = [];

    let testValue: string | undefined = values.exampleString;

    // stringOnlyArray should be empty
    expect(stringOnlyArray).toHaveLength(0);

    // use gard before adding to array
    if (!isUndefined<string>(testValue)) {
      // should add to array
      stringOnlyArray.push(testValue);
    }

    // stringOnlyArray should now have item in it
    expect(stringOnlyArray).toHaveLength(1);

    // set value to undefined
    testValue = undefined;

    // use gard before adding to array
    if (!isUndefined<string>(testValue)) {
      stringOnlyArray.push(testValue);
    }

    // stringOnlyArray should still only have item in it
    expect(stringOnlyArray).toHaveLength(1);

    // set value back to string
    testValue = values.exampleString;

    // use gard before adding to array
    if (!isUndefined<string>(testValue)) {
      // should add to array
      stringOnlyArray.push(testValue);
    }

    // stringOnlyArray should now have 2 items in it
    expect(stringOnlyArray).toHaveLength(2);
  });

});
