import { assoc, compose, converge, dissoc, identity, propOr } from 'ramda';

const person = {
  id: 1,
  name: 'Joe'
};

const expectedUrl = 'https://img.socialnetwork.com/avatar/1.png';

const generateUrl = id => `https://img.socialnetwork.com/avatar/${id}.png`;
const getUrlFromPerson = 
  compose(
    generateUrl,
    propOr('default', 'id'));

  // this
const getUpdatedPerson = person => 
  assoc(
    'avatar',
    getUrlFromPerson(person),
    person);

  // is equivalent to this
const getUpdatedPerson2=
  converge(
    assoc('avatar'),
    [getUrlFromPerson, identity]
  );

test('should get the updated person', () => {
  const result = getUpdatedPerson2(person); // ?
});