import { cleanMap, isParamUndefined } from '../helpers';
import { cssAttribute } from '../models';

// TODO: add fields as optional to improve usage experience
// TODO: add lineHeight option
// TODO: overload function to pass object

export function setFont(fontSize: cssAttribute, color: string, fontWeight: cssAttribute, letterSpacing: cssAttribute) {
  if (isParamUndefined(fontSize) && isParamUndefined(color) && isParamUndefined(fontWeight) && isParamUndefined(letterSpacing)) {
    return null;
  }
  return cleanMap({
    fontSize,
    color,
    fontWeight,
    letterSpacing,
  });
}
