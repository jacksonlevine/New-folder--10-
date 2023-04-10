import CountCoins from './../src/coinCounter.js';
import { CountCoinsWithClosures } from './../src/coinCounter.js';
import RecursiveCount from './../src/otherCoinCounter.js';

describe('CountCoins', () => {

  test("Should correctly return amount of quarters given when dividing given dollar amount.", () => {
    const amountQuarters = CountCoins(5);
    expect(amountQuarters).toEqual("20 quarters ");
  });

  test("Should return amount of quarters and dimes if given an amount divisible by 0.10 but not by 1", () => {
    const amountDimes = CountCoins(5.2);
    expect(amountDimes).toEqual("20 quarters 2 dimes ");
  });

  test("Should return amount of quarters, dimes and nickels if given an amount divisible by .05, but not by .10 or 1", () => {
    const amountNickels = CountCoins(5.15);
    expect(amountNickels).toEqual("20 quarters 1 dimes 1 nickels ")
  });

  test("Should return amount of quarters, dimes, nickels and pennies if given an amount divisible by .01, but not by .10 or 1", () => {
    const amountNickels = CountCoins(5.17);
    expect(amountNickels).toEqual("20 quarters 1 dimes 1 nickels 2 pennies ")
  });
});

describe('CountCoinsWithClosures', () => {

  test("Should return amount of quarters.", () => {
    const result = CountCoinsWithClosures(5.17);
    expect(result[0]).toBe(20);
  });

  test("Should return amount of qimes.", () => {
    const result1 = CountCoinsWithClosures(5.17);
    expect(result1[1]).toEqual(1);
  });

  test("Should return amount of nickels.", () => {
    const result2 = CountCoinsWithClosures(5.17);
    expect(result2[2]).toEqual(1);
  });

  test("Should return amount of pennies.", () => {
    const result3 = CountCoinsWithClosures(5.17);
    expect(result3[3]).toEqual(2);
  });
});

describe('CountCoinsWithClosures1', () => {

  test("Should return amount of quarters, dimes, nickels and pennies.", () => {
    const result = CountCoinsWithClosures(5.17);
    expect(result).toStrictEqual([20, 1, 1, 2]);
  });
});


