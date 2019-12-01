import R from 'ramda';

const sample = [
  { name: 'Sally', age: 29, height: 65 },
  { name: 'Zac', age: 29, height: 72 },
  { name: 'John', age: 32, height: 61 },
  { name: 'Lisa', age: 28, height: 63 },
  { name: 'Bob', age: 29, height: 66 },
  { name: 'Allen', age: 29, height: 66 }
];

test('exercice18', () => {
  const result = R.sort(R.ascend(R.prop('age')), sample); //?
  const result2 = R.sortWith([
    R.ascend(R.prop('age')),
    R.descend(R.prop('height')),
    R.ascend(R.prop('name'))
  ], sample); //?
});