import { cleanMap, isParamUndefined } from '../helpers/helpers';
import { cssAttribute } from '../models';

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
