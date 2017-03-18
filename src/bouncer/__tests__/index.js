import bouncer from '../';

test('Bouncer', () => {
  const arr = ['a', 'b', 'c'];

  expect(bouncer([7, 'ate', '', false, 9, null])).toEqual([7, 'ate', 9]);
  expect(bouncer(arr)).toEqual(arr);
});
