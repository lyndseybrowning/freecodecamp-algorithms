import reverseString from '../';

describe('Reversing a string', () => {
  const actual = reverseString('hello');
  const expected = 'olleh';

  it('throws when anything other than a string is provided', () => {
    expect(() => reverseString()).toThrow();
  });

  it('expects an empty string to return an empty string', () => {
    expect(reverseString('')).toEqual('');
  });

  it('reverses a given string', () => {
    expect(actual).toEqual(expected);
  });
});
