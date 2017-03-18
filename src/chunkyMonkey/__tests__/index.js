import chunkArrayInGroups from '../';

test('Chunky Monkey', () => {
  expect(chunkArrayInGroups(['a', 'b', 'c', 'd'], 2)).toEqual([['a', 'b'], ['c', 'd']]);
  expect(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)).toEqual([[0, 1, 2], [3, 4, 5]]);
  expect(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)).toEqual([[0, 1, 2, 3], [4, 5, 6, 7], [8]]);
});
