import palindrome from '../';

test('palindrome', () => {
  expect(palindrome('eye')).toEqual(true);
  expect(palindrome('A man, a plan, a canal. Panama')).toEqual(true);
  expect(palindrome('0_0 (: /-\ :) 0-0')).toEqual(true);
  expect(palindrome('almostomla')).toEqual(false);
  expect(palindrome('boo')).toEqual(false);
});
