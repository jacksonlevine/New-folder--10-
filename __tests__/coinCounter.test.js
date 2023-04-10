import CountCoins from './../src/coinCounter.js';

describe('CountCoins', () => {

  test("Should correctly return amount of quarters given when dividing given dollar amount.", () => {
    const amountQuarters = CountCoins(5);
    expect(amountQuarters).toEqual(25);
  });

});