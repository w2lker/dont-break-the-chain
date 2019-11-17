import { size, widthMinMax } from './size';

describe('Size utils', () => {
  it('size function works', () => {
    expect(size('unset')).toBeNull();
    // @ts-ignore
    expect(size(undefined, undefined)).toBeNull();
    expect(size(15)).toEqual({ width: 15, height: 15 });
    expect(size(15, '30px')).toEqual({
      width: 15,
      height: '30px',
    });
    expect(size('unset', 'some-value')).toEqual({
      height: 'some-value',
    });
  });
  it('widthMinMax function works', () => {
    expect(widthMinMax('unset')).toBeNull();
    expect(widthMinMax('some-param')).toEqual({
      width: 'some-param',
      minWidth: 'some-param',
      maxWidth: 'some-param',
    });
  });
});
