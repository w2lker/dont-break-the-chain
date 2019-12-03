import { BoundAttributeArray } from '../../models';

export function boxEdges(composed: string | null): BoundAttributeArray | null {
  if (!composed) {
    return null;
  }
  // in case long string has been provided take reasonable part of it
  const bounds = composed.substr(0, 1000).trim().replace(/\s{2,}/g, ' ');
  const split = bounds.split(' ') as BoundAttributeArray;

  switch (split.length) {
    case 4:
      return split;
    case 3:
      // @ts-ignore
      return split.concat(split[1]);
    case 2:
      // @ts-ignore
      return split.concat(split);
    case 1:
      // @ts-ignore
      return Array(4).fill(split[0]);
    default:
      throw new Error(`Params error: expected to receive from 1 to 4 entries, but found ${split.length} entries. Please check input data`);
  }
}
