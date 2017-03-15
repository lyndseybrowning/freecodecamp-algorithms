import confirmEnding from '../';

test('Confirm the ending', () => {
  expect(confirmEnding('Lyndsey', 'y')).toEqual(true);
  expect(confirmEnding('Open sesame', 'same')).toEqual(true);
  expect(confirmEnding('This is a long string', 'ring')).toEqual(true);
  expect(confirmEnding('Connor', 'n')).toEqual(false);
  expect(confirmEnding('hello world', 'helloworld')).toEqual(false);
});
