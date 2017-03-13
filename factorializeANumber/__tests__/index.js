import factorialize from '../';

test('Factorialise a number', () => {
  const actual = factorialize(5);
  const expected = 120;

  expect(actual).toEqual(expected);
  expect(factorialize(10)).toEqual(3628800);
  expect(factorialize(20)).toEqual(2432902008176640000);
});
