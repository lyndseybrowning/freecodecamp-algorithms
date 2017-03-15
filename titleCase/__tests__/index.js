import titleCase from '../';

test('Title case a sentence', () => {
  expect(titleCase('eye for an eye')).toEqual('Eye For An Eye');
  expect(titleCase('sHorT AnD sToUt')).toEqual('Short And Stout');
  expect(titleCase('HELLO WORLD')).toEqual('Hello World');
});
