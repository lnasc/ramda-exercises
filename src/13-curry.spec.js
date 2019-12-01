import R from 'ramda';

test('exercice13', () => { 
  const add = (a, b) => a + b;
  const curriedAdd = R.curry((a, b) => a + b);
  const multiply = a => b => a * b;
  const uncurriedMultiply = R.uncurryN(2, multiply);
  const result = curriedAdd(1, 2); //?
  const result2 = curriedAdd(1)(2); //?
  const result3 = uncurriedMultiply(2, 3); //?
});