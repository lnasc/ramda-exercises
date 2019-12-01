import R from 'ramda';

const cars = [{
  name: 'suv',
  doors: 4,
  mpg: 19
},{
  name: 'sedan',
  doors: 4,
  mpg: 30
},{
  name: 'hybrid',
  doors: 4,
  mpg: 37
},{
  name: 'compact',
  doors: 2,
  mpg: 32
},]

test('exercice16', () => { 
  const goodMileage = R.propSatisfies(R.lte(30), 'mpg');
  const fourDoors = R.propEq('doors', 4);
  const perfectCars = R.allPass([goodMileage, fourDoors]);

  // could also be written like this
  const perfectCars2 = R.where({
    mpg: R.lte(30),
    doors: R.equals(4)
  });

  const result = R.filter(perfectCars2, cars); //?
});