import cases from 'jest-in-case';
import { setFont } from './font';

describe('Font utils', () => {

  cases('setFont func cases', (opts) => {
    // @ts-ignore
    expect(setFont(...opts.input)).toEqual(opts.output);
  }, [
    { name: 'Non arguments assigned', input: [], output: null },
    { name: 'Font only assigned', input: [14], output: { fontSize: 14 } },
    { name: 'Color only assigned', input: [null, 'red'], output: { color: 'red' } },
    { name: 'All params assigned', input: [14, 'red', '1.4em', '0.3px'], output: { fontSize: 14, color: 'red',  fontWeight: '1.4em', letterSpacing: '0.3px' } },
  ]);
});
