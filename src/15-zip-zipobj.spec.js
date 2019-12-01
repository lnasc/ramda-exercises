import R from 'ramda';

test('exercice15', (done) => { 
  const getName = () => Promise.resolve('Andrew');
  const getHobbies = () =>
    new Promise((res, rej) => {
      setTimeout(() => res(['kayaking', 'woodworking', 'screencasting']), 500)
    });
  Promise.all([getName(), getHobbies()])
    //.then(([name, hobbies]) => ({ name, hobbies }))
    // could be rewritten like this
    //.then(R.compose(R.fromPairs, R.zip(['name', 'hobbies']))) 
    // which could also be rewritten like this
    .then(R.zipObj(['name', 'hobbies']))
    .then(result => {
      console.log(result);
      done();
    });

    const test =['coucou', ['chien', 'chat'], ['plante', 'arbre']];
    // this
    R.compose(
      R.fromPairs,
      R.zip(['politesse', 'animal', 'vegetal'])
    )(test); //?
    // could be rewritten like this
    R.zipObj(['politesse', 'animal', 'vegetal'], test); //?
});