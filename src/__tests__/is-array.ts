import * as values from "../examples/example-values";
import {isArray} from "../is-array";




describe('should check if is array', function () {

  it('should return false when receives string', function () {
    expect(isArray(values.exampleString)).toBeFalsy();
    expect(isArray(values.exampleStringOfNumber)).toBeFalsy();
    expect(isArray(values.exampleStringWithSpaces)).toBeFalsy();
    expect(isArray(values.exampleStringOfSpacesValue)).toBeFalsy();
    expect(isArray(values.exampleStringEmpty)).toBeFalsy();
  });

  it('should return false when receives number', function () {
    expect(isArray(values.exampleNumber)).toBeFalsy();
    expect(isArray(values.exampleNumberNegative)).toBeFalsy();
    expect(isArray(values.exampleNumberNan)).toBeFalsy();
    expect(isArray(values.exampleNumberInt)).toBeFalsy();
    expect(isArray(values.exampleNumberIntNegative)).toBeFalsy();
  });

  it('should return false when receives undefined', function () {
    expect(isArray(values.exampleUndefined)).toBeFalsy();
  });

  it('should return false when receives nothing', function () {
    expect(isArray()).toBeFalsy();
  });

  it('should return false when receives null', function () {
    expect(isArray(values.exampleNull)).toBeFalsy();
  });

  it('should return false when receives boolean', function () {
    expect(isArray(values.exampleBool)).toBeFalsy();
    expect(isArray(values.exampleTrue)).toBeFalsy();
    expect(isArray(values.exampleBoolTrue)).toBeFalsy();
    expect(isArray(values.exampleFalse)).toBeFalsy();
    expect(isArray(values.exampleBoolFalse)).toBeFalsy();
  });

  it('should return true when receives array', function () {
    expect(isArray(values.exampleArray)).toBeTruthy();
    expect(isArray(values.exampleArrayStrings)).toBeTruthy();
    expect(isArray(values.exampleArrayNumbers)).toBeTruthy();
    expect(isArray(values.exampleArrayUndefined)).toBeTruthy();
    expect(isArray(values.exampleArrayNulls)).toBeTruthy();
    expect(isArray(values.exampleArrayBoolean)).toBeTruthy();
  });


  it('should work as type guard for typescript', function () {

    const arrayOnlyArray: number[][] = [];

    let testValue: number[] | string | undefined = [values.exampleNumber];

    // arrayOnlyArray should be empty
    expect(arrayOnlyArray).toHaveLength(0);

    // use gard before adding to array
    if (isArray(testValue)) {
      // should add to array
      arrayOnlyArray.push(testValue);
    }

    // arrayOnlyArray should now have item in it
    expect(arrayOnlyArray).toHaveLength(1);

    // set value to undefined
    testValue = undefined;

    // use gard before adding to array
    if (isArray<number>(testValue)) {
      arrayOnlyArray.push(testValue);
    }

    // arrayOnlyArray should still only have item in it
    expect(arrayOnlyArray).toHaveLength(1);

    // set value back to string
    testValue = values.exampleString;

    // use gard before adding to array
    if (isArray<number>(testValue)) {
      // should add to array
      arrayOnlyArray.push(testValue);
    }

    // arrayOnlyArray should still only have item in it
    expect(arrayOnlyArray).toHaveLength(1);
  });

});
