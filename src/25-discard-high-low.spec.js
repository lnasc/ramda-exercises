import R from 'ramda';
import { get } from 'http';

const getLowest = R.reduce(R.min, Number.MAX_VALUE);
const getHighest = R.reduce(R.max, Number.MIN_VALUE);

const dropHighLow = (numbers) => {
  const low = getLowest(numbers); //?
  const high = getHighest(numbers); //?
  return R.without([low, high], numbers);
}

// could be rewritten like this
const getExclude = R.converge((a, b) => [a, b], [getLowest, getHighest]);
const dropHighLow2 = (numbers) => {
  const exclude = getExclude(numbers);
  return R.without(exclude, numbers);
}

// could be rewritten like this
const dropHighLow3 = R.converge(R.without, [getExclude, R.identity]);
 
test('dropHighLow returns an array with high and low values dropped from source', () => {
  const input = [1,2,3,4,5,6,7,8];
  const expected = [2,3,4,5,6,7]; 
  const result = dropHighLow3(input);
  expect(result).toEqual(expected);
});