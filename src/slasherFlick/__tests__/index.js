import slasher from '../';

describe('Slasher Flick', () => {
  it('slashes the provided number of items from an array', () => {
    expect(slasher([1, 2, 3], 2)).toEqual([3]);
    expect(slasher([1, 2, 'chicken', 3, 'potatoes', 'cheese', 4], 5)).toEqual(['cheese', 4]);
    expect(slasher(['burgers', 'fries', 'shake'], 1)).toEqual(['fries', 'shake']);
  });

  it('returns an empty array when the number provided is greater than the length of the array', () => {
    expect(slasher([1, 2, 3], 10)).toEqual([]);
  });
});
