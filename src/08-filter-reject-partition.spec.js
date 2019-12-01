import R from 'ramda';

const pets = [
  { name: 'Spike', type: 'dog' },
  { name: 'Mittens', type: 'cat' },
  { name: 'Rover', type: 'dog' },
  { name: 'Fluffy', type: 'cat' },
  { name: 'Fido', type: 'dog' },
];

const dogCheck = pet => pet.type === 'dog';

test('exercice08', () => {
  const dogs = R.filter(dogCheck, pets); //?
  const cats = R.reject(dogCheck, pets); //?
  const partitioned = R.partition(dogCheck, pets); //?
});
