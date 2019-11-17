import { setFlex } from './flex';

describe('Flex utils', () => {
  it('flex function works', () => {
    const displayFlex = {
      display: 'flex',
    };
    // @ts-ignore
    expect(setFlex()).toEqual(displayFlex);
    expect(setFlex('unset', 'unset')).toEqual(displayFlex);
    expect(setFlex('flex-start', 'center')).toEqual({
      ...displayFlex,
      justifyContent: 'flex-start',
      alignItems: 'center',
    });
  });
});
