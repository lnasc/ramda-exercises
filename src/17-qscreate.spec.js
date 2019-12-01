import R from 'ramda';

const qsObj = {
  page: 2,
  pageSize: 10,
  total: 203
};

test('exercice17', () => { 
  const createQs = R.compose(
    R.concat('?'),
    R.join('&'),
    R.map(R.join('=')),
    R.toPairs
  );
  const result = createQs(qsObj); //?
});