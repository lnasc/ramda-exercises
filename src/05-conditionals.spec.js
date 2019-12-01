import { cond, curry, identity, ifElse, lensProp,
  map, over, propEq, set, T, unless, view, when } from 'ramda';

const products = [
  { name: 'Jeans', price: 80, category: 'clothes' },
  { name: 'Cards', price: 5, category: 'games' },
  { name: 'iPhone', price: 649, category: 'electronics' },
  { name: 'Freakonomics', price: 30, category: 'books' }
];

const pLens = lensProp('price');
const applyDiscount = curry((perc, amt) => amt - (amt * perc) / 100);

// Applies 50% discount on electronics and 10% on other categories
const adjustPrice = ifElse(
  propEq('category', 'electronics'),
  over(pLens, applyDiscount(50)),
  over(pLens, applyDiscount(10))
);

// Applies 50% discount on electronics and leaves other categories untouched
const adjustPrice2 = ifElse(
  propEq('category', 'electronics'),
  over(pLens, applyDiscount(50)),
  identity
);

// Could also be written like this
const adjustPrice3 = when(
  propEq('category', 'electronics'),
  over(pLens, applyDiscount(50))
);

// Applies 50% discount on electronics, 10% on clothes
// and leaves other categories untouched
const adjustPrice4 = cond([
  [propEq('category', 'electronics'), over(pLens, applyDiscount(50))],
  [propEq('category', 'clothes'), over(pLens, applyDiscount(10))],
  [T, identity]
]);

// Applies 50% discount on elec tronics, 20% on clothes, 

test('exercice05', () => {
  const result = map(adjustPrice4, products); // ?
});
