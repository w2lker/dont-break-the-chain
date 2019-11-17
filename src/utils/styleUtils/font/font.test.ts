import { setFont } from './font';

describe('Font utils', () => {
  it('font function works', () => {
    // @ts-ignore
    expect(setFont()).toBeNull();
    // @ts-ignore
    expect(setFont(14)).toEqual({
      fontSize: 14,
    });
    // @ts-ignore
    expect(setFont(null, 'red')).toEqual({
      color: 'red',
    });
    expect(setFont(14, 'red', '1.4em', '0.3px')).toEqual({
      fontSize: 14,
      color: 'red',
      fontWeight: '1.4em',
      letterSpacing: '0.3px',
    });
  });
});
