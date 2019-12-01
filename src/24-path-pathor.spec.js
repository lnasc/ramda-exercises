import R from 'ramda';

const acctDept = {
  name: 'Account Payable',
  location: '14th floor',
  personnel: {
    manager: {
      fName: 'Bill',
      lName: 'Lumberg',
      title: 'director of stuff and things',
      salary: 75000
    }
  }
}

const itDept = {
  name: 'IT',
  location: 'remote'
}

test('exercice24', () => {
  const getManagerLastName = R.pathOr('Unknown', ['personnel', 'manager', 'lName']); //?
  getManagerLastName(acctDept); // ?
  getManagerLastName(itDept); // ?
});