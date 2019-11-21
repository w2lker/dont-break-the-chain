import { margin } from './margin';

describe('margin', () => {
  it('works without attributes', () => {
    // @ts-ignore
    expect(margin()).toEqual({});
  });
  it('works with normal attributes', () => {
    expect(margin('1px 2em null 3vw')).toEqual({
      marginTop: '1px',
      marginRight: '2em',
      marginLeft: '3vw',
    });
  });
});
