import * as values from "../examples/example-values";
import isNumber from "../is-number";



describe('should check if is number', function () {

  it('should return false when receives string', function () {
    expect(isNumber(values.exampleString)).toBeFalsy();
    expect(isNumber(values.exampleStringOfNumber)).toBeFalsy();
    expect(isNumber(values.exampleStringWithSpaces)).toBeFalsy();
    expect(isNumber(values.exampleStringOfSpacesValue)).toBeFalsy();
    expect(isNumber(values.exampleStringEmpty)).toBeFalsy();
  });

  it('should return true when receives number', function () {
    expect(isNumber(values.exampleNumber)).toBeTruthy();
    expect(isNumber(values.exampleNumberNegative)).toBeTruthy();
    expect(isNumber(values.exampleNumberNan)).toBeTruthy();
    expect(isNumber(values.exampleNumberInt)).toBeTruthy();
    expect(isNumber(values.exampleNumberIntNegative)).toBeTruthy();
  });

  it('should return false when receives undefined', function () {
    expect(isNumber(values.exampleUndefined)).toBeFalsy();
  });

  it('should return false when receives nothing', function () {
    expect(isNumber()).toBeFalsy();
  });

  it('should return false when receives null', function () {
    expect(isNumber(values.exampleNull)).toBeFalsy();
  });

  it('should return false when receives boolean', function () {
    expect(isNumber(values.exampleBool)).toBeFalsy();
    expect(isNumber(values.exampleTrue)).toBeFalsy();
    expect(isNumber(values.exampleBoolTrue)).toBeFalsy();
    expect(isNumber(values.exampleFalse)).toBeFalsy();
    expect(isNumber(values.exampleBoolFalse)).toBeFalsy();
  });

  it('should return false when receives array', function () {
    expect(isNumber(values.exampleArray)).toBeFalsy();
    expect(isNumber(values.exampleArrayStrings)).toBeFalsy();
    expect(isNumber(values.exampleArrayNumbers)).toBeFalsy();
    expect(isNumber(values.exampleArrayUndefined)).toBeFalsy();
    expect(isNumber(values.exampleArrayNulls)).toBeFalsy();
    expect(isNumber(values.exampleArrayBoolean)).toBeFalsy();
  });


  it('should work as type guard for typescript', function () {

    const numberOnlyArray: number[] = [];

    let testValue: number | string | undefined = values.exampleNumber;

    // numberOnlyArray should be empty
    expect(numberOnlyArray).toHaveLength(0);

    // use gard before adding to array
    if (isNumber(testValue)) {
      // should add to array
      numberOnlyArray.push(testValue);
    }

    // numberOnlyArray should now have item in it
    expect(numberOnlyArray).toHaveLength(1);

    // set value to undefined
    testValue = undefined;

    // use gard before adding to array
    if (isNumber(testValue)) {
      numberOnlyArray.push(testValue);
    }

    // numberOnlyArray should still only have item in it
    expect(numberOnlyArray).toHaveLength(1);

    // set value back to string
    testValue = values.exampleString;

    // use gard before adding to array
    if (isNumber(testValue)) {
      // should add to array
      numberOnlyArray.push(testValue);
    }

    // numberOnlyArray should still only have item in it
    expect(numberOnlyArray).toHaveLength(1);
  });

});
