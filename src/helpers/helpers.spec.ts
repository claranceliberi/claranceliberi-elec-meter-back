import {
  calculateDaysPerAmmount,
  generate8DigitToken,
  getDaysFromToken,
} from './helpers';

describe('helpers test', () => {
  it('should return 8 digit token', () => {
    expect(generate8DigitToken(100).length).toBe(8);
  });
  it('should throw error on invalid', () => {
    expect(() => generate8DigitToken(8)).toThrow(
      'Ammount must be a multiple of 100',
    );
  });
  it('should throw error when buying with ammount more that 5 years', () => {
    expect(() => generate8DigitToken(100 * 365 * 6)).toThrow(
      "We can't generate token for more than 5 years",
    );
  });

  it('should return valid days', () => {
    expect(calculateDaysPerAmmount(200)).toBe('0002');
    expect(calculateDaysPerAmmount(500)).toBe('0005');
    expect(calculateDaysPerAmmount(100 * 900)).toBe('0900');
  });

  it('Token should have same days as ammount provided', () => {
    expect(getDaysFromToken(generate8DigitToken(100))).toBe(1);
    expect(getDaysFromToken(generate8DigitToken(100 * 432))).toBe(432);
  });
});
