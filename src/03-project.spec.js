import { compose, map, pick, project } from 'ramda';

const products = [
  { name: 'Jeans', price: 80, category: 'clothes' },
  { name: 'Hoodie', price: 60, category: 'clothes' },
  { name: 'Jacket', price: 120, category: 'clothes' },
  { name: 'Cards', price: 35, category: 'games' },
  { name: 'iPhone', price: 649, category: 'electronics' },
  { name: 'Sauce Pan', price: 100, category: 'housewares' }
];

const getNameAndPrice = map(pick(['name', 'price']));
const getNameAndPrice2 = project(['name', 'price']);

test('exercice04', () => {
  const result = getNameAndPrice(products);
  const result2 = getNameAndPrice2(products); //?
});