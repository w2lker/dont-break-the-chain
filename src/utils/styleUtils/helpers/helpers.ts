export function isParamUndefined(param: any): boolean {
  return (!param || param === 'unset') && param !== 0;
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
    if (resultMap[propName] === null || resultMap[propName] === undefined || resultMap[propName] === 'unset') {
      // @ts-ignore
      delete resultMap[propName];
    }
  }
  return resultMap;
}
