import truncateString from '../';

describe('Truncating a string', () => {
  it('returns the input string if it is longer than the number specified', () => {
    const str = 'hello world';
    expect(truncateString(str, 50)).toEqual(str);
  });

  it('truncates a string when it is less than the number specified', () => {
    const str = 'A-tisket a-tasket A green and yellow basket';

    expect(truncateString('hello world', 3)).toEqual('hel...');
    expect(truncateString(str, 11)).toEqual('A-tisket...');
    expect(truncateString(str, str.length + 2)).toEqual(str);
  });
});
