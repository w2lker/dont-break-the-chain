export function cleanMap(sourceMap: {}): {} {
  const resultMap = {
    ...sourceMap,
  };
  for (const propName in resultMap) {
    // @ts-ignore
    if (resultMap[propName] === null || resultMap[propName] === undefined) {
      // @ts-ignore
      delete resultMap[propName];
    }
  }
  return resultMap;
}