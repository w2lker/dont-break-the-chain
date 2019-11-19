import { lightGreen } from '@material-ui/core/colors';
import { boxEdges, cleanMap, isParamUndefined, reduceBoundedEdges } from '../helpers/helpers';
import { cssAttribute } from '../models';

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
  const edges = boxEdges(config) || [];
  const positionBounds = ['top', 'right', 'bottom', 'left'];
  const positionParams = reduceBoundedEdges(positionBounds, edges);
  return position(type, positionParams);
}
