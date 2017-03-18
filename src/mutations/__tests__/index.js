import mutation from '../';

test('Mutations', () => {
  expect(mutation(['hello', 'Hello'])).toEqual(true);
  expect(mutation(['zyxwvutsrqponmlkjihgfedcba', 'qrstu'])).toEqual(true);
  expect(mutation(['Mary', 'Army'])).toEqual(true);
  expect(mutation(['blah', 'asb'])).toEqual(false);
  expect(mutation(['hello', 'hey'])).toEqual(false);
});
