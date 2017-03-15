import repeatString from '../';

describe('Repeating a string', () => {
  it('returns an empty string when the provided number is not positive', () => {
    expect(repeatString('abc', 0)).toEqual('');
  });

  it('repeats a given string by the number of times provided', () => {
    expect(repeatString('abc', 1)).toEqual('abc');
    expect(repeatString('abc', 2)).toEqual('abcabc');
    expect(repeatString('*', 3)).toEqual('***');
  });
});
