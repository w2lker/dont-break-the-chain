import cases from 'jest-in-case';
import { position, positionMirrored } from './position';

describe('Positioning utils: position', () => {
  it('works without attributes', () => {
    // ts-ignore
    expect(position()).toBeNull();
  });
  it('works with one attribute', () => {
    // ts-ignore
    expect(position('relative')).toEqual({ position: 'relative' });
    expect(position(null, { top: 1, left: 2 })).toEqual({
      top: 1,
      left: 2,
    });
  });

  it('works normally', () => {
    const configuredPosition = {
      top: 12,
      right: 14,
      bottom: '13em',
    };
    const testingPosition = {
      ...configuredPosition,
      left: 'unset',
    };
    const expectedResult = {
      ...configuredPosition,
      position: 'absolute',
    };
    expect(position('absolute', testingPosition)).toEqual(expectedResult);
  });
});

describe('Positioning utils: positionMirrored', () => {

  it('works without attributes', () => {
    // @ts-ignore
    expect(positionMirrored()).toBeNull();
  });
  it('works with one attribute', () => {
    expect(positionMirrored('relative')).toEqual({
      position: 'relative',
    });
    expect(positionMirrored(null, '13px 15px 56px 53px')).toEqual({
      top: '13px',
      right: '15px',
      bottom: '56px',
      left: '53px',
    });
  });

});
