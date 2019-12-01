import { compose, fromPairs, identity, map, split, tail } from 'ramda';

const queryString = '?page=2&pageSize=10&total=203';

const parseQs = compose(
  fromPairs,
  map(split('=')),
  split('&'),
  tail); // ?

test('execice02', () => {
  const result = parseQs(queryString); // ?
  expect(result).toEqual({
    page: '2',
    pageSize: '10',
    total: '203'
  });
});
