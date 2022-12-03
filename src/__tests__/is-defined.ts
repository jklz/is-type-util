import isDefined from "../is-defined";
import * as values from "../examples/example-values";

describe('should check if is defined', function () {

  it('should return true when receives string', function () {
    expect(isDefined<string>(values.exampleString)).toBeTruthy();
    expect(isDefined<string>(values.exampleStringOfNumber)).toBeTruthy();
    expect(isDefined<string>(values.exampleStringWithSpaces)).toBeTruthy();
    expect(isDefined<string>(values.exampleStringOfSpacesValue)).toBeTruthy();
    expect(isDefined<string>(values.exampleStringEmpty)).toBeTruthy();
  });

  it('should return true when receives number', function () {
    expect(isDefined<number>(values.exampleNumber)).toBeTruthy();
    expect(isDefined<number>(values.exampleNumberNegative)).toBeTruthy();
    expect(isDefined<number>(values.exampleNumberNan)).toBeTruthy();
    expect(isDefined<number>(values.exampleNumberInt)).toBeTruthy();
    expect(isDefined<number>(values.exampleNumberIntNegative)).toBeTruthy();
  });

  it('should return false when receives undefined', function () {
    expect(isDefined<undefined>(values.exampleUndefined)).toBeFalsy();
  });

  it('should return false when receives nothing', function () {
    expect(isDefined()).toBeFalsy();
    expect(isDefined<never>()).toBeFalsy();
  });

  it('should return true when receives null', function () {
    expect(isDefined<null>(values.exampleNull)).toBeTruthy();
  });

  it('should return true when receives boolean', function () {
    expect(isDefined<boolean>(values.exampleBool)).toBeTruthy();
    expect(isDefined<true>(values.exampleTrue)).toBeTruthy();
    expect(isDefined<boolean>(values.exampleBoolTrue)).toBeTruthy();
    expect(isDefined<false>(values.exampleFalse)).toBeTruthy();
    expect(isDefined<boolean>(values.exampleBoolFalse)).toBeTruthy();
  });

  it('should return true when receives array', function () {
    expect(isDefined(values.exampleArray)).toBeTruthy();
    expect(isDefined(values.exampleArrayStrings)).toBeTruthy();
    expect(isDefined(values.exampleArrayNumbers)).toBeTruthy();
    expect(isDefined(values.exampleArrayUndefined)).toBeTruthy();
    expect(isDefined(values.exampleArrayNulls)).toBeTruthy();
    expect(isDefined(values.exampleArrayBoolean)).toBeTruthy();
  });


  it('should work as type guard for typescript', function () {

    const stringOnlyArray: string[] = [];

    let testValue: string | undefined = values.exampleString;

    // stringOnlyArray should be empty
    expect(stringOnlyArray).toHaveLength(0);

    // use gard before adding to array
    if (isDefined<string>(testValue)) {
      // should add to array
      stringOnlyArray.push(testValue);
    }

    // stringOnlyArray should now have item in it
    expect(stringOnlyArray).toHaveLength(1);

    // set value to undefined
    testValue = undefined;

    // use gard before adding to array
    if (isDefined<string>(testValue)) {
      stringOnlyArray.push(testValue);
    }

    // stringOnlyArray should still only have item in it
    expect(stringOnlyArray).toHaveLength(1);

    // set value back to string
    testValue = values.exampleString;

    // use gard before adding to array
    if (isDefined<string>(testValue)) {
      // should add to array
      stringOnlyArray.push(testValue);
    }

    // stringOnlyArray should now have 2 items in it
    expect(stringOnlyArray).toHaveLength(2);
  });

});
