import R from 'ramda';

const teams = [
  { name: 'Lions', score: 5 },
  { name: 'Tigers', score: 4 },
  { name: 'Bears', score: 6 },
  { name: 'Monkeys', score: 2 }
];


const getTopName1 = function (teams) {
  let maxScore = Math.max(...R.pluck('score', teams)); 
  return R.compose(
    R.prop('name'),
    R.head,
    R.filter(R.propEq('score', maxScore))
  )(teams); //?
}

// this is better
const getTopName2 = function (teams) {
  return R.compose(
      R.prop('name'),
      R.head,
      R.sort((a, b) => b.score - a.score)
    )(teams); //?
}

// we can be more descriptive
const getTopName3 = function (teams) {
  const sortByScore = R.sort(R.descend(R.prop('score')));
  const getName = R.prop('name');
  return R.pipe(
      sortByScore,
      R.head,
      getName
    )(teams); //?
}

test('exercice09', () => {
  const result = getTopName3(teams); // ?
});