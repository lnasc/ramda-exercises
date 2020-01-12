import R from 'ramda';

it('should test', () => {
    const instruments1 = [{
      InstrumentId: 42,
      InstrumentName: 'ACCOR SA',
    }, {
      InstrumentId: 43,
      InstrumentName: 'AIR LIQUIDE SA',
    }];

    const instruments2 = [{
      InstrumentId: 44,
      InstrumentName: 'ACCOR SA',
    }, {
      InstrumentId: 43,
      InstrumentName: 'AIR LIQUIDE SA',
    }];

    const listOfIdsContainsInstrument = R.curry(
      (instrumentIds, instrument) =>
        R.none(R.equals(instrument.InstrumentId), instrumentIds));

    const hasNotInstrument = R.none()

    const instrumentIds = instruments1.map(x => x.InstrumentId); // ?
    // const test = R.filter(
    //   listOfIdsContainsInstrument(instrumentIds),
    //   instruments2); // ?

    const test = instruments2.filter(x => !instruments1.some(y => y.InstrumentId === x.InstrumentId)); // ?

    // return R.filter(R.none(R.propEq('Instrument')), this.instruments);
  });
