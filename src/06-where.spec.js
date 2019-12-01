import { equals, filter, lt, pipe, pluck, T, where, __ } from 'ramda';

const products = [
    { name: 'Jeans', price: 80, category: 'clothes', stock: 100 },
    { name: 'Hoodie', price: 50, category: 'clothes', stock: 20 },
    { name: 'Sneakers', price: 120, category: 'clothes', stock: 30 },
    { name: 'Cards', price: 35, category: 'games', stock: 10 },
    { name: 'iPhone', price: 649, category: 'electronics', stock: 5 },
    { name: 'Sauce Pan', price: 100, category: 'housewares', stock: 200 }
  ];

  // this
const predicate = prod => 
  prod.category === 'clothes' && prod.stock < 50;
  
// is equivalent to
const predicate2 = where({
  category: equals('clothes'),
  stock: lt(__, 50)
});

const getResults = pipe(
  filter(predicate2),
  pluck('name'));

test('exercice06', () => {
  getResults(products); // ?
}); 