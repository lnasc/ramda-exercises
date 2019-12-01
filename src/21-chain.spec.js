import R from 'ramda';

const product = {
  name: 'Sample Data',
  sizes: [
    {
      name: 'L',
      colors: [{ name: 'red' }, { name: 'blue' }]
    }, {
      name: 'M',
      colors: [{ name: 'pink' }, { name: 'red' }] 
    }, {
        name: 'S',
        colors: [{ name: 'brown' }, { name: 'orange' }]
      }
  ]
}

test('exercice21', () => {
  const result = R.compose(
    R.uniq,
    R.pluck('name'),
    R.unnest,
    R.map(R.prop('colors')),
    R.prop('sizes')
  )(product); //?

  // could be rewritten as this 
  // unnest(map()) is replaced by chain which is like flatMap
  const result2 = R.compose(
    R.uniq,
    R.pluck('name'),
    R.chain(R.prop('colors')),
    R.prop('sizes')
  )(product); //?
});