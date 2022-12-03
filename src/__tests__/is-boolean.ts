import isBoolean from "../is-boolean";
import * as values from "../examples/example-values";


describe('should check if is boolean', function () {

  it('should return false when receives string', function () {
    expect(isBoolean(values.exampleString)).toBeFalsy();
    expect(isBoolean(values.exampleStringOfNumber)).toBeFalsy();
    expect(isBoolean(values.exampleStringWithSpaces)).toBeFalsy();
    expect(isBoolean(values.exampleStringOfSpacesValue)).toBeFalsy();
    expect(isBoolean(values.exampleStringEmpty)).toBeFalsy();
  });

  it('should return false when receives number', function () {
    expect(isBoolean(values.exampleNumber)).toBeFalsy();
    expect(isBoolean(values.exampleNumberNegative)).toBeFalsy();
    expect(isBoolean(values.exampleNumberNan)).toBeFalsy();
    expect(isBoolean(values.exampleNumberInt)).toBeFalsy();
    expect(isBoolean(values.exampleNumberIntNegative)).toBeFalsy();
  });

  it('should return false when receives undefined', function () {
    expect(isBoolean(values.exampleUndefined)).toBeFalsy();
  });

  it('should return false when receives nothing', function () {
    expect(isBoolean()).toBeFalsy();
    expect(isBoolean()).toBeFalsy();
  });

  it('should return false when receives null', function () {
    expect(isBoolean(values.exampleNull)).toBeFalsy();
  });

  it('should return true when receives boolean', function () {
    expect(isBoolean(values.exampleBool)).toBeTruthy();
    expect(isBoolean(values.exampleTrue)).toBeTruthy();
    expect(isBoolean(values.exampleBoolTrue)).toBeTruthy();
    expect(isBoolean(values.exampleFalse)).toBeTruthy();
    expect(isBoolean(values.exampleBoolFalse)).toBeTruthy();
  });

  it('should return false when receives array', function () {
    expect(isBoolean(values.exampleArray)).toBeFalsy();
    expect(isBoolean(values.exampleArrayStrings)).toBeFalsy();
    expect(isBoolean(values.exampleArrayNumbers)).toBeFalsy();
    expect(isBoolean(values.exampleArrayUndefined)).toBeFalsy();
    expect(isBoolean(values.exampleArrayNulls)).toBeFalsy();
    expect(isBoolean(values.exampleArrayBoolean)).toBeFalsy();
  });


  it('should work as type guard for typescript', function () {

    const booleanOnlyArray: boolean[] = [];

    let testValue: boolean | string | undefined = values.exampleBool;

    // booleanOnlyArray should be empty
    expect(booleanOnlyArray).toHaveLength(0);

    // use gard before adding to array
    if (isBoolean(testValue)) {
      // should add to array
      booleanOnlyArray.push(testValue);
    }

    // booleanOnlyArray should now have item in it
    expect(booleanOnlyArray).toHaveLength(1);

    // set value to undefined
    testValue = undefined;

    // use gard before adding to array
    if (isBoolean(testValue)) {
      booleanOnlyArray.push(testValue);
    }

    // booleanOnlyArray should still only have item in it
    expect(booleanOnlyArray).toHaveLength(1);

    // set value back to string
    testValue = values.exampleString;

    // use gard before adding to array
    if (isBoolean(testValue)) {
      // should add to array
      booleanOnlyArray.push(testValue);
    }

    // booleanOnlyArray should still only have item in it
    expect(booleanOnlyArray).toHaveLength(1);
  });

});
