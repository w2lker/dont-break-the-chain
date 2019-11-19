import { cleanMap, generateBoundedEdges, isParamUndefined } from '../helpers/helpers';
import { BoundAttributeArray, cssAttribute } from '../models';

type PositionName = 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky' | 'inherit' | 'initial' | 'unset' | null;

interface IPositionConfig {
  top?: cssAttribute;
  right?: cssAttribute;
  bottom?: cssAttribute;
  left?: cssAttribute;
}

export function position(type?: PositionName, config: IPositionConfig = {}) {
  if (isParamUndefined(type) && Object.entries(config).length === 0) {
    return null;
  }

  return cleanMap({
    position: type,
    ...config,
  });
}

export function positionMirrored(type: PositionName, config: string = '') {
  if (isParamUndefined(type) && isParamUndefined(config)) {
    return null;
  }
  const positionBounds: BoundAttributeArray = ['top', 'right', 'bottom', 'left'];
  const edges = generateBoundedEdges(positionBounds, config);
  return cleanMap({
    ...edges,
    position: type,
  });
}
