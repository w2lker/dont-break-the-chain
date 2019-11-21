import { cleanMap } from '../helpers';

type justifyContentOptions =
    // Positional alignment
    'center' | 'start' | 'end' | 'flex-start' | 'flex-end' | 'left' | 'right' | 'normal' |
    // Baseline alignment
    'baseline' | 'first baseline' | 'last baseline' |
    // Positional alignment
    'space-between' | 'space-around' | 'space-evenly' | 'stretch' |
    // Overflow alignment
    'safe center' | 'unsafe center' |
    // Global values
    'inherit' | 'initial' | 'unset' | null;

type alignItemsOptions = 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch' |
    // Global values
    'inherit' | 'initial' | 'unset' | null;

export function setFlex(justifyContent: justifyContentOptions, alignItems: alignItemsOptions) {
  return cleanMap({
    alignItems,
    justifyContent,
    display: 'flex',
  });
}
