import { BoundAttributeArray } from '../models';

export function isParamUndefined(param: any): boolean {
  return (!param || param === 'unset' || param === 'null') && param !== 0;
}

export function cleanMap(sourceMap: {}): {} {
  if (!sourceMap) {
    return {};
  }
  const resultMap = {
    ...sourceMap,
  };
  for (const propName in resultMap) {
    // @ts-ignore
    if (resultMap[propName] === null || resultMap[propName] === undefined || resultMap[propName] === 'unset' || resultMap[propName] === 'null') {
      // @ts-ignore
      delete resultMap[propName];
    }
  }
  return resultMap;
}

export function boxEdges(composed: string | null): BoundAttributeArray | null {
  if (!composed) {
    return null;
  }
  // in case long string has been provided take reasonable part of it
  const boundes = composed.substr(0, 1000).trim().replace(/\s{2,}/g, ' ');
  const split: string[] = boundes.split(' ');

  switch (split.length) {
    case 4:
      // @ts-ignore
      return split;
    case 3:
      // @ts-ignore
      return split.concat(split[0]);
    case 2:
      // @ts-ignore
      return split.concat(split);
    case 1:
      // @ts-ignore
      return Array(4).fill(split[0]);
    default:
      // tslint:disable-next-line:no-console
      console.error(`Params error: expected to receive from 1 to 4 entries, but found ${split.length} entries. Please check input data`);
      return null;
  }
}

export function generateBoundedEdges(keys: BoundAttributeArray, config: string | null) {
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
