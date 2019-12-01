import R from 'ramda';

const person = {
  name: 'Sally Jones'
};

test('exercice11', () => { 
  const getUpperName = R.pipe(
    R.prop('name'),
    R.tryCatch(R.toUpper, R.always('DEFAULT'))
  ); 

  // could be rewritten like this
  const getUpperName2 = R.pipe(
    R.propOr('default', 'name'),
    R.toUpper
  );

  getUpperName2(undefined); // ?
});