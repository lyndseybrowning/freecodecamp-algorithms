import destroyer from '../';

test('Destroyer', () => {
  expect(destroyer([1, 2, 3, 1, 2, 3], 2, 3)).toEqual([1, 1]);
  expect(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)).toEqual([1, 5, 1]);
  expect(destroyer(['tree', 'hamburger', 53], 'tree', 53)).toEqual(['hamburger']);
  expect(destroyer([2, 3, 2, 3], 2, 3)).toEqual([]);
});
