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
  beforeAll(() => {
    // tslint:disable-next-line:no-console no-empty
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });
  it('works without attributes', () => {
    // @ts-ignore
    expect(positionMirrored()).toBeNull();
  });
  it('works with one attribute', () => {
    expect(positionMirrored('relative')).toEqual({
      position: 'relative',
    });
    expect(positionMirrored(null, '13px 15px 56px, 53px')).toEqual({
      top: '13px',
      right: '15px',
      bottom: '56px',
      left: '53px',
    });
  });

  // @ts-ignore
  const getExpectedResult = (type, top, right, bottom, left) => ({
    type,
    top,
    right,
    bottom,
    left,
  });

  cases('mirrors attributes correctly cases', (opts) => {
    // @ts-ignore
    expect(position(opts.type, opts.params)).toEqual(opts.result);
  }, [
    { name: 'Passes 1 param', type: 'absolute', params: 'someval', result: getExpectedResult('absolute', 'someval', 'someval', 'someval', 'someval') },
    { name: 'Passes 2 params', type: 'sticky', params: '14px 45em', result: getExpectedResult('sticky', '14px', '45em', '14px', '45em') },
    { name: 'Passes 3 params', type: 'fixed', params: '14px 45em 3vh', result: getExpectedResult('sticky', '14px', '45em', '3vh', '45em') },
    { name: 'Passes 4 params', type: 'absolute', params: '13px 15px 56px, 53px', result: getExpectedResult('sticky', '13px', '15px', '56px', '53px') },
  ]);

  test.todo('Add option to fail 5 and more attributes');

  afterAll(() => {
    // @ts-ignore
    // tslint:disable-next-line:no-console
    console.error.mockRestore();
  });

});
