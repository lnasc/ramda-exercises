import R from 'ramda';

const product = {
  name: 'widget',
  price: 10,
  avgRating: 4.5,
  shippingWeight: '2 lbs',
  shippingCost: 2
}

test('exercice10', () => {
  const getProps = R.pick(['name', 'price', 'category']);
  const getProps2 = R.pickAll(['name', 'price', 'category']);
  const getProps3 = R.pickBy(val => Number(val));
  const getProps4 = R.pickBy((val, key) => R.contains('shipping', key));
  const getProps5 = R.omit(['shippingWeight', 'shippingCost']);
  const getProps6 = R.pickBy((val, key) => !R.contains('shipping', key));

  const result = getProps6(product); //?
});