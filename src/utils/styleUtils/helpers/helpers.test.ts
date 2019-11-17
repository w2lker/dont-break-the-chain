import { cleanMap, isParamUndefined } from './helpers';

describe('Test style helpers', () => {
  it('isParamUndefined works', () => {
    expect(isParamUndefined(null)).toBeTruthy();
    expect(isParamUndefined(undefined)).toBeTruthy();
    expect(isParamUndefined('')).toBeTruthy();
    expect(isParamUndefined('unset')).toBeTruthy();
    expect(isParamUndefined(0)).toBeFalsy();
  });
  it('cleanMap works', () => {
    // @ts-ignore
    expect(cleanMap()).toEqual({});
    // @ts-ignore
    expect(cleanMap(null)).toEqual({});
    expect(cleanMap({ some: 'unset' })).toEqual({});
    expect(cleanMap({
      a: 1,
      ['undefined']: 23,
      c: null,
    })).toEqual({
      a: 1,
      ['undefined']: 23,
    });
  });
});
