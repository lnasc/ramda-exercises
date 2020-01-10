it('should test', () => {
    const instruments1 = [{
      InstrumentId: 42,
      InstrumentName: 'ACCOR SA',
    }, {
      InstrumentId: 43,
      InstrumentName: 'AIR LIQUIDE SA',
    }] as any[];

    const instruments2 = [{
      InstrumentId: 44,
      InstrumentName: 'ACCOR SA',
    }, {
      InstrumentId: 43,
      InstrumentName: 'AIR LIQUIDE SA',
    }] as any[];

    const listOfIdsContainsInstrument = R.curry(
      (instrumentIds, instrument) =>
        R.none(R.equals(instrument.InstrumentId), instrumentIds));

    const instrumentIds = R.map(R.prop('InstrumentId'), instruments1);
    const test = R.filter(
      listOfIdsContainsInstrument(instrumentIds),
      instruments2); // ?

    // return R.filter(R.none(R.propEq('Instrument')), this.instruments);
  });
