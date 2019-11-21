import { cleanMap, isParamUndefined } from '../helpers';

import { cssAttribute } from '../models';

// CSS for width and height of element
export function size(width: cssAttribute, height: cssAttribute = width) {
  if (isParamUndefined(width) && isParamUndefined(height)) {
    return null;
  }

  return cleanMap({
    width,
    height,
  });
}

// CSS for width, min-width and max-width of element
export function widthMinMax(width: cssAttribute) {
  if (isParamUndefined(width)) {
    return null;
  }

  return cleanMap({
    width,
    minWidth: width,
    maxWidth: width,
  });
}
