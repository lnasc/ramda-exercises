import R from 'ramda';

const nums = [1,2,3,4,5];
const nums2 = [6,7,8,9,10];

test('exercice23', () => {

  const dbl = x => x * 2;
  const ramdaDbl = R.map(dbl);
  const result = nums.map(dbl); //?
  const result2 = nums2.map(dbl); //?
  const result3 = ramdaDbl(nums);
});