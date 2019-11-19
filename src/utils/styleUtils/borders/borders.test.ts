import { borderBottomRadius, borderColor, borderLeftRadius, borderRightRadius, borderTopRadius } from './borders';

describe('borderColor', () => {
  it('works without attributes', () => {
      // @ts-ignore
    expect(borderColor()).toBeNull();
  });
  it('works with normal attributes', () => {
    expect(borderColor('#a60b55 #76cd9c null #e8ae1a')).toEqual({
      borderTopColor: '#a60b55',
      borderRightColor: '#76cd9c',
      borderLeftColor: '#e8ae1a',
    });
  });
});

describe('borderTopRadius', () => {
  it('works without attributes', () => {
      // @ts-ignore
    expect(borderTopRadius()).toEqual({});
  });
  it('works with normal attributes', () => {
    expect(borderTopRadius('14vw')).toEqual({
      borderTopLeftRadius: '14vw',
      borderTopRightRadius: '14vw',
    });
  });
});

describe('borderLeftRadius', () => {
  it('works without attributes', () => {
    // @ts-ignore
    expect(borderLeftRadius()).toEqual({});
  });
  it('works with normal attributes', () => {
    expect(borderLeftRadius('14vw')).toEqual({
      borderTopLeftRadius: '14vw',
      borderBottomLeftRadius: '14vw',
    });
  });
});

describe('borderRightRadius', () => {
  it('works without attributes', () => {
    // @ts-ignore
    expect(borderRightRadius()).toEqual({});
  });
  it('works with normal attributes', () => {
    expect(borderRightRadius('14vw')).toEqual({
      borderTopRightRadius: '14vw',
      borderBottomRightRadius: '14vw',
    });
  });
});

describe('borderBottomRadius', () => {
  it('works without attributes', () => {
    // @ts-ignore
    expect(borderBottomRadius()).toEqual({});
  });
  it('works with normal attributes', () => {
    expect(borderBottomRadius('14vw')).toEqual({
      borderBottomLeftRadius: '14vw',
      borderBottomRightRadius: '14vw',
    });
  });
});
