import largestOfFour from '../';

describe('largest of four', () => {
  it('returns an array', () => {
    const actual = Array.isArray(largestOfFour([[1,2,3,4]]));
    const expected = true;

    expect(actual).toEqual(expected);
  });

  it('returns a new array containing the largest items in each sub-array', () => {
    const actual = largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
    const expected = [27, 5, 39, 1001];

    expect(actual).toEqual(expected);
    expect(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]])).toEqual([9, 35, 97, 1000000]);
  });
});
