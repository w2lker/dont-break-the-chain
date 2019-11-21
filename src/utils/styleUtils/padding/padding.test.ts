import { padding } from './padding';

describe('padding', () => {
  it('works without attributes', () => {
    // @ts-ignore
    expect(padding()).toEqual({});
  });
  it('works with normal attributes', () => {
    expect(padding('1px 2em unset')).toEqual({
      paddingTop: '1px',
      paddingRight: '2em',
      paddingLeft: '2em',
    });
  });
});
