import findLongestWord from '../';

describe('Find the longest word in a string', () => {
  it('returns a number', () => {
    const actual = typeof findLongestWord('some sentence');
    expect(actual).toEqual('number');
  });

  it('returns the length of the longest word in the sentence', () => {
    const actual = findLongestWord('The quick brown fox jumped over the lazy dog');
    const expected = 6;

    expect(actual).toEqual(expected);
    expect(findLongestWord('What is the average airspeed velocity of an unladen swallow')).toEqual(8);
    expect(findLongestWord('What if we try a super-long word such as otorhinolaryngology')).toEqual(19);
  });
});
