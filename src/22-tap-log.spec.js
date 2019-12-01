import R from 'ramda';

const queryString = '?page=2&pageSize=10&total=203';

test('exercice22', () => {
  const parseQs = R.compose(
    R.fromPairs,
    R.map(R.split('=')),
    R.tap(console.log),
    R.split('&'),
    R.tail)
    (queryString); // ?
});