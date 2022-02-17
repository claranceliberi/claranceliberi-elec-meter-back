import { generate8DigitToken } from '../../src/helpers/helpers';

describe('helpers test', () => {
  it('should 8 digit token', () => {
    expect(generate8DigitToken(8).length).toBe(8);
  });
});
