import { BoundAttributeArray } from '../../models';
import { boxEdges } from '../boxEdges/boxEdges';
import { cleanMap } from '../cleanMap/cleanMap';
import { isParamUndefined } from '../isParameterUndefined/isParameterUndefined';

export function getBoundedEdges(keys: BoundAttributeArray, config: string | null) {
  if (!keys || isParamUndefined(config)) {
    return {};
  }
  const edges = boxEdges(config) || [];
  const mappedEdges = keys.reduce((result, keyName, index) => {
    // @ts-ignore
    result[keyName] = edges[index];
    return result;
  }, {});

  return cleanMap(mappedEdges);
}
