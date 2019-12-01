import R from 'ramda';

test('exercice14', () => { 
  const throughNByOne = R.curry((limit, n) => n > limit ? false : [n, n + 1]);
  const result = R.unfold(throughNByOne(15), 1); //?
});