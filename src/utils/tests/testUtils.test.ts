import { arrayWithout } from '../testUtils';

describe('arrayWithout function', () => {
  it('works with empty call attributes', () => {
     // @ts-ignore
    const result = arrayWithout();
    expect(result).toEqual([]);
  });

  it('works with empty array', () => {
    const result = arrayWithout([], 'search');
    expect(result).toEqual([]);
  });

  it('works with okay attributes', () => {
    const result = arrayWithout([1, 3, 5], 5);
    expect(result).toEqual([1, 3]);
  });
});
