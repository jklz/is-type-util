import isType from '../';

describe('index default has all expected Properties', function () {

  it('should do have prop on default export for default.array', function () {
    expect(isType).toHaveProperty('array')
    expect(isType.array).not.toBeUndefined();
    expect(typeof isType.array).toBe("function")
  });

  it('should do have prop on default export for default.boolean', function () {
    expect(isType).toHaveProperty('boolean')
    expect(isType.boolean).not.toBeUndefined();
    expect(typeof isType.boolean).toBe("function")
  });

  it('should do have prop on default export for default.defined', function () {
    expect(isType).toHaveProperty('defined')
    expect(isType.defined).not.toBeUndefined();
    expect(typeof isType.defined).toBe("function")
  });

  it('should do have prop on default export for default.number', function () {
    expect(isType).toHaveProperty('number')
    expect(isType.number).not.toBeUndefined();
    expect(typeof isType.number).toBe("function")
  });

  it('should do have prop on default export for default.string', function () {
    expect(isType).toHaveProperty('string')
    expect(isType.string).not.toBeUndefined();
    expect(typeof isType.string).toBe("function")
  });

  it('should do have prop on default export for default.undefined', function () {
    expect(isType).toHaveProperty('undefined')
    expect(isType.undefined).not.toBeUndefined();
    expect(typeof isType.undefined).toBe("function")
  });


});
