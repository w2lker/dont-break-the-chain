import { cleanMap } from '../helpers';

export function hideText() {
  return cleanMap({
    overflow: 'hidden',
    textIndent: '101%',
    whiteSpace: 'nowrap',
  });
}

export function hideVisually() {
  return cleanMap({
    border: 0,
    clip: 'rect(1px, 1px, 1px, 1px)',
    clipPath: 'inset(100%)',
    height: 1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    width: 1,
  });
}

export function unhideVisually() {
  return cleanMap({
    clip: 'auto',
    clipPath: 'none',
    height: 'auto',
    overflow: 'visible',
    position: 'static',
    width: 'auto',
  });
}
