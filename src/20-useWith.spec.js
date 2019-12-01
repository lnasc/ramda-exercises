import R from 'ramda';

const countries = [
  { cc: 'GB', flag: 'gbFlag' },
  { cc: 'US', flag: 'gbFlag' },
  { cc: 'CA', flag: 'gbFlag' },
  { cc: 'FR', flag: 'gbFlag' },
]

test('exercice20', () => {
  const getCountry = (cc, list) => R.find(R.propEq('cc', cc), list);
  // is equivalent to
  const getCountry2 = R.useWith(R.find, [R.propEq('cc'), R.identity]);  
  // is equivalent to
  const getCountry3 = R.useWith(R.find, [R.propEq('cc')]);  
  const result = getCountry3('FR', countries); //?
});