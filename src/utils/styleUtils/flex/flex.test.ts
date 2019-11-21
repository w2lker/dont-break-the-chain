import { setFlex } from './flex';

describe('Flex utils', () => {
  const displayFlex = {
    display: 'flex',
  };
  it('Blank arguments testing', () => {
      // @ts-ignore
    expect(setFlex()).toEqual(displayFlex);
    expect(setFlex('unset', 'unset')).toEqual(displayFlex);
  });
  it('Normal arguments testing', () => {
    const expectedResponse = {
      ...displayFlex,
      justifyContent: 'flex-start',
      alignItems: 'center',
    };
    expect(setFlex('flex-start', 'center')).toEqual(expectedResponse);
  });
});
