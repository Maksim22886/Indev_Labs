const findmissingnumber = require('./findMissingNumber');

describe('findmissingnumber function', () => {
  it('should return the missing number in an array', () => {
    // сценарий когда не хватает числа в массиве
    expect(findmissingnumber([5, 0, 1, 3, 2])).toBe(4);
    // сценарий когда не хватает числа в массиве
    expect(findmissingnumber([7, 9, 10, 11, 12])).toBe(8);
    // сценарий когда не хватает числа в массиве
    expect(findmissingnumber([0, 1, 2, 4, 5, 6])).toBe(3);
    // сценарий когда не хватает числа в массиве
    expect(findmissingnumber([0, 2])).toBe(1);
  });

  it('should return -1 if no missing number in the array', () => {
    // боковой сценарий когда все числа есть
    expect(findmissingnumber([0, 1, 2, 3, 4, 5])).toBe(-1);
    expect(findmissingnumber([1, 2, 3, 4])).toBe(-1);
    expect(findmissingnumber([3, 4])).toBe(-1);
  });
});