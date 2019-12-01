import R from 'ramda';

const product = {
  name: 'cog',
  price: 100,
  details: {
    shippingInfo: {
      weight: 7
    }
  }
};

test('exercice12', () => { 
  const adjustProduct = p => {
    return R.merge(p, { 
      name: R.toUpper(p.name),
      price: R.multiply(2, p.price)
    });
  };

  // could be rewritten like this
  const adjustProduct2 = R.evolve({
    name: R.toUpper,
    price: R.multiply(2)
  });

  const adjustProduct3 = R.evolve({
    name: R.toUpper,
    price: R.multiply(2),
    details: {
      shippingInfo: {
        weight: R.inc
      }
    }
  });

  const result = adjustProduct3(product); //?
});