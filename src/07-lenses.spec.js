import { assoc, lens, lensProp, over, prop, set, toUpper, view } from 'ramda';

const person = {
  firstName: 'Fred',
  lastName: 'Flinstone'
}

// this
const fLens = lens(prop('firstName'), assoc('firstName'));

// is equivalent to
const fLens2 = lensProp('firstName');

test('exercise07', () => {
  const result = view(fLens2, person); //?
  const result2 = set(fLens2, 'John', person); //?
  
  // this
  const firstName = view(fLens2, person);
  const upperName = toUpper(firstName); // ?
  const result3 = set(fLens2, upperName, person); //?

  // is equivalent to
  const result4 = over(fLens2, toUpper, person); //?

});