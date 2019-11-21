import { getAttributeWithDefault } from '../helpers';
import { cssAttribute } from '../models';

export function ellipsis(width?: cssAttribute , customDisplay?: cssAttribute) {
  const maxWidth = getAttributeWithDefault(width, '100%');
  const display = getAttributeWithDefault(customDisplay, 'inline-block');
  return {
    display,
    maxWidth,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    wordWrap: 'normal',
  };
}
